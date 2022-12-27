/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component {
    state = {
        theme: 'green',
    };

    switchTheme = () => {
        this.setState(({ theme }) => {
            if (theme === 'dark') {
                return {
                    theme: 'light',
                };
            }

            return {
                theme: 'dark',
            };
        });
    };

    render() {
        const { theme } = this.state;
        return (
            <div className="app">
                <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter counter={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
//! this is sample
