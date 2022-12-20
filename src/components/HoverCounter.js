/* eslint-disable import/no-unresolved */
import withCounter from './HOC/withCounter';

function HoverCounter(props) {
    const { counter, incrementCount } = props;
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {counter} times</h2>
        </div>
    );
}

export default withCounter(HoverCounter);
