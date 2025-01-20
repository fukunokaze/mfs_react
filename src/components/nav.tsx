'use client'

import Link from 'next/link';
import React, { useState } from 'react';

interface NavProp {
    isAuth: boolean
};

const Nav: React.FC<NavProp> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const data: number[] = [1, 2, 3];

    // const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

    if (props.isAuth) {
        return (
            <div className="w-1/3 p-4 border-r border-gray-300">
                <h2 className="text-lg font-semibold">Navigation</h2>
                {data.map((_, index) => (
                    <div key={index} className="py-2">
                        <button
                            className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            Section {index + 1}
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 border-l-4 border-blue-500 bg-gray-50 mt-1 rounded-lg">
                                <Link href="/test">Test Page</Link>
                            </div>
                        )}
                    </div>
                ))}
                <div key='4' className="py-2">
                    <button
                        className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none"
                        onClick={() => toggleAccordion(4)}
                    > Inventory
                    </button>
                    {activeIndex === 4 && (
                        <div className="p-4 border-l-4 border-blue-500 bg-gray-50 mt-1 rounded-lg">
                            <Link href="/inventory/unitofmeasure">Unit Of Measure</Link>
                        </div>
                    )}
                </div>
                <div key='5' className="py-2">
                    <Link href="/logout">Logout</Link>
                </div>
            </div>
        );
    } else {
        return (<></>);
    }

};

export default Nav;

