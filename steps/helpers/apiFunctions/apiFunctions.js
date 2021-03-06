const axios = require("axios").default;

/**
 *
 * get data from a get request to a specified url
 * @param {String} url
 * @return {Object} response data
 */
async function getData(url) {
    const response = await axios.get(url).catch(err => {
        throw new Error(err);
    });
    return response.data;
}

/**
 *
 * get covid data for India object
 * @return {Object} India covid data object
 */
async function getCovidIndiaData() {
    return await getData("https://api.covid19india.org/data.json");
}

/**
 *
 * get states covid data
 * @param {Object} covidData covid data object
 * @return {Array<Object>} array of state data objects
 */
function getStateData(covidData) {
    const stateData = covidData.statewise;
    if (!stateData) throw new Error("No state wise data found!");
    return stateData;
}

/**
 *
 *
 * @param {Array<Object>} stateData array of state data objects
 * @param {Number} numberOfTopResults number of top results to return
 * @param {String} fieldName name of field to sort by
 * @return {Array<Object>} array of top n objects by specified field
 */
function getNTopStatesByField(stateData, numberOfTopResults, fieldName) {
    stateData.sort((a, b) => b[fieldName] - a[fieldName]);
    return stateData.slice(0, numberOfTopResults);
}

module.exports = {
    getData,
    getCovidIndiaData,
    getStateData,
    getNTopStatesByField
};