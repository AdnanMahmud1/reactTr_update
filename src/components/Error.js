import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            Page not found !!!
            <p>
                <Link to="/">Return to home</Link>
            </p>
        </div>
    );
}
