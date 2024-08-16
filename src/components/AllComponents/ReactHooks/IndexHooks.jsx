import React from 'react'

function IndexHooks() {
    return (
        <div className='flex mt-5 ml-10'>
            <div className='flex flex-col items-center w-1/2 '>
                <h2 className='font-bold text-[50px] mt-20 text-gray-800'>React Hooks</h2>
                <p className='font-medium text-gray-500 text-justify'>Ce sont des fonctions spéciales qui permettent aux composants fonctionnels d’utiliser des fonctionnalités de React sans écrire de composant de classe. Avant l'introduction des hooks, ces fonctionnalités étaient disponibles uniquement dans les composants de classe (class components).</p>
            </div>
            <div className='w-1/2' style={{
                background: 'url("/reactHook.jpeg")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '50vh',
                width: '100%',
                opacity: '0.5'
            }}>
            </div>
        </div>
    )
}

export default IndexHooks
