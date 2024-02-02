import Image from 'next/image'
import { Heading } from '@radix-ui/themes'
import './globals.css'

export default function Home() {
  return (
    <div className="ml-10">
      <div className='mb-9' >
        <Heading size="9" as="h1">Taskmaster.</Heading>
      </div>
      <div className='image-container'>
    </div>
  </div>
  )
}