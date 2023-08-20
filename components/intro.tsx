'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

import { useSectionInView } from '@/lib/hooks'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  console.log(
    '\n' +
      'Hi there 👋 fellow developer! Thanks for visiting.\n' +
      'If you want to get in touch with me,\n' +
      'make sure you check out my socials or you read          ("`-’-/").___..--’’"`-._\n' +
      'my blog for tips and inspiration!                        `6_ 6  )   `-.  (     ).`-.__.‘)\n' +
      '                                                         (_Y_.)’  ._   )  `._ `. ``-..-’\n' +
      'http://blog.ferruccio.dev/                             _..`--’_..-_/  /--’_.’ ,’\n' +
      '                                                      (il),-’‘  (li),’  ((!.-‘\n' +
      'I’d love to hear from you\n' +
      '\n' +
      '— Ferruccio\n'
  )

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      id='home'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
          >
            <Image
              src='/ferruccio-pic-8.png'
              alt='Ferruccio Portrait Image'
              width={192}
              height={192}
              className='h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.75,
            }}
            className='absolute text-4xl bottom-0 right-0'
          >
            👾
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hi, I'm Ferruccio.</span> I'm a{' '}
        <span className='font-bold'>Software Engineer</span> with about{' '}
        <span className='font-bold'>8 years</span> of experience. I enjoy
        building <span className='italic'>sites & apps</span>. My main focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full ontline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 trasition'
        >
          Get in touch{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />{' '}
        </Link>
        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full ontline-none focus:scale-110 hover:scale-110 active:scale-105 trasition cursor-pointer border border-black/10'
          href='/public/CV.pdf'
          download
        >
          Download CV
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a
          className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 trasition cursor-pointer border border-black/10'
          href='https://www.linkedin.com/in/ferrucciobenito/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.25rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 trasition cursor-pointer border border-black/10'
          href='https://github.com/FerrBen'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
