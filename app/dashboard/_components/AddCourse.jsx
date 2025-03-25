"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../../../components/ui/button';
import Link from 'next/link';

function AddCourse() {
  const {user} =useUser();
  return (
    <div className='flex justify-between items-center '>
      <div>
        <h2 className='text-2xl'>Hello,
          <span className='font-bold'>{user?.fullName}</span> </h2>

          <p className='text-sm text-gray-500'>Create new Course With AI, Expend Your knowledge </p>
      </div>
      {/* <Link href={'/create-course'}>
      </Link> */}
      <Link href='/create-course'>
      <Button>+ Create AI Course</Button>
      </Link>
    </div>
  )
}

export default AddCourse
