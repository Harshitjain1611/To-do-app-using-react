import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params=useParams()
    console.log(params.id)
  return (

    <div className='user'>User
    
    </div>
  )
}

export default User