import React from 'react'
import { numberPage } from '../utils/numberPage'
import "./styles/NumberPages.css"

const NumberPages = ({ setPage, universe, RESIDENT_PERPAGER }) => {
  return (
    <div>
      <ul className='pages__container'>
        {
          numberPage(universe, RESIDENT_PERPAGER).map(numberPag => <li className='pages__lists' onClick={() => setPage(numberPag)} key={numberPag}>{numberPag}</li>)
        }
      </ul>
    </div>
  )
}

export default NumberPages