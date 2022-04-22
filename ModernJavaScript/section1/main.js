'use strict';

{
  const firstArray = [1, 2, 3];
  const secondArray = [4, 5, 6];
  const firstObj = {name: 'hoge', age: 22};
  const secondObj = {name: 'fuga', age: 12};
  console.log(firstArray + secondArray);
  /* 1,2,34,5,6 
    文字列として扱われるため
  */

  console.log(firstObj + firstArray);
  /* [object Object]1,2,3
    文字列として扱われるため
    objectはキーを指定していないため'object'という文字列となる
  */


  console.log(secondArray + secondObj);
  /* 4,5,6[object Object]
    文字列として扱われるため
    objectはキーを指定していないため'object'という文字列となる
  */

  console.log(firstObj + secondObj);
  /* [object Object][object Object]
    文字列として扱われるため
    objectはキーを指定していないため'object'という文字列となる
  */

  console.log(firstArray - secondObj);
  /* NaN
    型が数値扱いとなるためNaNというエラーとなる
  */
}