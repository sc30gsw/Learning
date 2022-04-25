'use strict';
{
  /** 2-8 */
  const result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < result.length; i ++) {

    switch (result[i]) {
      case 0:
        result[i] = 'zero';
        console.log(result[i]);
        break;

      case 1:
        result[i] = 'one';
        console.log(result[i]);
        break;

      case 2:
        result[i] = 'two';
        console.log(result[i]);
        break;

      case 3:
        result[i] = 'three';
        console.log(result[i]);
        break;

      case 4:
        result[i] = 'four';
        console.log(result[i]);
        break;

      case 5:
        result[i] = 'five';
        console.log(result[i]);
        break;

      case 6:
        result[i] = 'six';
        console.log(result[i]);
        break;

      case 7:
        result[i] = 'seven';
        console.log(result[i]);
        break;

      case 8:
        result[i] = 'eight';
        console.log(result[i]);
        break;
    
      default:
        result[i] = 'nine';
        console.log(result[i]);
        break;
    }
  }

  /** 2-10 */
  while (i ++ < s.length && s[i] != '');

  /** 2-11 */
  while (i <= 10) {
    console.log(i);
    i ++;
  }

  let x = a.length - 1;
  while (x >= 0) {
    console.log(a[x]);
    x --;
  }

  let k = 0;
  let j = a.length - 1;
  while (k < j) {
    let temp = a[k];
    a[k] = a[j]
    a[j] = temp

    k ++;
    j --;
  }

  let arr = [, 2, , 4];
  arr[9] = 100;
  let y = 0
  while (y < arr.length) {
    console.log(arr[y]);
    y ++;
  }

  let obj = [{name: 'Harry', age: 42}];
  let z = 0;
  console.log(obj.length);
  while (z < obj.length) {
    console.log(`name: ${obj[z].name}`);
    console.log(`age: ${obj[z].age}`);
    z ++;
  }
  
}