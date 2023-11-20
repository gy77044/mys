import React from 'react';
import { useSelector } from 'react-redux';
import { IconLight, IconTick } from '../Icons/Icons';

const SubscribeCard = () => {
  const { title, displayDrawer } = useSelector(state => state.drawer)
  const price = title === "Upto100" ? 29 : title === "Upto250" ? 79 : 159;
  const ticket = title === "Upto100" ? "with upto 100 tickets" : title === "Upto250" ? "with upto 250 tickets" : ", no matter the size";
  const btnTitle = title === "Upto100" ? "Start a 14-day free trail" : title === "Upto250" ? "Subscribe Now" : "Subscribe Now";
  const quantity = title === "Upto100" ? "2000" : title === "Upto250" ? "6000" : "10,000";


  return (
    <div className='card-actual'>
      <div className='card-inner-container'>
        <button className='card-btn subscribe-card-btn'><IconLight />Subscribe and Save</button>
        <span className='card-type'>Pro</span>
        <div className='card-price-wrapper'>
          <span className='card-price-number'>${price && price}</span><span className='card-price-text'>per month</span>
        </div>
        <span className='card-text-heading'>Save when hosting frequently events*</span>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Recurring monthly subscription</span>
        </div>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Host unlimited events {ticket && ticket}</span>
        </div>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Send {quantity && quantity} marketing emails a day</span>
        </div>
        <div className='text-with-tick-container'>
          <span className='text-with-tick'><IconTick /></span><span className='text-with-tick-content'>Access all-in-one event ticketing and marketing tools</span>
        </div>

      </div>
      <div className='card-btn-text-container'>
        <button className={`card-btn-text ${title === "Upto100" ? "subscribe-card-btn-text" : ""}`}>{btnTitle}</button>
      </div>
    </div>
  )
}

export default SubscribeCard
