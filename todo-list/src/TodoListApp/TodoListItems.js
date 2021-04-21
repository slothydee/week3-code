import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItems extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    render() {
        const listItems = this.props.todos.map((todo, idx) => {
            return <li key={idx}>{todo}</li>
        });

        return <ul>{listItems}</ul>;
    }
}

export default TodoListItems;