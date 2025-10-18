import React from 'react'
import Image from "next/image";
function Header() {
    return (
        <div className='bg-[#04003f] text-white'>
            <div className='grid grid-cols-3 px-20'>
                <div className='flex gap-2'>
                    <Image src="/4.png" className='rounded-full' width={80} height={0} alt="Logo" />
                    <h1 className='font-normal text-xl pt-9'>NodeFleet Store</h1>
                </div>
                <div className='pt-9'>
                    <input type='search' className='bg-white w-[500px] h-8 rounded-lg pl-4 text-black' placeholder='Search'></input>
                </div>
                <div>
                    <h1 className='pt-9 text-xl float-right'>Login</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
