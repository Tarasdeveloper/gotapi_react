import React, { Component } from 'react';

import ItemList from '../../itemList';
import ItemDetails, { Field } from '../../charDetails';
import ErrorMessage from '../../errorMessage/errorMessage';
import GotService from '../../../service/gotService';
import RowBlock from '../../RowBlock/RowBlock';
import WithData from '../../WithData/WithData';

export default class CharacterPage extends Component {
    gotService = new GotService();

    state = {
        selectedChar: null,
        error: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id,
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

        const CharacterList = WithData(
            ItemList,
            this.gotService.getAllCharacters
        );

        const itemList = (
            <CharacterList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({ name, gender }) => `${name} (${gender})`}
            />
        );

        const charDetails = (
            <ItemDetails
                itemId={this.state.selectedChar}
                getData={this.gotService.getCharacter}
            >
                <Field field="gender" label="Gender" />
                <Field field="born" label="Born" />
                <Field field="died" label="Died" />
                <Field field="culture" label="Culture" />
            </ItemDetails>
        );

        return <RowBlock left={itemList} right={charDetails} />;
    }
}
