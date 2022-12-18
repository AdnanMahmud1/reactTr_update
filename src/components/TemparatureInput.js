/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export default function TemparatureInput({ temparature, scale, onTemparatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input
                type="text"
                value={temparature}
                onChange={(e) => onTemparatureChange(e, scale)}
            />
        </fieldset>
    );
}
