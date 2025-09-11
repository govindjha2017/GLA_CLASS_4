var student = {
    // name:'rahul',
    'first name':'rahul',
    'age':20,
    city:'Delhi',
    phone:2345678567,
    marks: [6,7.3,4.3,8]
}

console.log(student);

console.log(student.age);
console.log(student.marks[2]);

student.marks.push(9.2);
console.log(student);

// console.log(student."first name")
console.log(student["first name"]);
console.log(student['city']);
