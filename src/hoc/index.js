import React from 'react';
import {ServiceConsumer} from 'service-context';

const withService = () => WrappedComponent => {
	return (props) =>
		(<ServiceConsumer>
			{(service) => {
				return (<WrappedComponent {...props}
										  service={service}/>);
			}}
		</ServiceConsumer>);

};

export default withService;