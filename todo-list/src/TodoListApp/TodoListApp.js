import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListItems from './TodoListItems';
import './TodoListApp.css';

class TodoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { text: 'Buy groceries', isComplete: false },
                { text: 'Eat dessert (M&Ms preferrably)', isComplete: false },
                { text: 'Clean the living room', isComplete: false }
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
            todos: [...this.state.todos, {
                text: item,
                isComplete: false
            }],
            todoItem: ''
        });
    }

    onClear = () => {
        this.setState({
            todos: []
        });
    }

    onCompleteHandler = (idx) => {
        return () => {
            const item = this.state.todos[idx];
            const updatedItem = {
                text: item.text,
                isComplete: !item.isComplete
            };

            // One way to do it
            // this.state.todos[idx] = updatedItem;
            // this.setState({
            //     todos: this.state.todos
            // });

            // Another, more "right" way to do it
            const updatedTodos = [
                ...this.state.todos.slice(0, idx),
                updatedItem,
                ...this.state.todos.slice(idx + 1)
            ];
            this.setState({
                todos: updatedTodos
            })
        }
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
                <button onClick={this.onClear}>Clear</button>
                <TodoListItems
                    todos={this.state.todos}
                    onComplete={this.onCompleteHandler}
                />
            </div>
        )
    }
}

export default TodoListApp;