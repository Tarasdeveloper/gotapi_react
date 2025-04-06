import { Component } from 'react';
import GotService from '../../../service/gotService';
import ErrorMessage from '../../errorMessage/errorMessage';
import ItemList from '../../itemList';
import ItemDetails, { Field } from '../../charDetails/charDetails';
import RowBlock from '../../RowBlock/RowBlock';

export default class BooksPage extends Component {
    gotService = new GotService();

    state = {
        selectedBook: 5,
        error: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id,
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

        const bookList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({ name }) => name}
            />
        );

        const bookDetails = (
            <ItemDetails itemId={this.state.selectedBook}>
                <Field field="name" label="Name" />
                <Field field="numberOfPages" label="Number of pages" />
                <Field field="publisher" label="Publisher" />
                <Field field="released" label="Released" />
            </ItemDetails>
        );

        return <RowBlock left={bookList} right={bookDetails} />;
    }
}
