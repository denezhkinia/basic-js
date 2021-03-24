const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members))
		return false;
	let resArr = members.reduce(function (res, item) {
		if (typeof item === "string" || item instanceof String) {
			let iteration = item.trim(' ').toUpperCase()
			res.push(iteration[0])
		}
		return res;
	}, []);
	resArr.sort()
	let res2 = resArr.join('')
	return res2;
};
