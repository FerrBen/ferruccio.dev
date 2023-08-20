import React from 'react'
import SectionHeading from './section-heading'

export default function Contact() {
  return (
    <section id='contact'>
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Get in touch with me directly at{' '}
        <a className='underline' href='mailto:ferruccio.hess@protonmail.ch'>
          ferruccio.hess@protonmail.com
        </a>{' '}
        or through this form.
      </p>
    </section>
  )
}
