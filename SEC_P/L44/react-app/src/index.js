import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import Navbar from './Navbar';
import {BrowserRouter} from 'react-router-dom'
const Users = [
  {name:'rahul' , age:34, city:'Delhi'},
  {name:'ajay' , age:24, city:'Kolkata'},
  {name:'amit' , age:25, city:'Pune'},
  {name:'teena' , age:21, city:'Noida'},
  {name:'soni' , age:20, city:'Banglore'},
  {name:'rahul' , age:34, city:'Delhi'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
          <>
        {/* {Card({name:'rahul',age:45,city:'delhi'})}
        <Card></Card>
        <Card name="ajay" age={34} city="Mumbai" /> */}
          <Navbar/>
        {
          Users.map((item,ind)=>{
            return(
                <Card name={item.name} age={item.age} city={item.city}/>
            )
          })
        }
      </>
    </BrowserRouter>
);

 