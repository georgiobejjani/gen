import React from 'react'
import finance from '../../assets/capabilities/finance.png';
export default function CapabilitiesItem(props) {
  return (
    <div className='capabilitiesItem'>
        <div className='capabilitiesItem__wrapper'>
        <div className='capabilitiesItem__gear_wheel'/>
        <img className='capabilitiesItem__imageItem' src={props.image} alt='capabilities finance'/>
        </div>
        <h5 className='capabilitiesItem__title'>{props.title}</h5>
    </div>
  )
}
