// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  clickCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    console.log(count)

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            The Button has been clicked
            <br /> <span className="count">{count}</span> times
          </h1>
          <p className="description">click the button to increase the count</p>
          <button
            onClick={this.clickCount}
            className="click-me-button"
            type="button"
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
