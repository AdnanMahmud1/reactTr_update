import React from 'react';

export default function Services({ age, isSingle }) {
    return (
        <div>
            Services of no {age} and he is {isSingle ? 'married' : 'not married'}
        </div>
    );
}
