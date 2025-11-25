import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';

const Users = [
  {name:'rahul', age:25 , city:'Delhi'},
  {name:'ajay', age:35 , city:'Banglore'},
  {name:'aman', age:22 , city:'pune'},
  {name:'soni', age:20 , city:'Mumbai'},
  {name:'teena', age:25 , city:'Noida'},
  {name:'teena', age:25 , city:'Noida'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <h1>Hello </h1>
      {/* <Card name="rahul" age={34} city='Delhi' />
      <Card name="ajay" age={20} city="Banglore" />
      <Card/> */}

      {
        Users.map((item,ind)=>{
          return(
            <Card name={item.name} age={item.age} city={item.city} />
          )
        })
      }
    </>
);

 