/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({todos,toggleTodo,deleteTodo,editTodo}) {

    return (
        <ul className="list">
            {todos.length===0 && "No Todos"}
            {todos.length>0 && todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
            })}
        </ul>
    )
}