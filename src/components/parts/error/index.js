import React, {Component} from 'react';

export  default  class ErrorCatch extends Component{
    state = {
        error: false,
    };
    componentDidCatch(error, errorInfo) {
        this.setState({error:true})
    }
    render() {
        if (this.state.error){
           return <ErrorIndicator/>
        }
        else{
            return this.props.children;
        }
    }
}

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            Error!
        </div>
    );
};
