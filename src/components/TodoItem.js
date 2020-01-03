import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <li className="Todo">
               <strong> {this.props.todo.title}</strong>
                
            </li>
        )
    }
}

export default TodoItem
