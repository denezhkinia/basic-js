const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let result = '';
	if (typeof options['addition'] !== 'undefined')
		result = doAddition(options)
	if (typeof options['separator'] !== 'undefined')
		result = str + result + options['separator']
	else
		result = str + result + '+'
	if (options['repeatTimes'] > 1)
		result = result.repeat(options['repeatTimes'])
	result = typeof options['separator'] !== 'undefined' ? result.substring(0, result.length - options['separator'].length) : result.substring(0, result.length - 1)
	return result;
}
function doAddition(options) {
	let res = options['addition'];
	if (typeof options['additionSeparator'] !== 'undefined')
		res = res + options['additionSeparator'];
	else
		res = res + '|'
	if (typeof options['additionRepeatTimes'] !== 'undefined')
		res = options['additionRepeatTimes'] > 1 ? res.repeat(options['additionRepeatTimes']) : res;
	res = typeof options['additionSeparator'] !== 'undefined' ? res.substring(0, res.length - options['additionSeparator'].length) : res.substring(0, res.length - 1)
	return res;
}