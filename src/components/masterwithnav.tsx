'use client'

import React, { ReactElement, useState } from 'react';

interface MasterContainerProp extends React.PropsWithChildren {
    name: '',
    children: ReactElement
}

const MasterWithNav: React.FC<MasterContainerProp> = (master) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const data: number[] = [1, 2, 3];

    return (
        <div className="w-1/3 p-4 border-r border-gray-300">
            <div className="w-2/3 p-4">
                {master.children}
            </div>
        </div>
    );
};

export default MasterWithNav;

