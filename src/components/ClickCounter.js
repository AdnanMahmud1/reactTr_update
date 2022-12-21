import React from 'react';

export default class ClickCounter extends React.Component {
    state = { counter: 0 };

    incrementCount = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                <button type="button" onClick={this.incrementCount}>
                    Clicked {counter} times
                </button>
            </div>
        );
    }
}
