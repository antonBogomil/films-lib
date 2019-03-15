import React from 'react';
import './main.scss';
import Button from '../../parts/button';
import TextTypingAnimation from '../../parts/text/textTypingAnimation';
import Fade from 'react-reveal/Fade';
import Article from '../../parts/article';
import '../../../data/data';
import {data} from '../../../data/data';
import movie1 from './../../../assets/movie1.jpg';
import movie2 from './../../../assets/movie2.jpg';
import movie3 from './../../../assets/movie3.jpg';

const images = {
	movie1: movie1,
	movie2: movie2,
	movie3: movie3,
};

const MainPage = () => {
	return (
		<div className='container'>
			<div className='text-left'>
				<p className='text-1'>
					<TextTypingAnimation>
						Lorem ipsum dolor sit amet 2019.
					</TextTypingAnimation>
				</p>
				<h1>Hello world</h1>
				<p className='text-1'>Literally it does not mean anything.
					It is a sequence of words without a sense of
					Latin derivation that make up a text also known as filler text,
					fictitious, blind or placeholder</p>
				<div className='btn-container'>
					<Button type={'animated'}>
						Read more
					</Button>
				</div>
			</div>
			<div>
				<Fade cascade left>
					<p>
						Find movies currently in theaters near you. Sort by critic rating,
						get movie times, buy tickets and watch trailers and interviews.
					</p>
				</Fade>
			</div>
			<div>
				{
					data.map((item, i) => {
						return (<Article key={i}
										 title={item.title}
										 text={item.text}
										 type={i % 2 === 0 ? 'img_left': 'img_right'}
										 imgSrc={images[item.img]}/>);
					})
				}
			</div>
		</div>
	);
};

export default MainPage;