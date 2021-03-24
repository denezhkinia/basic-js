const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let count = 0;
	matrix.forEach(el => {
		count += catsInArray(el);
	});
	return count;


};
function catsInArray(arr) {
	let count = 0;
	arr.forEach(el => {
		if (el === "^^")
			count++
	});
	return count;
}