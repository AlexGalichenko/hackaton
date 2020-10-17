const fs = require("fs-extra");
const path = require("path");
/**
 * Glue reports in case of parallels run
 * @param {string} pathToJson - path to json
 */
function glueReports(pathToJson) {
    const files = fs.readdirSync(path.resolve(pathToJson));
    const REPORT_REGEXP = /^report\.\d+\.\d+\.json$/;
    const reports = files.filter(item => REPORT_REGEXP.test(item));

    const fullReport = reports
        .map(item => require(path.resolve(path.resolve(pathToJson) + '/' + item)))
        .reduce((prev, curr) => {
            if (curr.length > 0) {
                prev.push(curr[0]);
            }
            return prev;
        }, []);

    return fullReport.reduce((report, feature) => {
        const featureIndex = report.findIndex(reportFeature => reportFeature.id === feature.id);
        if (featureIndex !== -1) {
            report[featureIndex].elements.push(...feature.elements);
        } else {
            report.push(feature);
        }
        return report;
    }, []);
}

module.exports = glueReports;
