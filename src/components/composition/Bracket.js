/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Bracket extends React.Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({ addBracket: this.addBracket });
    }
}
