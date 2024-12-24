'use client'

import logo from '/public/logo192.png'
import { useSelector } from "react-redux";
import { redirect } from 'next/navigation'

export default function Page() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuth) {
        redirect('/login');
    }

    return (

        <div className="App">
            <header className="App-header">
                <img src={logo.src} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}