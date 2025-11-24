import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';

const Users = [
  {
    name:'aman' , age:26 , city:'banglore'
  },
  {
    name:'rahul' , age:18 , city:'Mumbai'
  },
  {
    name:'ajay' , age:20 , city:'Delhi'
  },
  {
    name:'ruchi' , age:22 , city:'Noida'
  },
  {
    name:'teena' , age:24 , city:'Pune'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* {Card({name:"rahul",age:24,city:"delhi"})}
    <Card name="ajay" age={33} city='Mumbai' />
    <Card name={Users[0].name} age={Users[0].age}  city={Users[0].city}/>
    <Card/> */}

    {
      Users.map((item,ind)=>{
        return(
          <Card key={ind} name={item.name} age={item.age} city={item.city} />
        )
      })
    }

  </>
);