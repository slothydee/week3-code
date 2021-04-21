import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListItems from './TodoListItems';
import './TodoListApp.css';

class TodoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                'Buy groceries',
                'Eat dessert (M&Ms preferrably)',
                'Clean the living room'
            ],
            todoItem: ''
        };
    }

    onInputChange = (e) => {
        const item = e.target.value;
        this.setState({
            todoItem: item
        });
    }

    onSubmit = () => {
        const item = this.state.todoItem;

        if (!item) {
            window.alert('You need to enter a todo');
            return;
        }

        this.setState({
            todos: [...this.state.todos, item],
            todoItem: ''
        });
    }

    render() {
        return (
            <div className="TodoListApp">
                <h1>Todo List</h1>
                <label htmlFor="todo-input">
                    Enter todo item:
                </label>
                <input 
                    id="todo-input"
                    onChange={this.onInputChange}
                    value={this.state.todoItem}
                />
                <button onClick={this.onSubmit}>Add</button>
                <TodoListItems todos={this.state.todos} />
            </div>
        )
    }
}

export default TodoListApp;