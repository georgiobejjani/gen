import React from 'react'

export default function ContactUsItem(props) {
  return (
    <div className='contactUsItem'>
        <div className='contactUsItem__wrapper'>
            <div className='contactUsItem__imageWrapper'>
                <img className='contactUsItem__image' alt='icon' src={props.image}/>
            </div>
            <div className='contactUsItem__infoContainer'>
                <h1 className='contactUsItem__label'>{props.label}</h1>
                <span className='contactUsItem__value'>{props.value}</span>
            </div>
        </div>
    </div>
  )
}
