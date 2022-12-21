import React from 'react';

export default class ClickCounter extends React.Component {
   

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
