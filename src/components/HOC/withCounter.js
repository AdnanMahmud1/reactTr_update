import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = { counter: 0 };

        incrementCount = () => {
            this.setState((prevState) => ({ counter: prevState.counter + 1 }));
        };

        render() {
            const { counter } = this.state;
            return <OriginalComponent counter={counter} incrementCount={this.incrementCount} />;
        }
    }

    return NewComponent;
};

export default withCounter;