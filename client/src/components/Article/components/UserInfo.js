import React from 'react';
import Data from './Data';
import logo from '../images/logo.png';
import '../style.css';

const style = {
    image: {
        height: 50,
    },
    description: {
        display: 'flex',
    }
};

const UserInfo = () => (
    <div className="row valign-wrapper">
        <div className="col">
            <img src={logo} alt="user logo" className="circle responsive-img" style={style.image} />
        </div>
        <div className="col" style={style.description}>
            <span className="black-text">
                Anton Samots
            </span>
            <Data />
        </div>
    </div>
);

export default UserInfo;
