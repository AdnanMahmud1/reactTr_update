/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };
    // handleClick(locale) {
    //     this.setState({
    //         locale,
    //     });
    // }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        const newLocale = locale === 'bn-BD' ? 'en-US' : 'bn-BD';
        return (
            <div>
                <h1 className="heading">
                    <p>{date.toLocaleTimeString(locale)} </p>
                </h1>
                {/* {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US">
                        Click
                    </Button>
                ) : (
                    <Button change={this.handleClick} locale="bn-BD">
                        Click
                    </Button>
                )} */}
                {/* <Button change={this.handleClick} locale={locale === 'bn-BD' ? 'en-US' : 'bn-BD'}>
                    Click
                </Button> */}
                <Button change={this.handleClick} locale={newLocale} show={locale === 'bn-BD'} />
            </div>
        );
    }
}

export default Clock;
