const axios = require("axios").default;

async function getData(url) {
  const response = await axios.get(url).catch(err => {
    throw new Error(err);
  });
  return response.data;
};

async function getCovidIndiaData() {
  const response = await getData("https://api.covid19india.org/data.json");
  return response;
};

function getStateData(covidData) {
  const stateData = covidData.statewise;
  if (!stateData) throw new Error("No statewise data found!");
  return stateData;
};

function getNtopStatessByField(stateData , numberOfTopResults, fieldName) {
  stateData.sort((a, b) => b[fieldName] - a[fieldName]);
  const results = stateData.slice(0, numberOfTopResults);
  return results;
};

module.exports = {
  getCovidIndiaData,
  getStateData,
  getNtopStatessByField
};