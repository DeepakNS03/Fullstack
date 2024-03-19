import React, { useRef } from 'react'
import img from "../../assets/hero.png"
import img1 from "../../assets/group-women.jpg"
import img2 from "../../assets/img2.jpg"
import PriceCard from '../../components/pricecard'

const home = () => {
  const priceRef = useRef()


  return (
    <div>
    <div className='h-[100vh] bg-color text-white flex flex-col sm:justify-center lg:justify-start'>
      <div className='relative flex justify-center'>
        <img src={img} alt='img' className='hidden sm:flex mx-auto w-3/5 mb-5 -py-20' />

        <div className='absolute top-36'>
          <h1 className='text-[140px] lg:text-[400px] text-center'>Y O G A</h1>
        </div>
      </div>
    </div>


<div className='bg-purple-500 text-white pt-1'>
    <div className=' container flex flex-col md:flex-row justify-center md:gap-40 '>
      <div className='w-full md:w-2/4 lg:w-1/4'>
       <img className='rounded-lg mt-10' src={img1} alt='img'/>
      </div>

      <div className='w-full md:w-2/4 space-y-10 pt-10'>
        <h1 className='text-4xl lg:text-5xl font-bold'>About us</h1>
        <p className='text-base lg:text-2xl '>
        Welcome to Zen Yoga academy , a sanctuary of tranquility where the art of yoga intertwines with the essence of well-being. Our ethos revolves around embracing yoga not merely as an exercise routine but as a harmonious lifestyle that nurtures the body, mind, and soul.
        At Zen Yoga academy , we curate a diverse array of yoga classes catering to individuals of all proficiencies, from novices to seasoned practitioners.
        </p>
        <p className='text-2xl font-bold' >
        Our classes are thoughtfully crafted to cultivate strength, flexibility, and equilibrium, fostering holistic growth both on and off the mat. 
        </p>
        <p className='text-2xl'>
        Whether your aspirations lean towards enhancing physical vitality, alleviating stress, or attaining inner tranquility, our curated classes are tailored to meet your aspirations.
        </p>
      </div>
      
    </div>
    <div className=" bg-primary text-white pt-10">
      <div className="container flex flex-col-reverse md:flex-row justify-center md:gap-40">
        {/* content section  */}
        <div className=" w-full md:w-2/4 space-y-10 pt-12 lg:pt-24">
          <h1 className="text-4xl lg:text-5xl font-bold">
            How we conduct our classes
          </h1>
          <p className="text-base lg:text-2xl">
          If the customer is very smart, he or she will be able to achieve the desired result. But for our own blessedness, to ease as their pains, and that choice for us, with him or any one because the times of the praisers are free.
          </p>
          <p className="text-2xl">
          Thank you very much. Let no one seek the gentlest of the harsher laborious flight than the other elders? When they see rightly, they abandon pleasure, being blinded, whence, by rejecting pain, I will explain, they do not know the benefits that result from labor. Anyone who chooses a painstakingly hard work.
          </p>
        </div>

        {/* img section  */}
        <div className="w-full md:w-2/4 lg:w-1/4 mb-8 mr-30">
          <img className=" rounded-lg" src={img2} alt="img" />
        </div>
      </div>
    </div>


    <div ref={priceRef} className=" bg-primary text-white pt-32 pb-8">
      <div className="px-4 sm:container">
        <h1 className=" font-bold text-5xl text-center ">Our Pricing Plans</h1>

        <p className=" text-center font-semibold py-5">
          Every plan starts off with a 14-days free trial. 
        </p>

        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-20">
          <PriceCard price="300" plan="Basic" />
          <PriceCard price="700" plan="Standard" />
          <PriceCard price="950" plan="Premium" />
        </div>
      </div>
    </div>
  </div>
  </div>
  )
  
}

export default home