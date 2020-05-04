import React, { Fragment } from "react"
import Todo from "./Todo"

export default function TodoList(props) {
    return (
        <Fragment>
            <h2>Create New</h2>
            <Todo />
        </Fragment>
    )
}
