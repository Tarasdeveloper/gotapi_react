import React from 'react';
import { Component } from 'react';
import Spinner from '../spinner/spinner';

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
            if (!data || data.length === 0) return <Spinner />;

            return <View {...this.props} data={data} />;
        }
    };
};
export default WithData;
// const { getAllCharacters } = new GotService();
// export default WithData(ItemList, getAllCharacters);
