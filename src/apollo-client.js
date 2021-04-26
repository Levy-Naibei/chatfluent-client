import ApolloClient from 'apollo-boost';
import App from './App';
import { ApolloProvider } from '@apollo/client';

// create apollo client instance
const client = new ApolloClient({
    uri: 'http://localhost:5000'
});

// pass the client to apollo provider
export default (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);