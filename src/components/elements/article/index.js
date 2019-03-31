import React from 'react';
import PropTypes from 'prop-types';
import './article.scss';
import {Fade, Zoom} from 'react-reveal';

const Article = ({imgSrc, title, text, type}) => {
	return (
		<article className={`article ${type}`}>
			<Zoom>
				<div className='article-image'>
					<img alt={title} src={imgSrc}/>
				</div>
			</Zoom>
			<div className='article-text'>
				<Fade left>
					<h4>{title}</h4>
				</Fade>
				<Fade left>
					<div>
						<p>
							{text}
						</p>
					</div>
				</Fade>
			</div>
		</article>
	);
};

Article.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['img_left', 'img_right'])
};
Article.defaultProps  = {
	type: 'img_left'
};

export default Article;