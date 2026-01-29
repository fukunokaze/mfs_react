'use client'

import Link from 'next/link';
import { useState } from 'react';

interface NavProp {
    isAuth: boolean;
}

const Nav: React.FC<NavProp> = ({ isAuth }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const navItems = [
        { name: "Accounting", items: [] },
        { name: "Purchasing", items: [] },
        { name: "Supplier", items: [] },
    ];

    if (!isAuth) {
        return null;
    }

    return (
        <nav className="w-1/3 p-4 border-r border-gray-300">
            <h2 className="text-lg font-semibold mb-2">Navigation</h2>
            {navItems.map((item, index) => (
                <div key={index} className="py-2">
                    <button
                        className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none transition-colors"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                    >
                        {item.name}
                    </button>
                    {activeIndex === index && (
                        <div className="p-4 border-l-4 border-blue-500 bg-gray-50 mt-1 rounded-lg">
                            <Link href="/test" className="hover:underline">
                                Test Page
                            </Link>
                        </div>
                    )}
                </div>
            ))}
            
            <div className="py-2">
                <button
                    className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none transition-colors"
                    onClick={() => toggleAccordion(4)}
                    aria-expanded={activeIndex === 4}
                >
                    Inventory
                </button>
                {activeIndex === 4 && (
                    <div className="p-4 border-l-4 border-blue-500 bg-gray-50 mt-1 rounded-lg">
                        <Link href="/inventory/unitofmeasure" className="hover:underline">
                            Unit Of Measure
                        </Link>
                        <div className="ml-4 mt-2 border-l border-gray-600 pl-2">
                            <Link href="/inventory/unitofmeasure/lookup" className="hover:underline">
                                Lookup
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="py-2 mt-4 pt-4 border-t border-gray-300">
                <Link 
                    href="/logout" 
                    className="block w-full text-left py-2 px-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                >
                    Logout
                </Link>
            </div>
        </nav>
    );
};

export default Nav;