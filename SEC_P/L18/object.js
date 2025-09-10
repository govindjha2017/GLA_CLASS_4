var student = {
    // name: 'rahul',
    'first name' : 'rahul',
    'age':23,
    city:'Delhi',
    phone: 54676890876543,
    marks: [4,6,6.5,8.4],
    obj : {
        kuchh:'hello'
    }
}

console.log(student);

console.log(student.name);
console.log(student.age);

console.log(student['first name']);
console.log(student['city'])

console.log(student.marks[2])

console.log(student.obj.kuchh);


let arr1 = [2,3,'hello',56,87,12];
let arr2 = [34,8];

console.log(arr1.concat(arr2));
console.log(arr1.slice(2,4))
