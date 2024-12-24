import { Login } from './login'

// import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";

// const client = new ApolloClient({
//     link: new HttpLink({
//         uri: "http://localhost:8080/",
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Credentials': true,
//         },
//         fetch,
//     }),
//     cache: new InMemoryCache()
// })

export default function LoginRoot() {
    return (
        <Login>
        </Login>
    );
}