import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const Breadcrumbs = ({ items }) => {
    return (
        <div className="mt-4 py-2 text-xs sm:text-sm text-gray-500 flex items-center gap-2">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span>{item}</span>
                    {index < items.length - 1 && (
                        <AiOutlineRight className="text-gray-400" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
