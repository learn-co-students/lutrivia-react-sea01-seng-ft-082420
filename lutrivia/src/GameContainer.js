import React from 'react'
import Questions from './Questions'
import NameBar from './NameBar'

class GameContainer extends React.Component {
  constructor(){
    super()

    this.state ={
      score: 0,
      questions: []
    }
  }

  render(){
    return (
      <div>
        <h1>Lutrivia</h1>
        <button>New Game</button>
        <h2>Score:{this.state.score}</h2>
        <Questions />
        <Questions />
        <Questions />
        <Questions />
        <NameBar />
        <button>Submit Score</button>
      </div>
    )
  }
}

export default GameContainer