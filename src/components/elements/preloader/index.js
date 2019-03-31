import React from 'react';
import './spinner.scss';
import img from 'assets/walk.gif';
const Preloader = () => {
    return (
        <div className='preload-container'>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Preloader;