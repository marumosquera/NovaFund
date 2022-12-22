import React from 'react'
import './ContactButton.css'

export const ContactButton = ({cta}) => {
  return (
    <>
    <button className='cta-btn'>{cta}</button>
    </>
  )
}
