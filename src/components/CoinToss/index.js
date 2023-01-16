// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {coinStatus: 0}
  
  

  onUpdateState = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState({coinStatus: tossResult})
  }

  onUpdateTotal = () => {
    let total = 0
    const {coinStatus} = this.state

    if (coinStatus === 0 || coinStatus === 1) {
      total += 1
    }
    return total
  }

  onUpdateHeads = () => {
    let heads = 0
    const {coinStatus} = this.state

    if (coinStatus === 0) {
      heads += 1
    }
    return heads
  }

  onUpdateTails = () => {
    let tails = 0
    const {coinStatus} = this.state

    if (coinStatus === 1) {
      tails += 1
    }
    return tails
  }

  render() {
    const {coinStatus} = this.state
    const total = this.onUpdateTotal()
    const heads = this.onUpdateHeads()
    const tails = this.onUpdateTails()

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {coinStatus === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <button type="button" className="button" onClick={this.onUpdateState}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-description">Total: {total}</p>
            <p className="count-description">Heads: {heads}</p>
            <p className="count-description">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
