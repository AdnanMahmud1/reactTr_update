/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-constructed-context-values */
import { React } from 'react';
import GlobalStyle from './components/styles/Global.style';
import Tutorial from './components/Tutorial';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Tutorial />
        </>
    );
}
//! this is sample
