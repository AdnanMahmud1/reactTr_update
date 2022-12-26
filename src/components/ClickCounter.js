/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default function ClickCounter({ counter, incrementCount }) {
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {counter} times
            </button>
        </div>
    );
}
