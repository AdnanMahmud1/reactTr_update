/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        description: 'JS is awesome',
        librabry: 'React',
        isAwesome: true,
    };

    // handleChange = (evt) => {
    //     const { value } = evt.target;
    //     this.setState({
    //             state,
    //         [evt.target.name]: value,
    //     });
    // };
    handleChange = (e) => {
        // this.setState({
        //     [e.target.name]: e.target.value,
        // });
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                description: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                librabry: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            console.log('noting');
        }
    };

    submitHandler = (e) => {
        const { title, description, librabry, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, description, librabry, isAwesome);
    };

    render() {
        const { title, description, librabry, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        name="title"
                        type="text"
                        placeholder="Type Here"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea name="description" value={description} onChange={this.handleChange} />
                    <br /> <br />
                    <select name="select-one" value={librabry} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br /> <br />
                    <input
                        name="isAwesome"
                        type="checkbox"
                        checked={isAwesome}
                        onChange={this.handleChange}
                    />
                    <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>{title}</p>
            </div>
        );
    }
}
