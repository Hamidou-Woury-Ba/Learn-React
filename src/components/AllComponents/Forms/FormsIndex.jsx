import React from 'react'
import MyComponentForm from './components/MyComponentForm'
import MyCarComponent from './components/MyCarComponent'
import MyCarObjectComponent from './components/MyCarObjectComponent'
import MyComponent from './components/MyComponent'

function FormsIndex() {
  return (
    <div className='grid grid-cols-4 mt-10 ml-20'>
      <MyComponentForm />
      <MyCarComponent />
      <MyCarObjectComponent />
      <MyComponent />
    </div>
  )
}

export default FormsIndex
