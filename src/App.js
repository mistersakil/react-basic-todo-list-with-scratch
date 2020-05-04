import React from "react"
import "./styles.css"
import TodoList from "./TodoList"
const ContextApi = React.createContext()
export default function App() {
    const defaultTodos = [
        { task: "taks one", id: 1, status: 1 },
        { task: "taks two", id: 2, status: 1 },
        { task: "taks three", id: 3, status: 1 }
    ]

    return (
        <ContextApi.Provider value={defaultTodos}>
            <h2>React Basic ToDo List With Scratch</h2>
            <hr />
            <TodoList />
        </ContextApi.Provider>
    )
}
