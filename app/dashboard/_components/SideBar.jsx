"use client";
import React from 'react'
import Image from 'next/image'
import { CiHome } from "react-icons/ci";
import { GoProject } from "react-icons/go";
import { GiUpgrade } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@radix-ui/react-progress';



function SideBar() {
  const Menu = [
    {id: 1,
      name: 'Home', 
      icon: <CiHome />, 
      path: '/dashboard'
    },
    {id: 2,
      name: 'Explore', 
      icon: <GoProject />, 
      path: '/dashboard/explore'
    },
    {id: 3,
      name: 'Upgrade', 
      icon: <GiUpgrade />      , 
      path: '/dashboard/upgrade'
    },
    {id: 4,
      name: 'Logout', 
      icon: <LuLogOut /> ,     
      path: '/dashboard/logout',
    },
    
  ]
  const path = usePathname();
  return (
    <div className='fixed h-full md:w-64 shadow-md'>
      <Image src='/next.svg' width={160} height={200} className=' p-6'/>
      <hr className='py-5'/>

      <ul>
        {Menu.map((item) => (
          <Link href={item.path} key={item.id}>
          <li key={item.id} className={`flex items-center p-3 cursor-pointer ${path === item.path ? 'bg-gray-200' : ''}`}>
            <span className='mr-3'>{item.icon}</span>
            <span>{item.name}</span>
          </li>
          </Link>
        ))}
      </ul>
      <div className='absolute bottom-10 w-[80%]'>
      <Progress value={3} />
      <h2>3 Out of 5 course created</h2>
      <h2>Upgrade for unlimited course</h2>
      </div>
    </div>
  )
}

export default SideBar
