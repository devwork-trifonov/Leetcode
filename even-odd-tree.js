/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  const result = new Set();
  const getIsReallyEvenIndexedLevel = (array) => {
    for (let index = 1; index < array.length; index++) {
      if (array[index] % 2 === 0 || array[index - 1] % 2 === 0) {
        result.add(false);
        return;
      }
      if (array[index] <= array[index - 1]) {
        result.add(false);
        return;
      }
    }
  };
  const getIsReallyOddIndexedLevel = (array) => {
    for (let index = 1; index < array.length; index++) {
      if (array[index] % 2 !== 0 || array[index - 1] % 2 !== 0) {
        result.add(false);
        return;
      }
      if (array[index] >= array[index - 1]) {
        result.add(false);
        return;
      }
    }
  };
  const levels = {};
  for (let index = 0, levelsIndex = 0; index < root.length + 1; levelsIndex++) {
    const quantity = Math.pow(2, levelsIndex);
    levels[levelsIndex] = root.slice(index, index + quantity);
    index += quantity;
  }
  for (const [key, value] of Object.entries(levels)) {
    let isHasNull = true;
    while (isHasNull) {
      const index = value.indexOf(null);
      if (index === -1) {
        isHasNull = false;
        break;
      }
      value.splice(index, 1);
    }
  }
  for (const [key, value] of Object.entries(levels)) {
    if (key % 2 === 0) {
      getIsReallyEvenIndexedLevel(value);
    } else {
      getIsReallyOddIndexedLevel(value);
    }
  }
  return !result.has(false);
};
