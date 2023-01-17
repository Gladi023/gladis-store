import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import hat from '../../Components/images/hat.jpeg'
import crown from '../../Components/images/crown.jpeg'

//import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

//import './navigation.styles.scss';





const Shop = ({ name, id }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-20'>
      <img alt='hat' src={hat} class="o-50 " />
      <div>
        <h2>{'Hat'}</h2>
      </div>
    </div>
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-20'>
      <img alt='hat' src={crown} class="o-50 " />
      <div>
        <h2>{'Crown'}</h2>
      </div>
    </div>

            
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-20'>
      <img alt='hat' src={hat} class="o-50 " />
      <div>
        <h2>{'Hat'}</h2>
      </div>
    </div>
    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-20'>
      <img alt='hat' src={crown} class="o-50 " />
      <div>
        <h2>{'Crown'}</h2>
      </div>
    </div>

    </div>
    
  );
}

export default Shop;

