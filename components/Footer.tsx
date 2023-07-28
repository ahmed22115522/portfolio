import React from 'react'

const Footer = () => {
  const date = new Date()

  return (
    <footer className=''>
        <div className='w-full h-full dark:bg-white dark:text-black bg-black text-white py-3 text-center'>
          <p>All rights reserved © {date.getFullYear()} </p>
          <p></p>
        </div>
    </footer>
  )
}

export default Footer