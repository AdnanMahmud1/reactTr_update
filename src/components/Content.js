/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default class Content extends React.Component {
    componentDidMount() {
        console.log(this.context);
    }

    render() {
        const { theme, switchTheme } = this.context;
        return (
            <div>
                <h1>This is Content</h1>
                <Counter>
                    {(counter, incrementCount) => (
                        <HoverCounter
                            counter={counter}
                            incrementCount={incrementCount}
                            theme={theme}
                            switchTheme={switchTheme}
                        />
                    )}
                </Counter>
            </div>
        );
    }
}

Content.contextType = ThemeContext;
