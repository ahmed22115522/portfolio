"use client"
import Link from 'next/link'
import React from 'react'
import {FaEnvelope , FaMapPin, FaPhone} from 'react-icons/fa'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

const Contact = () => {

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ahmed22115522@gmail.com?subject=${formData.subject}&body= Hi, My name is ${formData.name}. ${formData.message}.`
  }

  return (
    <section className='my-10 py-20 relative' id='contact'>
       <h2 className='absolute top-0 right-[50%] translate-x-[55%] uppercase tracking-[15px] dark:text-gray-400 text-gray-600'>Contact</h2>

        <div className='grid md:grid-cols-3 md:items-center md:justify-center gap-y-4'>
          <div className='flex items-center justify-center  hover:scale-110 transation duration-150 ease-in'><FaMapPin className='text-4xl'/><p className='font-bold ms-2 cursor-pointer'>Cairo, Egypt</p></div>
          <div className='flex items-center justify-center  hover:scale-110 transation duration-150 ease-in'><FaPhone className='text-4xl'/><p className='font-bold ms-2  cursor-pointer'>+20 109 559 2382</p></div>
          <div className='flex items-center justify-center  hover:scale-110 transation duration-150 ease-in'><FaEnvelope className='text-4xl'/><Link href={'mailto:ahmed22115522@gmail.com'} target="_blank" rel="nofollow" className='font-bold ms-2'>ahmed22115522@gmail.com</Link></div>
        </div>

        <div>

        <form className='flex flex-col space-y-2 w-fit m-auto mt-7' onSubmit={handleSubmit(onSubmit)}>
          <p className='text-center font-semibold'>Hit me up!</p>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='outline-none dark:bg-slate-400/10 bg-gray-950/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#7AB0A]/40' type="text" />
            <input {...register('email')} placeholder='Email' className='outline-none dark:bg-slate-400/10 bg-gray-950/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#7AB0A]/40' type="text" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='outline-none dark:bg-slate-400/10 bg-gray-950/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#7AB0A]/40' type="text" />
          
          <textarea {...register('message')} placeholder='Message' className='outline-none dark:bg-slate-400/10 bg-gray-950/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#7AB0A]/40' cols={30} rows={5}></textarea>
          <div className='text-center'>

          <button type='submit' className='rounded-md dark:text-black text-white dark:bg-white bg-black p-3 px-5 '>Submit</button>
          </div>
        </form>
        
        </div>


    </section>
  )
}

export default Contact