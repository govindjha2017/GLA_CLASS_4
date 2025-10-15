const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

// Given an array of objects users, print fullname.

let x = users.map((item)=>{
    return item.firstName + " " + item.lastName
})

console.log(x);