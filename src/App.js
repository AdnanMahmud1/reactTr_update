/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Todo from './components/Todo';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Todo />
            </div>
        );
    }
}
//! this is sample
