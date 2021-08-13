let x = [1, 2, 3, 4, 5]
let i = 0
let j = x.length - 1;
[x[i], x[j]] = [x[j], x[i]]
console.log(x[i])
