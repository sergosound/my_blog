import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS} from './graphql';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    useEffect(() => {
        if (data) {
            setUsers(data.getAllUsers);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <>
            <h1>Home Page</h1>
            <ul>
                {users.map((user, idx) => (
                    <li key={idx}>{user.name + user.age}</li>
                ))}
            </ul>
        </>
    )
};

export default HomePage;
