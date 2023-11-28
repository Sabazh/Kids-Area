import React from 'react'

const Card = (props) => {
    const {images, title} = props
  return (
    <div className='grid gap-1-0'>
        <img
            src={images[0]}
            alt={title}
            className="rounded-2-0 h-25-0"
        />
        <p className="font-fR text-1-8 sm:text-2-2 text-center justify-center uppercase">
            {title}
        </p>
    </div>
  )
}

export default Card