/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Services from './components/Services';

export default function App() {
    const isLoggedIn = true;
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About data="hello" />} />
                <Route path="/services" element={<Services age="47" isSingle />} />
                <Route path="/posts/:category/:topic" element={<Posts />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route
                    path="/login"
                    element={isLoggedIn ? <Navigate to="dashboard" replace /> : <Home />}
                /> */}
                <Route path="/login" element={isLoggedIn ? <Dashboard /> : <Home />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}
//! this is sample
