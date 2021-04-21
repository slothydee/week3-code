import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoListItems.css';

class TodoListItems extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                isComplete: PropTypes.bool
            })
        ).isRequired,
        onComplete: PropTypes.func.isRequired
    }

    render() {
        const listItems = this.props.todos.map((todo, idx) => {
            return (
                <li
                    className={todo.isComplete ? 'complete' : ''}
                    key={idx}
                    onClick={this.props.onComplete(idx)}
                >
                    {todo.text}
                </li>
            );
        });

        return <ul>{listItems}</ul>;
    }
}

export default TodoListItems;