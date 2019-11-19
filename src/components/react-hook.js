import React, { useState } from 'react';


const ReactHook=() => {
    const [todos, setTodos] = useState([
        {
            text: 'learn aout React hook',
            isComplete: false 
        },
        {
            text: 'learn aout React hook',
            isComplete: false 
        },
        {
            text: 'learn aout React hook',
            isComplete: false 
        },
    ])

    // actions
    const addTodo=(text)=> {
        const newTodos = [...todos, { text}]
        setTodos(newTodos)
    }
    const removeTodo = index => {
        const newTodos=[...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    const CompleteTodo = index => {
        const newTodos=[...todos]
        !newTodos[index].isComplete ?  newTodos[index].isComplete = true : newTodos[index].isComplete =false 
        setTodos(newTodos)
    }
    // children components
    const Todo=({todo, index, CompleteTodo, removeTodo})=> {
        const handleCompleteTodo =() => {
            CompleteTodo(index)
        }

        return  <div className="todo" style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
        {todo.text}
        <button onClick={ handleCompleteTodo }>{todo.isComplete? "Uncomplete" : "Complete"}</button>
        <button onClick={()=>removeTodo(index)}>X</button>
        </div>
    }

    const TodoForm=({addTodo})=> {
        const [value, setValue] = useState('')
        const handleSubmit=(e)=> {
            e.preventDefault()
            if(!value) return
            addTodo(value)
            setValue('')
        }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" value={value} onChange = { e=> setValue(e.target.value)}/>
                    <button>Submit</button>
                </form>
                <div>{value}</div>
            </div>
        )
    }

    // main component

    return (
        <div className="container">
            <div className="todolist">
                {todos.map((todo, index)=> (
                    <Todo 
                        todo={todo}
                        index = {index}
                        key = {index}
                        CompleteTodo ={CompleteTodo}
                        removeTodo = {removeTodo}
                    />
                ))}
                <TodoForm addTodo = {addTodo} />
            </div>
        </div>
    )
}


export default ReactHook