import React, {useState} from 'react';
import './card.scss';
import {NavLink} from 'react-router-dom';
import Preloader from '../preloader';

const Card = ({item}) => {
	const [loaded,setLoaded] = useState(false);
	return (
		<NavLink to={`/films/${item._id}`} activeClassName='active'>
			<div className='card'>
				<div className='card__inner'>
					<div className='card-image-container'>
						<img alt={item.img} onLoad={() => {setLoaded(true)}} src={item.img}/>
						{loaded===false && <Preloader size='s'/>}
					</div>
					<div className='card-text'>
						<span className='card-name'>{item.name}</span>
						<p className='card-description'>{item.description}</p>
					</div>
					<div className='card-bottom'>
						<span className='film-rating'> {item.rating}</span>
						<span className='film-date'>{item.year}</span>
					</div>
				</div>
				<div className='card-overlay'>
					<span> go to...</span>
				</div>
			</div>
		</NavLink>

	);
};
export default Card;