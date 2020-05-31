/* 
Compare two version numbers version1 and version2.
If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.

The . character does not represent a decimal point and is used to separate number sequences.

For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

You may assume the default revision number for each level of a version number to be 0. For example, version number 3.4 has a revision number of 3 and 4 for its first and second level revision number. Its third and fourth level revision number are both 0.
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const vArr1 = version1.split('.');
  const vArr2 = version2.split('.');
  const maxLen = Math.max(vArr1.length, vArr2.length);
  let i = 0;
  let v1 = 0;
  let v2 = 0;
  while (i < maxLen) {
    v1 = (vArr1[i] || 0) * Math.pow(10, maxLen - i);
    v2 = (vArr2[i] || 0) * Math.pow(10, maxLen - i);
    console.log(v1, v2);
    if (v1 === v2) {
      i++;
    } else {
      return v1 > v2 ? 1 : -1;
    }
  }
  return 0;
};

console.log(compareVersion('1.1.1', '1'));
