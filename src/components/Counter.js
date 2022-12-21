import React, { Component } from 'react';

export default class Counter extends Component {
    state = { counter: 0 };

    incrementCount = () => {
        this.setState((prevState) => {
            console.log('🚀 ~ file: ClickCounter.js:8 ~ ClickCounter ~ prevState', prevState);
            return { counter: prevState.counter + 1 };
        });
    };

    render() {
        const {render } = this.props;
        return <div>Hello</div>;
    }
}
