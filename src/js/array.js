const e = require("express");

function isArray(value) {
  if (value instanceof Array) {
    console.log("isArray = true");
    console.log(value.toString());
  }
}
let array = ['red', 'green'];
isArray(array);
//栈
array.push("balck");
array.push("brown");
console.log(array.toString());
array.pop();

console.log(array.toString());
// 队列
console.log(array.shift());
console.log(array.toString());

function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;

  } else {
    return 0;
  }
}
//排序
let values = [0, 1, 29, 3, 22, 68, 8];
values.sort(compare);
console.log(values);
var colors = ['red', 'green'];
// 创建新数组
var colors2 = colors.concat("yellow", ["black", "brown"])
console.log(colors2);

// 截取数组
var colors3 = colors2.slice(1);
console.log(colors3);

var colors4 = colors2.slice(1, 4);
console.log(colors4);
// 删除
var removed = colors2.splice(0, 1);
console.log(colors2);
console.log(removed);

var removed = colors2.splice(1, 0, "red", "orange");
console.log(colors2);
console.log(removed);


var removed = colors2.splice(1, 1, "red", "orange");
console.log(colors2);
console.log(removed);

var numbers = [1, 23, 4, 5, 6, 7, 8, 9, 0, 5, 4, 343, 34, 23, ];
console.log(numbers.indexOf(4));
console.log(numbers.indexOf(4, 4));
console.log(numbers.lastIndexOf(4));
console.log(numbers.lastIndexOf(4, 4));