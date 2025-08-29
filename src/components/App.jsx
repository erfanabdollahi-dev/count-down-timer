import React from "react"
import ReactDOM from "react-dom/client"
import '../style.css'
import Timer from './Timer.jsx'
import Title from './Title.jsx'


class App extends React.Component {
  render(){
    return (
      <div className="main">
          <Title/>
          <Timer/>      
      </div>
    )
  }
}

export default App;
