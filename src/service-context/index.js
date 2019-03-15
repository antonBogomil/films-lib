import React from 'react';
const {
    Provider: ServiceProvider,
    Consumer: ServiceConsumer
} = React.createContext(0);
export {
    ServiceConsumer,
	ServiceProvider
}