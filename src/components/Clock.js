/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.clockTimer);
    }

    // handleClick = () => {
    //     this.setState({
    //         locale: this.locale ? 'en-US' : 'bn-BD',
    //     });
    // };
    handleClick(locale) {
        this.setState({
            locale,
        });
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <p>{date.toLocaleTimeString(locale)} </p>
                </h1>
                <button type="button" onClick={() => this.handleClick('en-US')}>
                    Click Here
                </button>
            </div>
        );
    }
}

export default Clock;
