/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	const result = new Set();

	const getNumberOfCombineVariants = (numbers) => {
		let numberOfCombineVariants = 1;

		for (let index = 1; index < numbers.length + 1; index++) {
			numberOfCombineVariants *= index;
		}

		return numberOfCombineVariants;
	};

	for (let index = nums.length - 1; index >= 0; index--) {
		const tempNums = [...nums];
		for (let index = 0; index < tempNums.length; index++) {}
	}
	nums.splice(1, 1, 4);
	console.log(nums);
};

const nums = [1, 1, 2];

console.log(permuteUnique(nums));
