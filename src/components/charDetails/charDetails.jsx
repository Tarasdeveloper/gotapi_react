import React, { Component } from 'react';
import './charDetails.css';
import GotService from '../../service/gotService';

export const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label} </span>
            <span>{item[field]}</span>
        </li>
    );
};

export default class ItemDetails extends Component {
    gotService = new GotService();

    state = {
        item: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId } = this.props;
        if (!itemId) {
            return;
        }

        this.gotService.getCharacter(itemId).then((item) => {
            this.setState({ item });
        });
        // this.foo.bar = 0;    //<== to make error
    }

    render() {
        if (!this.state.item) {
            return <p className="select-error">Please select a character</p>;
        }
        const { item } = this.state;
        const { name } = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                </ul>
            </div>
        );
    }
}
