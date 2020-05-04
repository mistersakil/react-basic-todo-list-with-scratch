import React, { Fragment, useContext } from "react"
import { ContextApi } from "./App"

export default function Todo(props) {
    const contextTodo = useContext(ContextApi)
    return (
        <Fragment>
            {contextTodo.todos.map(todo => {
                return (
                    <div key={todo.id} className="list">
                        <button>x</button>
                        <button>-</button>
                        <span>{todo.task}</span>
                    </div>
                )
            })}
        </Fragment>
    )
}
