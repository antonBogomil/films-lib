import React from 'react';
import * as T from "prop-types";
export const List = ({data=[]}) => {
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
const ListItem = ({item}) => {
    return (
        <div className='list_item'>
            {item}
        </div>
    )
};
List.propTypes = {
    data: T.array
};
ListItem.propTypes = {
    item: T.object.isRequired
};

