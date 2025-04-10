import { Component } from 'react';
import GotService from '../../../service/gotService';
import ErrorMessage from '../../errorMessage/errorMessage';
import ItemList from '../../itemList';
import { withRouter } from '../../withRouter/withRouter';
import WithData from '../../WithData/WithData';

class BooksPage extends Component {
    gotService = new GotService();

    state = {
        error: false,
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

        const BookList = WithData(ItemList, this.gotService.getAllBooks);

        return (
            <BookList
                onItemSelected={(itemId) => {
                    this.props.navigate(`/books/${itemId}`);
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({ name }) => name}
            />
        );
    }
}
export default withRouter(BooksPage);
