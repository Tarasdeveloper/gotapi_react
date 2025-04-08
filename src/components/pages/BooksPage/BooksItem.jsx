import React, { Component } from 'react';
import GotService from '../../../service/gotService';
import ItemDetails, { Field } from '../../charDetails/charDetails';
import { withRouter } from '../../withRouter/withRouter';

class BooksItem extends Component {
    gotService = new GotService();

    render() {
        const { id } = this.props.params;

        if (!id) {
            return <span>Выберите книгу из списка</span>;
        }

        return (
            <ItemDetails itemId={id} getData={this.gotService.getBook}>
                <Field field="name" label="Name" />
                <Field field="numberOfPages" label="Number of pages" />
                <Field field="publisher" label="Publisher" />
                <Field field="released" label="Released" />
            </ItemDetails>
        );
    }
}
export default withRouter(BooksItem);
