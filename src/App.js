/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Services from './components/Services';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About data="hello" />} />
                <Route path="/services" render={() => <Services number="47" />} />
                <Route path="/posts/:category/:topic" element={<Posts />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}
//! this is sample
