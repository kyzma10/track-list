import React from 'react';
import './style.css';

const ListItem = ({data}) => {
    return (
        <div>
            <ul>
                <li key={data.id}>{data.name}</li>
            </ul>
        </div>
    );
};

export default ListItem;
