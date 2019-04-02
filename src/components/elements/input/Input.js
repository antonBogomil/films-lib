import React from 'react';
import './input.scss';

const Input = ({value,placeholder,type,onChange}) => {
	return (
		<input type={type} placeholder={placeholder || ''} onChange={onChange} className='input'/>
	);
};
export default Input;