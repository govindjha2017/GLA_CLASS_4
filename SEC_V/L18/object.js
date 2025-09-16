
var student = {
    // name:'rahul',
    'first name':'rahul',
    'age':20,
    "city":'Delhi',
    phone:1234567890,
    marks:[6.5,7.1,7.5,6.8,4.5,9.2]
}

console.log(student);
console.log(student.age);
console.log(student.city);

student.marks.push(7.5);
console.log(student);

console.log(student["first name"]);;
console.log(student['phone']);