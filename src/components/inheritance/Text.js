/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/prefer-stateless-function */
import Emoji from './Emoji';

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I am JS Language', '😈');
        return super.render(decoratedText);
    }
}
