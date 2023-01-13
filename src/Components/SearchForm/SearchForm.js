import React from 'react';

const SearchForm = () => {
    return (
        <div>
            <p className='f2 white' style={{display: 'flex', justifyContent: 'center'}}>
                {'Welcome to Gladis Store'}
            </p>

            <div className='form pa4 br3 shadow-5' style={{display: 'flex', justifyContent: 'center'}}>
                <input className='f3 pa2 w-50 center' type='text' />
                <button className='w-10 grow f4 link ph3 pv2 dib white bg-black' >Search</button>
            </div>
        </div>
    
    );
}

export default SearchForm;