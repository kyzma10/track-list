import React from 'react';
import ListItem from '../list-item';

const List = ({data}) => {
    console.log(data);
    return (
        <div>
            {data.map(item => <ListItem data={item} />)}
        </div>
    );
};

export default List;
