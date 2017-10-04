import React, {Component} from 'react';
import Input from './Input'
import TodoList from './TodoList'
import Menu from './Menu'


export default class  extends Component {
    constructor(props) {
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.addTodoEnter = this.addTodoEnter.bind(this)
        this.state = {
            text: '',
            todos: []
        }
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        })


    }

    addTodo() {
        this.setState({
            todos: this.state.todos.concat(this.state.text),
            text: ''
        })


    }

    removeTodo(e) {
        const result = this.state.todos;
        result.splice(e, 1);
        this.setState({
            todos: result
        })
    }


    addTodoEnter(e) {

        if (e.key === 'Enter') {
            this.addTodo()
        }


    }


    render() {
        return (
            <div>
                <Input
                    text={this.state.text} // this is value
                    onTextChange={this.handleTextChange} // this is function
                    sendAddEnter={this.addTodoEnter}
                    onInputSubmit={this.addTodo}
                />
                <TodoList
                    todos={this.state.todos}
                    sendDel={this.removeTodo}
                />
            </div>
        )
    }
}