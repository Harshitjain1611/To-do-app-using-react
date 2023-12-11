import React from 'react'

const Task = ({Title,Description,Index,Deletetask}) => {
  return (
    <>
    <div className='fortask'>
    <div >{Title}</div>
    <span >{Description}</span>
    </div>
    <button onClick={()=>Deletetask(Index)}>-</button>
    </>
  )
}

export default Task