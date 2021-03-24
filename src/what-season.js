const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (typeof date === 'undefined') return 'Unable to determine the time of year!'
	if (!Object.prototype.toString.call(date) === '[object Date]' || isNaN(date) || date === null) return 'THROWN';
	let month = date.getMonth()
	let res;
	if (month > 1 && month < 5)
		res = 'spring';
	else if (month > 4 && month < 8)
		res = 'summer';
	else if (month > 7 && month < 11)
		res = 'autumn';
	else
		res = 'winter';
	return res;
};
