import React from 'react';

const Navigation = () => {
    return (
        <div>
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim white underline pointer pa3'>Home</p>

            <p className='f3 link dim white underline pa3 pointer'>Sign Out</p>
        </nav>
        </div>
    );
}

export default Navigation;