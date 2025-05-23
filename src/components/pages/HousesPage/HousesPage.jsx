import React from 'react';
import { Component } from 'react';
import GotService from '../../../service/gotService';
import ErrorMessage from '../../errorMessage/errorMessage';
import ItemList from '../../itemList';
import ItemDetails, { Field } from '../../charDetails/charDetails';
import RowBlock from '../../RowBlock/RowBlock';
import WithData from '../../WithData/WithData';

export default class HousesPage extends Component {
    gotService = new GotService();

    state = {
        selectedHouse: null,
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

        const HouseList = WithData(ItemList, this.gotService.getAllHouses);

        const itemList = (
            <HouseList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({ name }) => name}
            />
        );

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse}
            >
                <Field field="name" label="Name" />
                <Field field="region" label="Region" />
                <Field field="titles" label="Titles" />
                <Field field="coatOfArms" label="Coat оf Arms" />
            </ItemDetails>
        );

        return <RowBlock left={itemList} right={itemDetails} />;
    }
}
