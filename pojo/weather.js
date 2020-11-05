const request = require("supertest");
const {
  key,
  baseURL,
  firstPath,
  secondPath
} = require("../config/test-config");

class WeatherRestApiClient {
  constructor() {
    this.baseURL = baseURL;
    this.firstPath = firstPath;
    this.secondPath = secondPath;
  }

  getBaseURL() {
    return this.baseURL;
  }

  getFirstPath() {
    return this.firstPath;
  }

  getSecondPath() {
    return this.secondPath;
  }

  async getWeatherReportForNext16Days(postalcode) {
    let response;
    try {
      response = await request(this.getBaseURL()).get(
        this.getFirstPath() + postalcode + this.getSecondPath()
      );
    } catch (error) {
      console.log(error);
    }
    return response;
  }
}

module.exports = new WeatherRestApiClient();
