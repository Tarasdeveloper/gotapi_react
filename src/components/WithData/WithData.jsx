import { Component } from 'react';
import { Spinner } from 'reactstrap';

const WithData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData().then((data) => {
                this.setState({
                    data,
                });
            });
        }
        render() {
            const { data } = this.state;
            if (!data) return <Spinner />;

            return <View {...this.props} data={data} />;
        }
    };
};
// const { getAllCharacters } = new GotService();
// export default WithData(ItemList, getAllCharacters);
export default WithData;
