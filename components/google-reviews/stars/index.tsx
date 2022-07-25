import React from 'react'
import { AiFillStar } from 'react-icons/ai'


export default function Stars({ rating, className }: { rating: number, className: string }) {
    const nonFilled = 5 - rating;
    return (
        <div className={className}>
            {Array.from(Array(rating)).map((c, index) => {
                return <AiFillStar key={index} className='stars-filled' />
            })
            }
            {nonFilled != 0 ?
                Array.from(Array(rating)).map((c, index) => {
                    return <AiFillStar key={index} className='stars-notFilled' />
                }) : null
            }
        </div>
    )
}