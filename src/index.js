/**
 * @param {number[][]} matrix
 * @return {number}
 */

module.exports = function towelSort (matrix) {

  if (!matrix || !matrix.length) return [];

  let len = 0;
  for (const v of matrix) len += v.length;

  let res = new Array(len), f = true, i = 0;

  for (const v of matrix) {
    if (f) 
      for (const t of v) res[i++] = t;
    else
      for (let t = v.length - 1; t >= 0; t--) res[i++] = v[t];
    f = !f;
  }
  
  return res;
}
