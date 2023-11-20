import React from 'react';
import { useSelector } from 'react-redux';
import { IconTick } from '../Icons/Icons';

const Card = () => {
  const { title } = useSelector(state => state.drawer)
  const price = title === "Upto100" ? 9.99 : title === "Upto250" ? 24.99 : 49.99;
  const ticket = title === "Upto100" ? "with upto 100 tickets" : title === "Upto250" ? "with upto 250 tickets" : ", no matter the size";

  return (
    <div className='card-actual'>
      <div className='card-inner-container'>
        <button className='card-btn'>Pay per event</button>
        <span className='card-type'>Flex</span>
        <div className='card-price-wrapper'>
          <span className='card-price-number'>${price && price}</span><span className='card-price-text'>per event</span>
        </div>
        <span className='card-text-heading'>Pay as you go for full flexibility*</span>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Pay from your ticket sales for no upfront costs</span>
        </div>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Host one event {ticket && ticket}</span>
        </div>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Send 250 marketing emails a day</span>
        </div>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Access all-in-one event ticketing and marketing tools</span>
        </div>

      </div>
      <div className='card-btn-text-container'>
        <button className='card-btn-text'>Create as event with this plan</button>
      </div>
    </div>
  )
}

export default Card
