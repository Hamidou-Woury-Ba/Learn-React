import { Button } from '@/components/ui/button'
import React from 'react'

function UseEffectHook() {
  return (
    <div className='flex flex-col mt-2 ml-10 gap-5 items-center'>
      <div style={{
        background: 'url("/useEffect.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center', // Centre l'image dans le conteneur
        backgroundRepeat: 'no-repeat', // Ne répète pas l'image
        height: '300px', // Hauteur fixe pour le conteneur
        width: '100%', // Occupe toute la largeur disponible
        opacity: '0.5' // Applique une opacité à l'image de fond
      }}>
      </div>

      <div className='flex flex-col w-3/4 justify-center'>
        <h2 className='font-bold text-[30px] mt-5 text-gray-800'>UseEffect Hook</h2>
        <p className='font-medium text-gray-500 text-justify'>
          Le hook useEffect est utilisé dans les composants fonctionnels de React pour gérer les effets de bord, c'est-à-dire toute opération qui interagit avec le monde extérieur au composant, comme les appels d'API, les abonnements, ou les modifications du DOM en dehors du processus de rendu de React. <br />
          Hook React qui dit à React de faire du code quand :
          <ul className='list-disc list-inside'>
            <li>Ce composant effectue un nouveau rendu</li>
            <li>ce composant est monté</li>
            <li>l’état d’une valeur change</li>
          </ul>
        </p>

        <h2 className='font-bold text-[25px] text-gray-800 mt-5'>Syntaxe : </h2>
        <div className='bg-gray-800 h-10 flex flex-col items-start justify-center'>
          <p className='text-gray-300 text-lg ml-5'>useEffect(function, [dependencies])</p>
        </div>

        <h2 className='font-bold text-[25px] text-gray-800 mt-5'>Cas d'utilisation :</h2>
        <div>
          <p>1. Ce hook useEffect sera exécuté après chaque rendu du composant, c'est-à-dire après chaque mise à jour du DOM.</p>
          <div className='bg-gray-800 h-10 flex flex-col items-start justify-center'>
            <p className='text-gray-300 text-lg ml-5'>useEffect(() =&gt; {'{'} {'}'})</p>
          </div>
        </div>
        <div>
          <p>2. Ce hook useEffect sera exécuté uniquement lors du montage du composant (au premier rendu) et ne sera pas exécuté lors des mises à jour ultérieures.</p>
          <div className='bg-gray-800 h-10 flex flex-col items-start justify-center'>
            <p className='text-gray-300 text-lg ml-5'>useEffect(() =&gt; {'{'} {'}'}, [value])</p>
          </div>
        </div>
        <div>
          <p>3. Ce hook useEffect sera exécuté à deux moments : lors du montage du composant et chaque fois que la valeur de value change.</p>
          <div className='bg-gray-800 h-10 flex flex-col items-start justify-center mb-5'>
            <p className='text-gray-300 text-lg ml-5'>useEffect(() =&gt; {'{'} {'}'}, [ ])</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-2 mb-10'>
        <p>Cliquez </p>
        <a href="/hooks/useEffect-change-title-page">
          <Button variant="outline">ici</Button>
        </a>
        <p>pour voir un exemple d'illustration.</p>
      </div>
    </div>
  )
}

export default UseEffectHook
