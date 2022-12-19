/* eslint-disable react/jsx-no-undef */
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';

function App() {
    return (
        <div>
            <Emoji>
                {({ addEmoji }) => (
                    <Bracket>
                        {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                    </Bracket>
                )}
            </Emoji>
            {/* <br />
            {Bracket()} */}
        </div>
    );
}

export default App;
