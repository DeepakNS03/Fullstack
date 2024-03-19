import React from 'react'
import loaderGif from '../assets/loader.gif'


const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <img src={loaderGif} alt="Loading..." />
  </div>
  )
}

export default Loader