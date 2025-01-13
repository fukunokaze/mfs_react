'use client'

import { Provider } from 'react-redux'
import React from 'react';
import store from '.';
// const store = useAppStore;

interface ReduxProviderProps {
    children: React.ReactNode
}

const ReduxProvider: React.FC<ReduxProviderProps> = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

export default ReduxProvider;