import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS, GET_USER} from './graphql';
import NavBar from '../../components/NavBar';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const { loading, error, data } = useQuery(GET_ALL_USERS);
    const { loading2, error2, data: data2 } = useQuery(GET_USER, {
        variables: { id: 1 },
    });

    console.log('data2', data2);

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers);
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <>
            <NavBar />
            <Content />
            <Footer />
        </>
    )
};

export default HomePage;
