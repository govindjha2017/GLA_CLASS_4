// Print total marks for students with marks greater than
//  60 after 20 marks have been added to those who scored
//   less than 60

let student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

let x = student.map((item)=>{
    if(item.marks<60){
        item.marks+=20;
    }
    return item
}).filter((item)=>{
    if(item.marks>60){
        return true;
    }
}).reduce((acc,item)=>{
    return acc+item.marks
},0)

console.log(x);