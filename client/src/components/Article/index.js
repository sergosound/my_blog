import React from 'react';
import UserInfo from './components/UserInfo';
import Button from '../Button';

const style = {
    content: {
        padding: 20,
    },
    description: {
        padding: 0,
    }
};

const Article = () => (
    <div className="card hoverable small" style={style.content}>
        <UserInfo />
        <p className="card-title">Article title</p>
        <div className="card-content" style={style.description}>
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.
            </p>
        </div>
        <Button flat>Reade post</Button>
    </div>
);

export default Article;
