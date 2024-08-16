import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

function Header() {

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='bg-gray-800 text-white'>
            <div className='mx-10 flex gap-5 justify-between items-center'>
                <a href='/' className='font-bold text-xl my-5 cursor-pointer hover:scale-105 transition-all'>My React App</a>

                <div className='my-5 flex gap-5'>
                    <a href="/stop-watch">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">StopWatch</Button>
                    </a>
                    <a href="/todolist">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">To Do List</Button>
                    </a>
                    <a href="/counter">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">Counter</Button>
                    </a>
                    <a href="/color-picker">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">Color Picker</Button>
                    </a>
                    <a href="/digital-clock">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">Digital Clock</Button>
                    </a>
                    <a href="/fruit">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">Foods</Button>
                    </a>
                    <a href="/fruits-legumes">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">List of Fruits and Legumes</Button>
                    </a>
                    <a href="/forms">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">Formulaires</Button>
                    </a>
                    <a href="/hooks">
                        <Button variant="outline" className="rounded-full text-black hover:scale-105 hover:bg-gray-500 hover:text-white transition-all">React Hooks</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
