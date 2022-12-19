/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        let text = 'From Emoji Component';
        if (override) text = override;
        return <div>{text}</div>;
    }
}
