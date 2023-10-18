import { useState } from "react";
/* eslint-disable react/prop-types */
export function TodoItem({todo,toggleTodo,deleteTodo,editTodo}) {
    console.log("singletodo",todo)

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.title);

    const handleEdit = () =>{
        setIsEditing(true);
    };

    const handleSave = () =>{
        editTodo(todo.id, editedText);
        setIsEditing(false);
    };



    return (
        <li key={todo.id}>
            <label>
                <input type="checkbox" checked={todo.completed}
                    onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {
                    isEditing ? (
                        <input
                        className="editor"
                            type="text"
                            value={editedText}
                            onChange={(e) => {setEditedText(e.target.value)}}
                        ></input>
                    ) : (
                        todo.title
                    )
                } 
            </label>
            {isEditing ? (
                <button onClick={handleSave} className="btn btn-success">Save</button>
            ):(
                <button onClick={handleEdit} className="btn edit">Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>

        </li>
    )
}