import React from 'react'
import './style.css'

const Marquee = () => {
  return (
    <div className='marqueeContainer' id='customers'>
        <marquee
            behavior='scroll'
            scrollamount='20'
            width='100%'
            direction='right'
        >
            Brand Names / Brand Logos / Brand Names / Brand Logos
        </marquee>
        <marquee
            behavior='scroll'
            scrollamount='20'
            width='100%'
            direction='left'
        >
            Brand Names / Brand Logos / Brand Names / Brand Logos
        </marquee>
    </div>
  )
}

export default Marquee