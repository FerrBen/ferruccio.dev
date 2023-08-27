'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 0.6)

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Hey there, I'm Ferruccio—a proud father and a seasoned software engineer
        with a solid eight years of experience in the coding world. Yep, you
        heard that right, eight years of diving into lines of code, solving
        puzzles, and crafting solutions that make technology tick. But hey, I'm
        not just a coding machine. When I step away from the keyboard, I step
        into the shoes of a dad who's all about creating awesome memories. I
        bring the same determination and problem-solving skills I use in coding
        to the wild adventure of parenting. From helping with homework to
        teaching life lessons, I'm there, giving it my all.
      </p>
      <p>
        You know, it's funny how coding and fatherhood share some common ground.
        Both require patience, creativity, and a knack for finding solutions.
        Just like I optimize code for efficiency, I optimize family time for
        maximum fun. And let's not forget the art of the dad joke—I've got a PhD
        in that too. So, whether I'm debugging a tricky piece of software or
        creating a magical moment with my family, I'm all in. My journey is a
        mix of tech wizardry and heartfelt connections, showing that with a bit
        of coding know-how and a lot of love, life can be one amazing,
        beautifully-coded adventure.
      </p>
    </motion.section>
  )
}
