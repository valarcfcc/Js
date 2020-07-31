const color = ['red', 'green'];
const colorful = [...color, 'pink'];
console.log(colorful);

const peopel = {
  name: 'xiaoming',
  age: 18
};
const peopelful = {
  ...peopel,
  address: 'abc'
};
console.log(JSON.stringify(peopelful));