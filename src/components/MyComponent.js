/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log('clock ticking');
        setDate(new Date());
    };
    useEffect(() => {
        console.log('Updating component');
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('starting timer');
        const interval = setInterval(tick, 1000);
        // do the cleanup
        return () => {
            console.log('component unmounted');
            clearInterval(interval);
        };
    }, []);

    const addClick = () => {
        setCount((prevState) => prevState + 1);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>

            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}
