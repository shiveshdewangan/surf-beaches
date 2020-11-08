const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const schema = chai.use(require("chai-json-schema"));
const WeatherRestAPI = require("../../rest-client/weather");
const {
  Given,
  Then,
  When,
  BeforeAll,
  AfterAll
} = require("@cucumber/cucumber");
const TOP_TEN_BEACHES = require("../../data/test-data");
const expectedSchema = require("../../data/json-schema");
const {
  getResponseBasedOnThursdayAndFriday,
  getResponseBasedOnTemperature,
  getResponseBasedOnUVIndex,
  validateResponseBasedOnThursdayAndFriday,
  validateResponseBasedOnTemperature,
  validateResponseBasedOnUVIndex
} = require("../../utils/helper");

let response;
let responseBasedOnTemp;
let responseBasedOnUVIndex;
let responseBasedOnThursdayAndFriday;
let finalResult = [];

BeforeAll(async function() {});

AfterAll(async function() {
  const listOfBeaches = await finalResult;

  if (listOfBeaches.length > 0) {
    console.log(
      "List of Beachs for Surfing based on Temp and UV Index",
      listOfBeaches
    );
  } else {
    console.log(
      "Sorry, there's no beach for surfing as of now matching your criteria."
    );
  }
});

Given("I like to surf in any two beaches out of top ten in Sydney", () => {
  TOP_TEN_BEACHES.should.be.a("object");
  Object.keys(TOP_TEN_BEACHES).should.be.of.length(10);
  Object.values(TOP_TEN_BEACHES).should.be.of.length(10);
});

When(
  /^I look up the the weather forecast for the next sixteen days using \"([^\"]*)\"$/,
  async (postalcode) => {
    response = await WeatherRestAPI.getWeatherReportForNext16Days(postalcode);
    expect(response.headers["content-type"]).to.equal(
      "application/json; charset=utf-8"
    );
    expect(response.ok).to.equal(true);
    expect(response.statusCode).to.equal(200);
    expect(typeof response.body.data).to.equal("object");
    expect(response.body.data.length).to.equal(16);
    expect(response.body).to.be.jsonSchema(expectedSchema);
  }
);

Then(
  "I only like to surf on any {int} days specifically Thursday & Friday in next {int} Days",
  (two, sixteen) => {
    responseBasedOnThursdayAndFriday = getResponseBasedOnThursdayAndFriday(
      response.body.data
    );
    validateResponseBasedOnThursdayAndFriday(responseBasedOnThursdayAndFriday);
  }
);

Then(/^I check to if see the temperature is between 20℃ and 30℃$/, () => {
  responseBasedOnTemp = getResponseBasedOnTemperature(
    responseBasedOnThursdayAndFriday
  );
  validateResponseBasedOnTemperature(responseBasedOnTemp);
});

Then(/^I check to see if UV index is less than 3$/, () => {
  responseBasedOnUVIndex = getResponseBasedOnUVIndex(responseBasedOnTemp);
  validateResponseBasedOnUVIndex(responseBasedOnUVIndex);
});

Then(
  /^I pick two spots based on suitable weather forecast for the day using \"([^\"]*)\"$/,
  (beachname) => {
    if (responseBasedOnUVIndex.length > 0) {
      finalResult.push(beachname);
    }
  }
);
