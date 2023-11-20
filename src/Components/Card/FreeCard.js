import React from 'react'
import { IconTick } from '../Icons/Icons'

const FreeCard = () => {
  return (
    <div className='card-actual'>
      <div className='card-inner-container'>
        <button className='card-btn'>Pay per event</button>
        <span className='card-type'>Flex</span>
        <div className='card-price-wrapper'>
          <span className='card-price-number'>Free</span><span className='card-price-text'>to create</span>
        </div>
        <span className='card-text-heading'>Start for free and upgrade any time*</span>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Host one event with up to 25 tickets</span>
        </div>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Send 250 marketing emails a day</span>
        </div>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Access all-in-one event ticketing and marketing tools</span>
        </div>
      </div>
    </div>
  )
}

export default FreeCard
