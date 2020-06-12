function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  } else if (1 < x && x < 10) {
    return true;
  } else {
    const str = x.toString();
    const len = str.length;
    let flag = true;
    let i = 0,
      j = len - 1;
    while (i <= j) {
      if (str[i] === str[j]) {
        i++;
        j--;
      } else {
        flag = false;
        break;
      }
    }

    return flag;
  }
}
