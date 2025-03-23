import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
function Header() {
  return (
    <div className='flex justify-between items-center p-5  shadow'>
      <Image src='/next.svg' width={60} height={60} />
      <UserButton />
    </div>
  )
}

export default Header
