//ES5我们对于对象都是以键值对的形式书写，是有可能出现键值对重名的。
function people (name, age) {
  return {
    name: name,
    age: age
  };
}

//以上代码可以简写为
function people(name, age) {
  return {
    name,
    age
  };
}
