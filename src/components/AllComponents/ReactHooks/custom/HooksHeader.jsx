import { Button } from '@/components/ui/button'
import React from 'react'

function HooksHeader() {
    return (
        <div className='bg-gray-500'>
            <div className='mx-10 flex gap-5 justify-center items-center'>
                <a href="/hooks/useState" className='my-2'>
                    <Button variant="outline" className="rounded-full hover:scale-105 hover:bg-gray-800 hover:text-white transition-all">UseState</Button>
                </a>
                <a href="/hooks/useEffect" className='my-2'>
                    <Button variant="outline" className="rounded-full hover:scale-105 hover:bg-gray-800 hover:text-white transition-all">UseEffect</Button>
                </a>
                <a href="/hooks/useContext" className='my-2'>
                    <Button variant="outline" className="rounded-full hover:scale-105 hover:bg-gray-800 hover:text-white transition-all">UseContext</Button>
                </a>
                <a href="/hooks/useRef" className='my-2'>
                    <Button variant="outline" className="rounded-full hover:scale-105 hover:bg-gray-800 hover:text-white transition-all">UseRef</Button>
                </a>
            </div>
        </div>
    )
}

export default HooksHeader

