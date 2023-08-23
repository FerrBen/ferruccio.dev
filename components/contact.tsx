'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Get in touch with me directly at{' '}
        <a className='underline' href='mailto:ferruccio.hess@protonmail.ch'>
          ferruccio.hess@protonmail.ch
        </a>{' '}
        or through this form.
      </p>
      <form
        className='flex flex-col mt-10'
        action={async (formData) => {
          console.log('Running on client')
          console.log(formData.get('senderEmail'))
          console.log(formData.get('message'))

          await sendEmail(formData)
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack'
          name='senderEmail'
          type='email'
          maxLength={100}
          required
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 p-4 rounded-lg borderBlack'
          name='message'
          placeholder='Your message'
          maxLength={500}
          required
        />
        <div className='flex items-end justify-end'>
          <button
            className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'
            type='submit'
          >
            Submit{' '}
            <FaPaperPlane className='text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
          </button>
        </div>
      </form>
    </motion.section>
  )
}
