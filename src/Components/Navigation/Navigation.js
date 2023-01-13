import React from 'react';

const Navigation = () => {
    return (
        <div>
        <nav style={{display: 'flex', justifyContent: 'flex-end', color: '#000000'}}>
        <p className='f3 link dim green underline pointer pa3'>Shop</p>
        <p className='f3 link dim green underline pointer pa3'>Contact</p>
        <p className='f3 link dim black underline pa3 pointer'>Sign In</p>
        </nav>
        </div>
    );
}

export default Navigation;