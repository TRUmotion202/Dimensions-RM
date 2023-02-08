import React from 'react'
import "./styles/Location.css"

const Location = ({ universe }) => {
  return (
    <section className='location__container'>
      <h2 className='location__title'>{universe?.name}</h2>
      <ul className='location__list'>
        <li className='location__list-e'><span>Type:</span> {universe?.type}</li>
        <li className='location__list-e'><span>Dimension:</span> {universe?.id} - {universe?.dimension}</li>
        <li className='location__list-e'><span>Population:</span> {universe?.residents.length}</li>
      </ul>
    </section>
  )
}

export default Location