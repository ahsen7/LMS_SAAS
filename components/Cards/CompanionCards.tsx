import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CompanionCardsProps {
  id: string,
  name: string,
  subject: string,
  topic: string,
  duration: number,
  color: string
}

const CompanionCards = ({ id, name, subject, topic, duration, color }: CompanionCardsProps) => {
  return (
    <article className='companion-card' style={{ backgroundColor: color }}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>
          {subject}
        </div>
        <button className='companion-bookmark'>
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12}
            height={12}
          />
        </button>
      </div>
      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <Image
          src="/icons/clock.svg"
          alt="clock"
          width={12}
          height={12}
        />
        <p className='text-sm'>{duration} minutes</p>
      </div>

      <Link
        href={`/companions/${id}`}
        className='w-full'
      >
        <button className='btn-primary w-full justify-center'>
          Launch Lesson
        </button>
      </Link>
    </article>
  )
}

export default CompanionCards