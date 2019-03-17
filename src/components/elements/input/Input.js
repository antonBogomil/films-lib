import React from 'react';
import './input.scss';
import * as PropTypes from 'prop-types';

const Input = ({value,placeholder,type,onChange}) => {
	return (
		<input type={type} placeholder={placeholder || ''} onChange={onChange} className='input'/>
	);
};
export default Input;