import React from 'react';
import * as T from 'prop-types';
import './list.scss'
import Card from '../../elements/card/Card';

export const List = ({data = []}) => {
	return (
		<div className='page-lst-container'>
			<div className='wrapper'>
				<h2>All</h2>
				<div className='list'>
					{
						data.map((item) => {
							return (<ListItem item={item} key={item.id}/>);
						})
					}
				</div>
			</div>
		</div>
	);
};
const ListItem = ({item}) => {
	return (
		<div>
			<Card item={item}/>
		</div>
	);
};
List.propTypes = {
	data: T.array
};
ListItem.propTypes = {
	item: T.object.isRequired
};

