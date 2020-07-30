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