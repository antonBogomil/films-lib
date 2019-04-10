import React from 'react';
import * as T from "prop-types";
import Card from '../../elements/card/Card';
export const List = ({data=[]}) => {
    return (
        <div className='page-list-container'>
		    <div className='wrapper'>
				<h2 >All</h2>
				{
					data.map((item) => {
						return (<ListItem item={item} key={item.id}/>)
					})
				}
            </div>
        </div>
    );
};
const ListItem = ({item}) => {
    return (
        <div className='list_item'>
            <Card item={item} />
        </div>
    )
};
List.propTypes = {
    data: T.array
};
ListItem.propTypes = {
    item: T.object.isRequired
};

