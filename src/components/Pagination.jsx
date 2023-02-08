import React from 'react'
import { pagination } from '../utils/pagination'
import ResidentCard from './ResidentCard'

const Pagination = ({universe, RESIDENT_PERPAGER, page}) => {
    return (
        <div>
            <div className='pagination__content'>
                {
                    pagination(RESIDENT_PERPAGER, universe, page)?.map((resident) => <ResidentCard key={resident} resident={resident} />)
                }
            </div>
        </div>
    )
}

export default Pagination