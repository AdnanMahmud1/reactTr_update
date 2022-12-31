/* eslint-disable no-unused-vars */
import { useState } from 'react';

/* eslint-disable react/no-this-in-sfc */
function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });
    const (title, description) =todo;
    
    return (
        <div>
            <p>{todo}</p>
            <p><input type="text" value={} /></p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h2>{warning || 'Good choice!'}</h2>
        </div>
    );
}

export default Todo;
