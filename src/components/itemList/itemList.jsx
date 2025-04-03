import { Component } from 'react';
import './itemList.css';

import GotService from '../../service/gotService';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {
    gotService = new GotService();

    state = {
        charlist: null,
    };

    componentDidMount() {
        this.gotService.getAllCharacters().then((charlist) => {
            this.setState({
                charlist,
            });
        });
    }

    renderItems(arr) {
        return arr.map((item, i) => (
            <li
                key={i}
                className="list-group-item"
                onClick={() => this.props.onCharSelected(41 + i)}
            >
                {item.name}
            </li>
        ));
    }

    render() {
        const { charlist } = this.state;
        if (!charlist) return <Spinner />;

        const items = this.renderItems(charlist);

        return <ul className="item-list list-group">{items}</ul>;
    }
}
