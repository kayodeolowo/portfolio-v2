import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen'>
      <div className='mt-10'>
        <Image alt='hero img' width={124} height={120} src="/assets/images/boy.png" className='w-fit mx-auto' />
     
     <div className='w-fit flex items-center space-x-3 px-6 mt-6 shadow-md py-1 border border-gray-500 rounded-lg mx-auto'> 
      <p className='text-white text-sm'> Open to Roles/Projects</p>
      <span className="relative flex h-4 w-4">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
</span>
     </div>

     <h1 className='text-5xl font-bold mt-6 leading-normal text-center w-[30rem] mx-auto text-white'> Building Captivative Digital Experiences  </h1>
      
      <p className='text-center text-white w-[35rem] mx-auto'> Hi, Kayode Olowo, a passionate front-end engineer dedicated to creating responsive, user-friendly web applications. With expertise in HTML, CSS, and modern JavaScript frameworks, I bring designs to life through clean, and efficient code. I specialize in translating visions into interactive web experiences, building pixel-perfect, responsive websites that captivate users.</p>
      </div>
    </section>
  )
}

export default Hero