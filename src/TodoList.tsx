import React, { useState } from 'react';

const TodoList: React.FC = () => {

    interface Item {
        id: number;
        todo: string;
        completed: boolean;
    }

    const [todo, setTodo] = useState<Item[]>([{ id: 123, todo: "Random text", completed: false }])


    return (
        <>
            <h1>Todo List</h1>
            <ul>
                {todo.map((todo) => {
                    return <li key={todo.id} onClick={()=>{}}>{todo.todo}</li>
                })}
            </ul>

            <form>
                <input type="text" name='text' id='text' />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default TodoList;