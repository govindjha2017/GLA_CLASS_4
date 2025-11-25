import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';

const Users = [
  {name:'rahul',age:30,city:'Pune'},
  {name:'ajay',age:25,city:'Banglore'},
  {name:'aman',age:24,city:'Noida'},
  {name:'soni',age:22,city:'Delhi'},
  {name:'teena',age:27,city:'delhi'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Card></Card>  
    <Card/>
    {Card()} */}
    {/* <Card name="aman" age={25} city="Delhi" />
    <Card name="rahul" age={45} city="banglore" /> */}

    {
      Users.map((item,ind)=>{
        return (
          <Card name={item.name} age={item.age} city={item.city}/>
        )
      })
    }

  </>
);

 
