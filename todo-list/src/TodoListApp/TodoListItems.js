import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoListItems.css';

class TodoListItems extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                text:PropTypes.string, 
                isComplete: PropTypes.boolean
        })
        ).isRequired
        , onComplete: PropTypes.func.isRequired
    }

    render() {
        const listItems = this.props.todos.map((todo, idx) => {
            const textDecoration = todo.isComplete? 'line-through':'initial'
            return (
            <li 
                key={idx} 
                onClick={this.props.onComplete(idx)}
                style={{
                    textDecoration, cursor: 'pointer'
                }}
            >
                {todo.text}
            </li>
            )
        });

        return <ul>{listItems}</ul>;
    }
}

export default TodoListItems;