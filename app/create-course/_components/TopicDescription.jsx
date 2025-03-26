import React from 'react'
import {Input} from '../../../components/ui/input'
import {Textarea} from '../../../components/ui/textarea'

function TopicDescription() {
  return (
    <div className='mx-20 lg:mx-44'>
      {/* Input topic */}
      <div className='mt-25'>
        <label>Write the topic for which you want to generate the course</label>
        <Input></Input>
      </div>
      {/* Textarea */}

      <div className='mt-25'>
        <label>Tell Us more information about your course</label>
        <Textarea placeholder='Course Description'/>
      </div>
    </div>
  )
}

export default TopicDescription
