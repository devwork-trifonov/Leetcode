/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  function equalizationLength(a, b) {
    if (a.length > b.length) {
      let filler = new Array(a.length - b.length).fill(0).join("");
      b = filler.concat(b);
    } else if (a.length < b.length) {
      let filler = new Array(b.length - a.length).fill(0).join("");
      a = filler.concat(a);
    }
    return [a, b];
  }
  let boofer = 0;
  let result = [];
  let [equalizedA, equalizedB] = equalizationLength(a, b);
  for (let i = equalizedA.length - 1; i >= 0; i--) {
    let sum = +equalizedA[i] + +equalizedB[i] + boofer;
    if (sum === 0) {
      result.push(0);
    } else if (sum === 1) {
      result.push(1);
      boofer = 0;
    } else if (sum % 2 !== 0) {
      result.push(1);
      boofer = (sum - 1) / 2;
    } else if (sum % 2 === 0) {
      result.push(0);
      boofer = sum / 2;
    }
  }
  if (!boofer) {
    return result.reverse().join("");
  }
  result.push(1);
  return result.reverse().join("");
};
