import React from 'react'

export default function PartnerCard(props) {
  return (
    <div className='partnerCard'>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt='partner' className='partnerCard__image'/>
      </a>
        <p className='partnerCard__paragraphe'>
            {props.paragraphe}
        </p>
    </div>
  )
}
