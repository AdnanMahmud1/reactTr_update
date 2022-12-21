import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';

function App() {
    return (
        <div className="app">
            <ClickCounter />
            <HoverCounter />
            <User render={(isLoggedIn) => (isLoggedIn ? 'Evan' : 'Guest')} />
        </div>
    );
}

export default App;
