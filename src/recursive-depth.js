const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let newArr = [];
		arr.forEach(element => {
			if (Array.isArray(element))
				newArr.push(element)
		});
		if (newArr.length !== 0) {
			let myArr = [].concat(...arr)
			newArr.length = 0;
			myArr.forEach(element => {
				if (Array.isArray(element))
					newArr.push(element)
			});
			return 1 + this.calculateDepth(newArr)
		}
		else return 1
	}
};