import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Graduated Business School',
    location: 'Bénédict - Zürich, ZH',
    description:
      'Graduated my business school with a focus on marketing and finance.',
    icon: React.createElement(LuGraduationCap),
    date: '2008 - 2011',
  },
  {
    title: 'Clerk Backoffice / Content-Manager ',
    location: 'Embru-Werke AG - Rüti, ZH',
    description:
      'Administration and accounting tasks in the sales team. Implementation of new products for the E-Commerce section with Sitecore (content management .NET-CMS-Platform) Presentations of new products for events and investors. Planning and managing of events and trade fairs.',
    icon: React.createElement(CgWorkAlt),
    date: '2012 - 2018',
  },
  {
    title: 'Software Engineer',
    location: 'Mondipal AG - St. Margrethen, SG',
    description:
      'Consulting and support for customers in the implementation and delivery of projects. Development in HTML, CSS (SASS), JavaScript, React, Next.js Redux, Node, Express, MongoDB and AWS Lambda. Planning of over 60+ web applications from the first development phase to roll-out. Contributed to each project delivery phase (analysis,development,test,ops) in different roles. Estimated, performed feasibility analysis and forecast risks, and planned the delivery for new requirements. ',
    icon: React.createElement(FaReact),
    date: '2018 - 2021',
  },
  {
    title: ' Senior Front-end Developer ',
    location: 'Ringier Axel Springer - Altstetten, ZH',
    description:
      'Managing, maintaining, and developing a monorepo with 8 publications such as Handelszeitung, Beobachter, Cash, Schweizer Illustrierte, Illustré, Gault Millau, PME, and Landliebe. Development in React, Next.js, Node.js, JavaScript and Typescript. Transition planning from React to Next.js.Multiple automations for a better development and deployment experience.',
    icon: React.createElement(FaReact),
    date: '2022 - 2023',
  },
] as const

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const
