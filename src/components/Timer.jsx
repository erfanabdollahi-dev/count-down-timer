import React from "react"
import ReactDOM from "react-dom/client"
import '../style.css' 




class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      hours : 0,
      minutes : 0,
      seconds: 0,
      isRunning: false,
      intervalId : null
    };
  }
  
  startTimer() {
    // preventing multiple starts
    if(this.state.isRunning){
      return 
    }
    
    const hours = parseInt(document.getElementById("hours").value) || 0;
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;
    
    let totalSeconds = hours* 3600 + minutes * 60 +  seconds;
    
    // stop reaching 0
    if(totalSeconds <= 0 ){
      return
    }
    this.setState({ isRunning: true });
    
    
    this.intervalId = setInterval(() => { 
      //stop after reaching 0
      if(totalSeconds <= 0){
        clearInterval(this.intervalId);
        this.setState({ isRunning: false });
        window.alert("ding! ding! , ding! ding! ...")
        return;
      }
      
      totalSeconds--;
      
      const h = Math.floor(totalSeconds/3600); //first divide by 3600 to get hours and then use floor exclude the minuts
      const m = Math.floor((totalSeconds % 3600)/ 60); //then seconds % 3600 to get the remainig seconds then divide with 60 to get minutes
      const s = totalSeconds % 60;  // gives the mainder of seconds
      
      this.setState({
        hours: h,
        minutes: m,
        seconds: s,
      })
      
    }, 1000);
    
    
    
    
  }
  
  resetTimer(){
    this.setState({
      isRunning : false,
      hours: 0,
      minutes: 0,
      seconds : 0,
      
    })
    clearInterval(this.intervalId)
  }
  render(){
    console.log("render")
    return(
      <div className="timer">
      
      <h2 className="timer-h2" id="timer-dispaly">
      {String(this.state.hours).padStart(2, "0")}:
      {String(this.state.minutes).padStart(2, "0")}:
      {String(this.state.seconds).padStart(2, "0")}
      </h2>
      
      <form className="timer-input">
      <input id="hours" type="number"defaultValue={0} min={0} max={99}/>
      <input id="minutes" type="number"defaultValue={0} min={0} max={60} />
      <input id="seconds" type="number"defaultValue={0}  min={0} max={60}/>
      </form>
      <button onClick={this.startTimer.bind(this)}>START</button>
      <button onClick={this.resetTimer.bind(this)}>RESET</button>
      
      </div>
      
      
    )
  }
}


export default Timer;
