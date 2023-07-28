"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props ={
    directon?: number,
    icon?: any
    precentge:number
}

const Skill = ({directon, icon, precentge}: Props) => {
  return (
    <motion.div initial={directon === 1 ? {y:-100, opacity:0} : directon === 2 ?  {opacity:0} : {y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.5}} viewport={{once: true}} className='group relative flex cursor-pointer justify-center items-center'>
        <Image src={icon} alt='skill-icon' className='w-24 h-24 filter group-hover:grayscale transition-all duration-300 ease-in-out rounded-full' />
        <div className='group opacity-0 flex justify-center items-center group-hover:opacity-80 z-10 absolute dark:bg-white bg-black transition-all duration-300 ease-in-out w-24 h-24 rounded-full' >
            <p className='font-bold font-xl dark:text-black text-white'>{precentge}%</p>
        </div>
    </motion.div>
  )
}

export default Skill