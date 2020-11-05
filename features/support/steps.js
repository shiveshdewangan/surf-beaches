const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();
const weatherRestAPI = require("../../pojo/weather");
const {
  Given,
  Then,
  When,
  BeforeAll,
  AfterAll
} = require("@cucumber/cucumber");
const data = require("../../data/test-data");
const {
  getResponseBasedOnThursdayAndFriday,
  getResponseBasedOnTemperature,
  getResponseBasedOnUVIndex
} = require("../../utils/helper");

let response;
let responseBasedOnTemp;
let responseBasedOnUVIndex;
let responseBasedOnThursdayAndFriday;
let finalResult = [];

BeforeAll(async function() {});

AfterAll(async function() {
  await console.log(
    "List of Beach for Surfing based on Temp and UV Index",
    finalResult
  );
});

Given("I like to surf in any two beaches out of top ten in Sydney", () => {
  data.should.be.a("object");
  Object.keys(data).should.be.of.length(10);
  Object.values(data).should.be.of.length(10);
});

When(
  /^I look up the the weather forecast for the next sixteen days using \"([^\"]*)\"$/,
  async (postalcode) => {
    response = await weatherRestAPI.getWeatherReportForNext16Days(postalcode);
    expect(response.ok).to.equal(true);
    expect(response.statusCode).to.equal(200);
  }
);

Then(
  "I only like to surf on any {int} days specifically Thursday & Friday in next {int} Days",
  (two, sixteen) => {
    responseBasedOnThursdayAndFriday = getResponseBasedOnThursdayAndFriday(
      response.body.data
    );
  }
);

Then(/^I check to if see the temperature is between 20℃ and 30℃$/, () => {
  responseBasedOnTemp = getResponseBasedOnTemperature(
    responseBasedOnThursdayAndFriday
  );
});

Then(/^I check to see if UV index is less than 3$/, () => {
  responseBasedOnUVIndex = getResponseBasedOnUVIndex(responseBasedOnTemp);
});

Then(
  /^I pick two spots based on suitable weather forecast for the day using \"([^\"]*)\"$/,
  (beachname) => {
    if (responseBasedOnUVIndex.length > 0) {
      finalResult.push(beachname);
    }
  }
);
