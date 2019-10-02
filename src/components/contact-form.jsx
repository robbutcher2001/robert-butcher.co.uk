import React, { Component } from 'react';

import axios from 'axios';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ui: {
                loading: false,
                success: null,
                error: null
            },
            form: {}
        };

        this.state.form[this.props.fieldA.toLowerCase()] = '';
        this.state.form[this.props.fieldB.toLowerCase()] = '';
        this.state.form[this.props.fieldC.toLowerCase()] = '';

        this.onFieldChange = this.onFieldChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onFieldChange(field, userInput) {
        this.setState(prevState => {
            const newState = { ...prevState };
            newState.form[field.toLowerCase()] = userInput;
            console.log(newState);

            return newState;
        });
    }

    onHandleSubmit(event) {
        event.preventDefault();
        this.setState({
            ui: {
                loading: true
            }
        });

        axios.get('/api/hello')
            .then(resp => {
                console.log(resp);
                this.setState({
                    ui: {
                        loading: false,
                        success: resp.data.thing//message
                    }
                });
            })
            .catch(error => {
                this.setState({
                    ui: {
                        loading: false,
                        error: error.message
                    }
                });
            })
            .finally(() => {
                // this.setState({
                //     ui: {
                //         loading: false
                //     }
                // });
            });

        // this.props.fireLoginRequest(this.state);
    }

    render() {
        console.log(this.state);

        // if (this.state.ui.loading) {
        //     return (
        //         <div>Submitting..</div>
        //     );
        // }

        return (
            <form method='post' onSubmit={event => this.onHandleSubmit(event)}>
                <div className='field'>
                    <label htmlFor={this.props.fieldA.toLowerCase()}>{this.props.fieldA}</label>
                    <input
                        id={this.props.fieldA.toLowerCase()}
                        type='text'
                        name={this.props.fieldA.toLowerCase()}
                        onChange={event => this.onFieldChange(this.props.fieldA, event.target.value)}
                        autoComplete={this.props.fieldA.toLowerCase()}
                    />
                </div>
                <div className='field'>
                    <label htmlFor={this.props.fieldB.toLowerCase()}>{this.props.fieldB}</label>
                    <input
                        id={this.props.fieldB.toLowerCase()}
                        type='email'
                        name={this.props.fieldB.toLowerCase()}
                        onChange={event => this.onFieldChange(this.props.fieldB, event.target.value)}
                        autoComplete={this.props.fieldB.toLowerCase()}
                    />
                </div>
                <div className='field'>
                    <label htmlFor={this.props.fieldC.toLowerCase()}>{this.props.fieldC}</label>
                    <textarea
                        id={this.props.fieldC.toLowerCase()}
                        name={this.props.fieldC.toLowerCase()}
                        rows='4'
                        onChange={event => this.onFieldChange(this.props.fieldC, event.target.value)}
                    />
                </div>
                <ul className='actions'>
                    <li>
                        <input
                            type='submit'
                            value={this.props.submitMessage}
                        />
                    </li>
                </ul>
                <ul className='actions'>
                    <li>
                        {this.state.ui.loading &&
                            <p>Submitting..</p>
                        }
                        <p>{this.state.ui.success}</p>
                    </li>
                </ul>
            </form>
        );
    };
}