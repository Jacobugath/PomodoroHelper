import React, { Component } from 'react';
import axios from 'axios';
let margin = {marginRight: 30, backgroundColor: '#f8f7f7'};
let marginL = {marginLeft: 40};
let marginB = {marginRight: 60}

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoCategory = this.onChangeTodoCategory.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_category: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoCategory(e) {
        this.setState({
            todo_category: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_category: this.state.todo_category,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_category: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10, backgroundColor: '#212529', color: '#f8f7f7', paddingBottom: 40}}>
                <h3>Create New Todo</h3>
                <br></br>
                <form onSubmit={this.onSubmit}>

                        <label style={marginL}>Description: </label>
                        <input  style = {margin} type="text"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                                <label>Category: </label>
                        <input
                                type="text"
                                style={marginB}
                                value={this.state.todo_category}
                                onChange={this.onChangeTodoCategory}
                                />
                                <input  style={marginB} className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label style={marginB} className="form-check-label">Low</label>
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.todo_priority==='Medium'}
                                    onChange={this.onChangeTodoPriority}
                                    style={marginB}
                                    />
                            <label style={marginB} className="form-check-label">Medium</label>

                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    style = {marginB}
                                    checked={this.state.todo_priority==='High'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                            <input style={marginL} type="submit" value="Create Todo" className="btn btn-danger" />
            </form>
            </div>
        )
    }
}