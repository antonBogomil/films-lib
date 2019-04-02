import React from 'react';
import * as T from 'prop-types';
import {FORM} from '../../../const';
import Button from '../button';
import './form.scss'
const Form = ({param, values, onChange, onSubmit, onClear}) => {
	return (
		<form className='form' onSubmit={onSubmit}>
			{
				param.fields.map((field) => {
					return (
						<div key={field.name} className='field-container'>
							<label>
								<p>
									{FORM.ENTER_MESSAGE + field.name}
								</p>
								<Field onChange={onChange}
									   type={field.type}
									   value={values[field.name]}
									   placeholder={field.placeholder}
									   name={field.name}
									   // required={true}
								/>
							</label>
						</div>
					);
				})
			}
			<Button>
				Submit
			</Button>
		</form>
	);
};
Form.propTypes = {
	param: T.object.isRequired,
	onChange: T.func.isRequired,
	onSubmit: T.func.isRequired,
	onClear: T.func
};
export default Form;


const Field = ({name, type, placeholder, value, required, max, min, onChange}) => {
	return (
		<input placeholder={placeholder}
			   className={`field field_${type}`}
			   value={value}
			   type={type}
			   onChange={onChange(name)}
			   required={required}
		/>
	);
};

Field.propTypes = {
	name: T.string.isRequired,
	type: T.string.isRequired,
	placeholder: T.string.isRequired,
	value: T.string.isRequired,
	required: T.bool,
	onChange: T.func.isRequired,
};

