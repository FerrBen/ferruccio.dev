import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Get in touch with me directly at{' '}
        <a className='underline' href='mailto:ferruccio.hess@protonmail.ch'>
          ferruccio.hess@protonmail.ch
        </a>{' '}
        or through this form.
      </p>
      <form className='flex flex-col mt-10'>
        <input
          className='h-14 px-4 rounded-lg borderBlack'
          type='email'
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 p-4 rounded-lg borderBlack'
          placeholder='Your message'
        />
        <button
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'
          type='submit'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </section>
  )
}
