import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card'
import Counter from './Counter'

const Users = [
  {name:'rahul' , age:24 , city:'Delhi'},
  {name:'ajay' , age:34 , city:'Kolkata'},
  {name:'Aman' , age:20 , city:'Banglore'},
  {name:'soni' , age:25 , city:'Pune'},
  {name:'teena' , age:27 , city:'Noida'},
  {name:'teena' , age:27 , city:'Noida'}
]

createRoot(document.getElementById('root')).render(
  <>
    {/* <h1>My first react app using vite</h1>
    {Card({name:'rahul' , age:79, city:"mathura"})}
    <Card name="ajay" age={43} city="Delhi" ></Card>
    <Card/> */}
    <Counter/>
    {
      Users.map((item,ind)=>{
        return(
          <Card key={ind} name={item.name} age={item.age} city={item.city} />
        )
      })
    }
  </>
)
