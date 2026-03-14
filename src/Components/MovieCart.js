import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCart = ({Poster_path}) => {
  return (
    <div className='w-52'>
      <img 
       className='w-full'
       alt="Movie Poster"  
       src={IMG_CDN_URL+Poster_path} />
    </div>
  )
}

export default MovieCart