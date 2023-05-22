import React from 'react'
import{ ImageItem } from '..'


const ImageGallery = ({ shows }) => {
  return (
    <div className='shows'>
      {
        shows.map(show => <ImageItem key={show.id} show={show} />)
      }

    </div>
  )
}

export default ImageGallery
