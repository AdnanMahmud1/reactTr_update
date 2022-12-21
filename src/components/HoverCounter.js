import React from 'react';

export default class HoverCounter extends React.Component {
    state = { counter: 0 };

    incrementCount = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                <h1 onMouseOver={this.incrementCount}>Hovered {counter} times</h1>
            </div>
        );
    }
}
