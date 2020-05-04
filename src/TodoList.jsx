import React, { Fragment, useContext } from "react"
import Todo from "./Todo"
import { ContextApi } from "./App"

export default function TodoList(props) {
    const { todoCreateHandler, todos } = useContext(ContextApi)

    const defaultTodo = { task: "", id: 1, status: 0 }
    const [todo, setTodo] = React.useState(defaultTodo)
    const [error, setError] = React.useState(false)
    const todoHandler = event => {
        let { name, value } = event.target
        const todoId = todos[0].id + 1
        value = value.charAt(0).toUpperCase() + value.slice(1)
        setTodo(todo => ({
            ...todo,
            [name]: value,
            id: todoId
        }))
    }
    const todoProcessHandler = event => {
        event.keyCode === 13 && todoProcess()
        event.target.name === "save" && todoProcess()
    }
    const todoProcess = () => {
        if (todo.task.length >= 5) {
            todoCreateHandler(todo)
            setTodo(defaultTodo)
            setError(false)
        } else {
            setError(true)
        }
    }
    const todoClearHandler = () => {
        setTodo(defaultTodo)
        setError(false)
    }
    return (
        <Fragment>
            <div className="listContainer">
                <input
                    type="text"
                    placeholder="Add new task and press enter key"
                    value={todo.task}
                    onChange={todoHandler}
                    onKeyDown={todoProcessHandler}
                    name="task"
                />
                <button onClick={todoProcessHandler} name="save">
                    Save
                </button>
                <button onClick={todoClearHandler}>Clear</button>
                {error && (
                    <em className="error">
                        !!! Task length can not be less than 5
                    </em>
                )}
                <Todo />
            </div>
        </Fragment>
    )
}
