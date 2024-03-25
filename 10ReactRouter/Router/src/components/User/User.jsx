import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid}= useParams()

  return (
    <div className='bg-gray-700 m-3 p-3 text-white flex justify-center items-center'>User: {userid}</div>
  )
}

export default User