const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = myNumber.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40);
console.log(newNumber);

/* 
[
  41, 51,  61, 71,
  81, 91, 101
]
*/