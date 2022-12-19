import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const menuItems = [
    {title: 'NEWS AND EVENTS', link: 'news'},
    {title: 'STUDIES', link: 'study'},
    {title: 'LIFELONG LEARNING', link: 'learning'},
    {title: 'RESEARCH', link: 'research'},
    {title: 'INNOVATION', link: 'innovation'},
    {title: 'COMMUNITY', link: 'community'},
    {title: 'ABOUT TUM', link: 'about'}
]

const Navbar = () => {
  return (
    <div className='bg-dark-blue sticky top-0 left-0 z-50'>
        <div className="max-w-362 m-auto flex px-6 items-center justify-between">
            <div className="flex gap-4">
                <Image src="/app/grid-down.svg" alt='' width={33} height={33} />
                <div className="flex items-center gap-3 py-5">
                    <Image src="/app/logo.svg" alt='' width={80} height={42} />
                    <div className="text-xs text-white tracking-small leading-3.5">
                        Technical <br />
                        University <br />
                        of Munich
                    </div>
                </div>
            </div>
            <div className="flex gap-13.5 items-center">
                <div className="flex gap-6">
                    {
                        menuItems.map((item, index) =>(
                            <Link href={item.link} key={index}>
                                <div className="text-white font-bold pt-8 pb-6 text-sm">{item.title}</div>
                            </Link>
                        ))
                    }
                </div>
                <div className="flex gap-6 pt-8 pb-6">
                    <div className="flex text-white font-medium">
                        <div className="opacity-50 cursor-pointer">DE</div>
                        <div className="h-full border-l-2 border-white mx-2"></div>
                        <div className="cursor-pointer">EN</div>
                    </div>
                    <Image src="/icons/search.svg" width={24} height={24} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar