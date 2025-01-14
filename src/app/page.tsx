'use client'

import { redirect } from 'next/navigation'
import { useAppSelector } from '../app/hooks';
import React from "react";

export default function Page() {

    const logo = require('../../public/logo192.png');

    const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

    if (!isAuth) {
        redirect('/login');
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-4">This is the main content area. Replace this text with your content.</p>
        </div>
    );
}