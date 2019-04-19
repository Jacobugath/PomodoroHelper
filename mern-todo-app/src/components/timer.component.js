import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
let right = {textAlign: 'center'};
let tom = {
     fontSize:200
  }

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
           minutes: '',
           seconds: '',
           secondsRemaining: 1,
           started: false
        }
        this.intervalHandle = '';
    }



    componentDidMount() {
                this.setState({
                    minutes: 25,
                    seconds: '00',
                })

    }

    handleChange =  (event) => {
        this.setState({
          minutes: event.target.value
        })
     }

     tick = () => {
        var min = Math.floor(this.state.secondsRemaining / 60);
        var sec = this.state.secondsRemaining - (min * 60);
        this.setState({
          minutes: min,
          seconds: sec
        })
        if (sec < 10) {
            this.setState({
              seconds: "0" + this.state.seconds,
            })
          }
          if (min < 10) {
          this.setState({
            minutes: "0" + min,
           })
          }
          if (min <= 0 & sec <= 0) {
          clearInterval(this.intervalHandle);
          }
          this.setState({
            secondsRemaining: this.state.secondsRemaining - 1
        })
    }

        startCountDown = () => {
            this.intervalHandle =  setInterval(this.tick, 1000)
            let time = this.state.minutes;
            this.setState({
                secondsRemaining: time * 60,
                started: true
            })
            setInterval(this.setInterval)
            }

    render(){
        {document.title = this.state.minutes + ':' + this.state.seconds}
        return(
        <div  style ={right}>
        <h1 style ={tom}>{this.state.minutes}:{this.state.seconds}</h1>

       {this.state.started ? '' : <button style ={right} className='btn btn-danger' onClick={this.startCountDown}>Start Pomodoro</button>}
        </div>
        )
    }
}
