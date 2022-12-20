/* eslint-disable import/no-unresolved */
import withCounter from './HOC/withCounter';

function ClickCounter(props) {
    const { counter, incrementCount } = props;
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {counter} times
            </button>
        </div>
    );
}

export default withCounter(ClickCounter);
