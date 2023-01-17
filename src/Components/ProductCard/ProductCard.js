import React from 'react';
import hat from '../images/hat.jpeg';
import crown from '../images/crown.jpeg';
import keira from '../images/keira.jpg';

const ProductCard = ({ name, id }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>

    <div className='tc grow bg-black br2 pa3 ma2 dib bw2 shadow-5 w-50'>
      <img alt='hat' src={keira} class="o-50 " />
      <div>
        <h2>{'keira'}</h2>
      </div>
    </div>

    </div>
    
  );
}

export default ProductCard;