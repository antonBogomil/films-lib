import React from 'react';
import * as T from "prop-types";

const List = (data) => {
    return (
        <div className='page-list-container'>
            {
                data.map((item) => {
                    return (<ListItem item={item} key={item.id}/>)
                })
            }
        </div>
    );
};
List.propTypes = {
    data: T.array.isRequired,
};
const ListItem = ({item}) => {
    return (
        <div className='list_item'>
            {item}
        </div>
    )
};
export default List;
