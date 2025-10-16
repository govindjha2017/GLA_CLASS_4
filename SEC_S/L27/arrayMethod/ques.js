let student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

// Print the names of students who scored more than 60

// ['smith','jenny']

let x = student.filter((item)=>{
    if(item.marks>60){
        return true
    }
}).map((item)=>{return item.name})




console.log(x);