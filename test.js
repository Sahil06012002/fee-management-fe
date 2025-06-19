const arr = [1, 2, 3, 4, 5];
let some = [];

const ans = arr.reduce((acc, initial) => {
  console.log(`accumukato ${acc} value ${initial}`);
  some.push(initial);
  return some;
});

console.log(ans);
