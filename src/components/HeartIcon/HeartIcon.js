'use client'

import { PiHeartStraightFill, PiHeartStraightThin } from 'react-icons/pi'

const HeartIcon = (props) => {
  const { filled, toggleHeart } = props

  return (
    <div onClick={toggleHeart}>
      {filled ? (
        <PiHeartStraightFill color="red" size="35px" />
      ) : (
        <PiHeartStraightThin size="35px" />
      )}
    </div>
  )
}

export default HeartIcon
