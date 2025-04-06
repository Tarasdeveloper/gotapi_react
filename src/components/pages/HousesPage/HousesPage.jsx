import { Component } from 'react';
import GotService from '../../../service/gotService';
import ErrorMessage from '../../errorMessage/errorMessage';
import ItemList from '../../itemList';
import ItemDetails, { Field } from '../../charDetails/charDetails';
import RowBlock from '../../RowBlock/RowBlock';

export default class HousesPage extends Component {
    gotService = new GotService();

    state = {
        selectedHouse: 5,
        error: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id,
        });
    };

    componentDidCatch() {
        this.setState({
            error: true,
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />;
        }

        const housesList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({ name }) => name}
            />
        );

        const houseDetails = (
            <ItemDetails itemId={this.state.selectedBook}>
                <Field field="name" label="Name" />
                <Field field="region" label="Region" />
                <Field field="words" label="Words" />
                <Field field="overlord" label="Overlord" />
                <Field field="ancestralWeapons" label="AncestralWeapons" />
            </ItemDetails>
        );

        return <RowBlock left={housesList} right={houseDetails} />;
    }
}
