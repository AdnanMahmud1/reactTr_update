/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Convert, toCelsius, toFarenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemparatureInput from './TemparatureInput';

export default class Calculator extends React.Component {
    state = { temparature: '', scale: 'c' };

    handleChange = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale,
        });
    };

    render() {
        const { temparature, scale } = this.state;
        const celsius = scale === 'f' ? Convert(temparature, toCelsius) : temparature;
        const ferenheit = scale === 'c' ? Convert(temparature, toFarenheit) : temparature;
        return (
            <div>
                <TemparatureInput
                    scale="c"
                    temparature={celsius}
                    onTemparatureChange={this.handleChange}
                />
                <TemparatureInput
                    scale="f"
                    temparature={ferenheit}
                    onTemparatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}
