const CustomError = require("../extensions/custom-error");


module.exports = function transform(arr) {
	if (!Array.isArray(arr)) return error;
	let newArr = arr.slice();
	let k = 0
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string' && arr[i].includes('--')) {
			if (arr[i] === '--discard-next') {
				if (typeof arr[i + 1] === 'undefined') {
					newArr.splice(k, 1)
					k--
				}
				else {
					if (typeof arr[i + 2] === 'undefined') {
						newArr.splice(k, 2)
						k -= 2
					}
					else {
						if (arr[i + 2] === ('--discard-prev') || arr[i + 2] === '--double-prev') {
							newArr.splice(k, 3)
							k -= 3
						}
						else {
							newArr.splice(k, 2)
							k -= 2
						}
					}
				}
			}
			else if (arr[i] === '--discard-prev') {
				debugger
				if (typeof arr[i - 1] === 'undefined') {
					newArr.splice(k, 1);
					k--;
				}
				else if (arr[i - 2] !== '--discard-next') {
					newArr.splice((k - 1), 2)
					k -= 2;
				}
			}
			else if (arr[i] === '--double-next') {
				if (typeof arr[i + 1] === 'undefined') {
					newArr.splice(k, 1)
					k--;
				}
				else
					newArr.splice(k, 1, arr[i + 1])
			}
			else if (arr[i] === '--double-prev') {

				if (typeof arr[i - 1] === 'undefined') {
					newArr.splice(k, 1)
					k--
				}
				else if (arr[i - 2] !== '--discard-next')
					newArr.splice(k, 1, arr[i - 1])
			}
		}
		k++
	}
	return newArr
}

