import React, {useEffect, useState} from 'react';
import './text.scss';
const TextTypingAnimation = ({children}) => {
	const [text, setText] = useState('');
	useEffect(() => {
		let timer = setTimeout(() => {
			if (text.length<children.length){
				setText((text) => text + children[text.length]);
			}
		}, 300+Math.random()*100);
		if (text.length === children.length) {
			return () => {
				clearTimeout(timer);
			};
		}
		return ()=>{
		    clearTimeout(timer);
		}
	});
	return (
		<>
			{text}<span className='blink-cursor'/>
		</>
	);
};
export default TextTypingAnimation;