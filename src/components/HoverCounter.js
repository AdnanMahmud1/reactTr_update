/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default function HoverCounter({ counter, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;

    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {counter} times and holds {theme} theme
            </h1>
            <button type="button" onClick={switchTheme}>
                CHange Theme
            </button>
        </div>
    );
}
