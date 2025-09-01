// var arr = [1, 2, 3, 4, 5, 6, 4, 5, 4];

// for in loop
// for(let i in arr){
//     console.log(i);

// }

// for of loop
// for(let i of arr){
//     console.log(i);

// }

// for each loop
// arr.forEach(i =>{console.log(i)})

// for each loop dont allow return (undefined by default)
// let res = arr.forEach(function (a, b, c) {
//a for value,b for index,c for num of times arr print
// console.log();
//   return a;
// });
// console.log(res);

// Map works same as for-each except it allows return in function
// let res = arr.map(function (a, b, c) {
//a for value,b for index,c for num of times arr print
//   console.log(c);
//   return c;
// })
// console.log(res);

// Filter same as for-each and also works with condition
// let res = arr.filter(function (a, b, c) {
//a for value,b for index,c for num of times arr print
//   console.log();
//   return a%2==0;
// });
// console.log(res); //always returns value in array format.

// Find same as filter and also works with condition.
// let res = arr.find(function (a, b, c) {
//cannot print dublicate values
//a for value,b for index,c for num of times arr print
//   console.log();
// return a == 4;
// });
// console.log(res); //always returns value in number format.

// Reduce
// let sum = arr.reduce( (a, b, c, d )=>{
//   return a+b;
// })
// console.log(sum);

// Practice return sum of all even and greater than 2
// let arr =[1,2,3,4,5,64,3,5,2,5,2,34];
// let num = arr.map((a,b,c)=>{
//   if(a>2){
//   return a;
//   }
// })
// console.log(num);

// let even = num.filter((a,b,c)=>{
//   return a%2==0
// })
// console.log(even);

// let sum = even.reduce((a,b,c,d)=>{
//   return a+b
// }) 
// console.log(sum);

// Sort function
let arr =[1,2,3,4,5,64,3,5,2,5,2,34];
let newArr = arr.sort((a,b)=>{
  return a-b; // assending order
  // return b-a; // desending order
})
console.log(newArr)





