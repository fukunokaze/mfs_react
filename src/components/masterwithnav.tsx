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
        <div className="border-end p-3" style={{ width: '33.333%' }}>
            <div className="p-3" style={{ width: '66.667%' }}>
                {master.children}
            </div>
        </div>
    );
};

export default MasterWithNav;

