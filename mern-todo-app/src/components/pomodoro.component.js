import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Timer from './timer.component'
let right = {textAlign: 'center'};

let tom = {
     fontSize:100
  }

export default class Pomodoro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_category: '',
            todo_priority: '',
            todo_completed: false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_category: response.data.todo_category,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
                document.body.style.backgroundImage = "linear-gradient(to right, red , yellow)"
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render(){
        return(
        <div style = {right}>
        <h1 style = {tom}>{this.state.todo_description}</h1>
        <Timer/>
        </div>
        )
    }
}
