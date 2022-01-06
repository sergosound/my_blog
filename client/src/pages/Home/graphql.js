import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUser($id: ID) {
        getUser(id: $id) {
            id, name
        }
    }
`;

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id,
            name,
            age,
            posts {
                id, title, content
            }
        }
    }
`;
