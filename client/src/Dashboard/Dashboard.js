import React from 'react'

const Dashboard = props => {
  return (
    <div>
      <button data-testid='strikeBtn' onClick={() => props.strike()}>strike</button>
      <button data-testid='ballBtn' onClick={() => props.ball()}>ball</button>
      <button data-testid='foulBtn' onClick={() => props.foul()}>foul</button>
      <button data-testid='hitBtn' onClick={() => props.hit()}>hit</button>
    </div>
  )
}

export default Dashboard