import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './components/ui/button'

function Index() {

  return (
    <div>
      <h2 className='font-bold text-center text-[50px] mt-5'>Tous les composants</h2> 
      <h2 className='font-medium text-center text-[30] mt-5'>Ce site contient tous les composants que j'ai dû réaliser lorsque j'ai appris React</h2> 
      <h2 className='font-medium text-center text-[30] mt-5 flex items-center justify-center gap-2'>
        Le code de ces différents components se trouve dans ce
        <Link to={'https://github.com/Hamidou-Woury-Ba/Learn-React/tree/master'} target='blank'>
          <Button variant="outline">dépot Github</Button>
        </Link>
      </h2> 
      <div className='p-10 md:px-20 lg:px-50 xl:px-56'>
        <div className='grid grid-cols-3 gap-5'>
          <Link to={'/stop-watch'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center '>
              <img src="/clock.jpg" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>StopWatch</h2>
            </div>
          </Link>
          <Link to={'/counter'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/counter.png" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>Counter</h2>
            </div>
          </Link>
          <Link to={'todolist'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/todolist.png" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>To Do List</h2>
            </div>
          </Link>
          <Link to={'color-picker'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/color.jpg" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>Color Picker</h2>
            </div>
          </Link>
          <Link to={'card'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/card.png" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>My Card</h2>
            </div>
          </Link>
          <Link to={'digital-clock'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/digital.png" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>Digital Clock</h2>
            </div>
          </Link>
          <Link to={'fruit'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/fruit.png" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>Fruits</h2>
            </div>
          </Link>
          <Link to={'fruits-legumes'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/fruitsLegumes.png" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>Lists of Fruits & Legumes</h2>
            </div>
          </Link>
          <Link to={'forms'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/form.png" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>Formulaires</h2>
            </div>
          </Link>
          <Link to={'hooks'}>
            <div className='hover:scale-105 transition-all flex flex-col items-center justify-center'>
              <img src="/reactHook.jpeg" alt="" className='h-[250px] w-[250px] object-contain rounded-xl ' />
              <h2 className='font-bold text-xl text-center'>React Hooks</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
