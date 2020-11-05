exports.getResponseBasedOnThursdayAndFriday = (data) =>
  data.filter(
    (d) =>
      new Date(d.datetime).getDay() === 4 || new Date(d.datetime).getDay() === 5
  );

exports.getResponseBasedOnTemperature = (data) =>
  data.filter((t) => t.temp > 20 && t.temp < 30);

exports.getResponseBasedOnUVIndex = (data) => data.filter((d) => d.uv < 3);
