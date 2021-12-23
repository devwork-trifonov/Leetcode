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

	const getAllPermutations = (nums) => {
		const stringPermutations = new Set();

		const numsLength = nums.length;

		let currentElementIndex = 0;

		const getCurrentElementPermutations = (sequence, currentIndex) => {
			const localSequence = [...sequence];
			const currentElement = sequence[currentIndex];
			sequence.splice(
				currentIndex,
				numsLength - currentIndex - 1,
				sequence.slice(currentIndex + 1)
			);
			sequence.unshift(currentElement);
			for (let index = 0; index < array.length; index++) {
				const element = array[index];
			}
		};
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
