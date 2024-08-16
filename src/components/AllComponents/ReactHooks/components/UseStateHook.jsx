import { Button } from '@/components/ui/button'
import React from 'react'

function UseStateHook() {
  return (
    <div className='flex flex-col mt-2 ml-10 gap-5 items-center'>
      <div className='w-[400px]' style={{
        background: 'url("/useState.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        height: '300px', // Hauteur fixe pour le conteneur
        width: '100%', // Occupe toute la largeur disponible
        opacity: '0.5' // Applique une opacité à l'image de fond  
      }}>
      </div>
      <div className='flex flex-col w-3/4 justify-center'>
        <h2 className='font-bold text-[30px] mt-5 text-gray-800'>UseState Hook</h2>
        <p className='font-medium text-gray-500 text-justify'>Un hook react qui permet la création d’une variable avec état et une fonction settler pour mettre à jour sa valeur dans un DOM virtuel.</p>

        <h2 className='font-bold text-[25px] text-gray-800 mt-5'>Syntaxe : </h2>
        <div className='bg-gray-800 h-10 flex flex-col items-start justify-center'>
          <p className='text-gray-300 text-lg ml-5'>const [value, setValue] = useState()</p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-2 mb-10'>
        <p>Cliquez </p>
        <a href="/counter">
          <Button variant="outline">ici</Button>
        </a>
        <p>pour voir une exemple d'illustration avec un compter.</p>
      </div>
    </div>
  )
}

export default UseStateHook
