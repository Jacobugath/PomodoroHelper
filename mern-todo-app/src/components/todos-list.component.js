
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateTodo from './create-todo.component';
import TrashTodo from './trash-todo.component';
import Todo from './todo.component'
import Pomodoro from "./pomodoro.component"

let right = {textAlign: 'center'};


export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }
    componentDidUpdate(){
        axios.get('http://localhost:4000/todos/')
        .then(response => {
            this.setState({ todos: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
            document.body.style.backgroundImage = 'none';
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }


    render() {
        {document.title = 'Pomodoro Helper'}
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th style={right}>Pomodoro</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Edit</th>
                            <th style={right}>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
                <br></br>
                <CreateTodo/>
            </div>
        )
    }
}