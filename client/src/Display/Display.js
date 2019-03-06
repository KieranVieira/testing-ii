import React from 'react'

const Display = props => {
  return (
    <div>
      <h3 data-testid="balls-count">Balls: {props.balls}</h3>
      <h3 data-testid="strikes-count">Strikes: {props.strikes}</h3>
    </div>
  )
}

export default Display