/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Counter from './components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* <Todo /> */}
                <Counter />
            </div>
        );
    }
}
//! this is sample
