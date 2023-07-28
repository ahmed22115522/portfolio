import React from 'react'
import Skill from './Skill'
import bootstrap from '../public/skills/bootsrap.png'
import css from '../public/skills/css.png'
import html from '../public/skills/html.png'
import nextdark from '../public/skills/next-dark.png'
import react from '../public/skills/react.png'
import sanity from '../public/skills/sanity.png'
import tailwind from '../public/skills/tailwind.png'
import typescript from '../public/skills/typescript.png'
import javascript from '../public/skills/javascript.png'

const Skills = () => {
  return (
    <section className='my-10 py-20 relative' id='skills'>
      <div className='sm:w-[85%] md:w-[90%] w-[90%] m-auto'>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-5 gap-y-10 text-center'>
          <Skill directon={1} precentge={100} icon={html}/>
          <Skill directon={2} precentge={95} icon={css}/>
          <Skill directon={3} precentge={95} icon={javascript}/>
          <Skill directon={2} precentge={80} icon={typescript}/>
          <Skill directon={1} precentge={75} icon={nextdark}/>
          <Skill directon={2} precentge={85} icon={react}/>
          <Skill directon={3} precentge={75} icon={sanity}/>
          <Skill directon={1} precentge={75} icon={tailwind}/>
          <Skill directon={3} precentge={95} icon={bootstrap}/>
        </div>
      </div>
      <h2 className='absolute top-0 right-[50%] translate-x-[55%] uppercase tracking-[15px] dark:text-gray-400 text-gray-600'>Skills</h2>
    </section>
  )
}

export default Skills