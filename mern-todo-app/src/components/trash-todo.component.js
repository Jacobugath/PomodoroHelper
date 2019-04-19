import React, { Component } from 'react';
import axios from 'axios';


export default class TrashTodo extends Component {

    constructor(props) {
        super(props);


        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            todo_description: '',
            todo_category: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    handleDelete(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_category: this.state.todo_category,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        console.log(obj);
        axios.get('http://localhost:4000/todos/delete/'+this.props.match.params.id)
            .then(res => console.log('res.data'));

        this.props.history.push('/');
    }




    render() {
        return (
            <button><img src='https://img.icons8.com/metro/26/000000/trash.png' alt="my image" onClick={this.handleDelete} /></button>
        )
    }
}