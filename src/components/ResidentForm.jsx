import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({ handleSubmit }) => {
    return (
        <form className='input__container' onSubmit={handleSubmit}>
            <input className='input__input' type="text" id='locationId' placeholder='type a location ID (1 - 126)' />
            <button className='input__button'>Search</button>
        </form>
    )
}

export default ResidentForm