import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Student from './Student'

let data = [
  {name:'rahul',grade:'A'},
  {name:'ajay',grade:'B'},
  {name:'teena',grade:'O'}
]
 

createRoot(document.getElementById('root')).render(
   <>
   
    <Student/>
    <Student/>
    <Student/>
   </>
)
