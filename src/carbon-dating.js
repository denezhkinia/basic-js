const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity === "string" && !isNaN(sampleActivity) && sampleActivity != false && sampleActivity > 0 && sampleActivity <= 15) {
		let k = 0.693 / HALF_LIFE_PERIOD;
		let t = Math.log(MODERN_ACTIVITY / sampleActivity)
		return Math.trunc(t / k) + 1
	}
	else {
		return false;
	}
};
