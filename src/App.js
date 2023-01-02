/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-constructed-context-values */
import { React, useState } from 'react';
import MyComponent from './components/MyComponent';

export default function App() {
    const [show, setShow] = useState(true);

    return (
        <div className="app">
            {/* <Todo /> */}
            <div>{show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevState) => !prevState)}>
                    {show ? 'hide post' : 'show post'}
                </button>
            </p>
        </div>
    );
}
//! this is sample
