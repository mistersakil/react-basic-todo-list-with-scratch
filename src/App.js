import React from "react"
import "./styles.css"
import TodoList from "./TodoList"
export const ContextApi = React.createContext()
export default function App() {
    const defaultTodos = [
        { task: "Task one", id: 1, status: 1 },
        { task: "Task two", id: 2, status: 1 },
        { task: "Task three", id: 3, status: 1 }
    ]

    const [todos, setTodos] = React.useState(defaultTodos)

    const todoCreateHandler = todo => {
        setTodos([...todos, todo])
    }

    return (
        <ContextApi.Provider value={{ todos, todoCreateHandler }}>
            <h2>React Basic ToDo List From Scratch</h2>
            <TodoList />
        </ContextApi.Provider>
    )
}
