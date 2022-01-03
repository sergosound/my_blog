import React from 'react';
import { PopupService } from '../services';

const Home = () => {
    PopupService.show();
    return <div>Home page</div>;
};

export default Home;
