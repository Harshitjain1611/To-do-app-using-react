import React, { useEffect } from 'react'
import { useState} from 'react'
// import Header from './header'
import Task from "./Task.jsx"
export const Home = () => {
    // let [curr,ChangeCurr]=useState(localStorage.getItem("tasks")?(JSON.parse(localStorage.getItem("tasks"))):[])
    // let [curr,ChangeCurr]=useState([])
    // const funcAdd=()=>{
    //     changeCurr(curr+)
    // }
    const initilarr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    let [curr,ChangeCurr]=useState(initilarr)
    let x=""
    let y=""
    let [title,Titlechange]=useState("")
    let [description,Descriptionchange]=useState("")
    const Titlehandler=(e) =>{
      title=Titlechange(e.target.value)
    }
    const Descriptionhandler=(e) =>{
      description=Descriptionchange(e.target.value)
    }
    const Submithandler=(e) =>{
      e.preventDefault()
    //   curr.push(ChangeCurr(title+" "+description))
      ChangeCurr([...curr,{title,description}])
    }
    const Deletetask=(index)=>{
        const filteredarray=curr.filter((val,i)=>{
            return i!== index
        });
        console.log(filteredarray)
        ChangeCurr(filteredarray)
    }
    useEffect(() => {
      localStorage.setItem("tasks",JSON.stringify(curr))
    }, [curr])  
    
  return (
    <div className='container'>
        <form  onSubmit={Submithandler}>
            <input type="text"  placeholder='work to do' name='inp' onChange={Titlehandler} /><br />
            <input type="text" placeholder='add discription' name='disc' onChange={Descriptionhandler}/><br />
            <button >add</button>

        </form>
        <div></div>
        <div>
        {curr.map((item,index)=>(        
        <Task key={index} Title={item.title} Description={item.description} Index={index} Deletetask={Deletetask}/> 
        ))}
        </div>
    </div>
  )
}
