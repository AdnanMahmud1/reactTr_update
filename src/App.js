/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-constructed-context-values */
import { React, useMemo, useState } from 'react';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

export default function App() {
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1);
    };

    const isEvenOrOdd = useMemo(()=>{
        () => return count % 2 === 0
    }, [count]);

    return (
        <div className="app">
            {/* <Todo /> */}
            <Title title="Hi from s" />
            <div>{show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevState) => !prevState)}>
                    {show ? 'hide post' : 'show post'}
                </button>
            </p>
            <p>
                <button type="button" onClick={increment}>
                    {count} - {isEvenOrOdd ? 'even' : 'odd'}
                </button>
            </p>
        </div>
    );
}
//! this is sample
