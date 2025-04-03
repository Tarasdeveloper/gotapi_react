import React, { Component } from 'react';
import './charDetails.css';
import GotService from '../../service/gotService';

export default class CharDetails extends Component {
    gotService = new GotService();

    state = {
        char: null,
    };

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const { charId } = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId).then((char) => {
            this.setState({ char });
        });
        // this.foo.bar = 0; //<==error
    }

    render() {
        if (!this.state.char) {
            return (
                <span className="select-error">Please select a character</span>
            );
        }
        const { name, gender, born, died, culture } = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name || 'Unknoun'}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender || 'Unknoun'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born || 'Unknoun'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died || 'Unknoun'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture || 'Unknoun'}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
