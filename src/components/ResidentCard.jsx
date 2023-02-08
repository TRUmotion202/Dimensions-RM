import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/ResidentCard.css"

const ResidentCard = ({ resident }) => {
  const [character, setCharacter] = useState()

  useEffect(() => {
    axios.get(resident)
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <article className='content__container'>
      <div className='content__img'>
        <img src={character?.image} alt="" />
      </div>
      <div className="container__status">
        <div className={`content__circle ${character?.status}`}></div>
        <span className='content__status'>{character?.status}</span>
      </div>
      <section className='content__data'>
        <h3 className='content__name'>{character?.name}</h3>
        <ul className='content__list'>
          <li className='content__list-e'><span>Specie:</span> {character?.species}</li>
          <li className='content__list-e'><span>Origin:</span> {character?.origin.name}</li>
          <li className='content__list-e'><span>Episodes where appear:</span> {character?.episode.length}</li>
        </ul>

      </section>
    </article>
  )
}

export default ResidentCard