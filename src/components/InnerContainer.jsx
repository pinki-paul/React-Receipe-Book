import React from 'react';

export default function InnerContainer({children}) {
    return (
        <div className='innerContaier'>
            {children}
        </div>
    )
}