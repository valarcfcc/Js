var colors = ['red', 'green'];
// 创建新数组
var colors2 = colors.concat("yellow", ["black", "brown"])
console.log(colors2);

// 截取数组
var colors3 = colors2.slice(1);
console.log(colors3);

var colors4 = colors2.slice(1, 4);
console.log(colors4);