const expect = require("chai").expect;

exports.getResponseBasedOnThursdayAndFriday = (data) =>
  data.filter(
    (d) =>
      new Date(d.valid_date).getDay() === 4 ||
      new Date(d.valid_date).getDay() === 5
  );

exports.getResponseBasedOnTemperature = (data) =>
  data.filter((t) => t.temp > 20 && t.temp < 30);

exports.getResponseBasedOnUVIndex = (data) => data.filter((d) => d.uv < 3);

exports.validateResponseBasedOnThursdayAndFriday = (data) => {
  data.forEach(
    (d) =>
      expect(
        new Date(d.valid_date).getDay() === 4 ||
          new Date(d.valid_date).getDay() === 5
      ).to.be.true
  );
};

exports.validateResponseBasedOnTemperature = (data) => {
  data.forEach((d) => expect(d.temp > 20 && d.temp < 30).to.be.true);
};

exports.validateResponseBasedOnUVIndex = (data) => {
  data.forEach((d) => expect(d.uv < 3).to.be.true);
};
