import React, { useState } from 'react';

const Nav: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-1/3 p-4 border-r border-gray-300">
            <h2 className="text-lg font-semibold">Navigation</h2>
            {[...Array(3)].map((_, index) => (
                <div key={index} className="py-2">
                    <button
                        className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        Section {index + 1}
                    </button>
                    {activeIndex === index && (
                        <div className="p-4 border-l-4 border-blue-500 bg-gray-50 mt-1 rounded-lg">
                            Section {index + 1} Content
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Nav;

