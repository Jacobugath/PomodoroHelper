import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
let right = {textAlign: 'center'};

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_category: '',
            todo_priority: '',
            todo_completed: false
        }
    }
    handleDelete = () =>{
        axios.get('http://localhost:4000/todos/delete/'+this.props.todo._id)
            .then(res => console.log(res.data));
    }
    render(){
        return(

         <tr>
     <td style={right}>
        <button className="btn btn-danger"><Link to={"/pomodoro/"+this.props.todo._id} style = {{color: '#f8f7f7'}}>Pomodoro</Link></button>
        </td>
        <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
        <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_category}</td>
        <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+this.props.todo._id}>Edit</Link>
        </td>
        <td style={right}>
         <button ><img src='https://img.icons8.com/metro/26/000000/trash.png' alt="my image" onClick={this.handleDelete} /></button>
        </td>
    </tr>
        )
    }



}
