import React from "react"
import ReactDOM from "react-dom/client"
import '../style.css'
import Timer from './Timer.jsx'
import Title from './Title.jsx'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "alarm went off"
    }
  }
  render(){
    return (
      <div className="main">
          <Title   />
          <Timer title={this.state.title} />      
      </div>
    )
  }
}

export default App;
