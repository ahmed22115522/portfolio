"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import aboutPic from '../public/aboutAI.png'
import React from 'react'

const About = () => {
  return (
    <section className='my-10 py-20 relative' id='about'>
      <div className='sm:w-[85%] md:w-[90%] w-[90%] m-auto p-3'>
        <motion.div className='flex flex-col md:flex-row justify-evenly items-center md:gap-3 gap-y-7 md:text-start text-center'>
          <motion.div initial={{opacity:0, x:-200}} viewport={{once: true}} whileInView={{opacity:1, x:0}} transition={{duration:1}} >
            <Image src={aboutPic} alt={'about picture'} className='w-72 h-72 object-cover m-auto md:rounded-none rounded-full'/>
          </motion.div>
          <motion.div className='max-w-xs md:max-w-xs lg:max-w-lg' initial={{opacity:0, x:200}} viewport={{once: true}} whileInView={{opacity:1, x:0}} transition={{duration:1}}>
            <h3 className='pb-5 text-2xl font-bold'>About Me</h3>
            <h4 className='dark:text-gray-400 text-gray-500'>I'm a dedicated junior front-end developer with a solid foundation in React.js, JavaScript, HTML, CSS, and Next.js, leveraging my expertise to create dynamic and visually appealing web applications that enhance user experiences.</h4>
          </motion.div>
        </motion.div>
      </div>
      <h2 className='absolute top-0 right-[50%] translate-x-[55%] uppercase tracking-[15px] dark:text-gray-400 text-gray-600'>about</h2>
    </section>
  )
}

export default About