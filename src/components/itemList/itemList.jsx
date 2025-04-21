import React from 'react';
import ErrorMessage from '../errorMessage/errorMessage';
import './itemList.css';

const ItemList = ({ data, renderItem, onItemSelected }) => {
    const renderItems = (arr) => {
        if (!arr || !Array.isArray(arr)) {
            return <ErrorMessage />;
        }
        return arr.map((item, index) => {
            const { id } = item;
            const label = renderItem(item);

            return (
                <li
                    key={id || index}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}
                >
                    {label}
                </li>
            );
        });
    };

    return <ul className="item-list list-group">{renderItems(data)}</ul>;
};
export default ItemList;
