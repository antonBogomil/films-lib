import React from 'react';
import './content.scss';
import Routes from '../router/Routes';
const Content = ({modalOpen}) => {
	return (
		<main className='main-content'>
			<div className='wrapper'>
				<Routes/>
			</div>
		</main>
	);
};

export default Content;