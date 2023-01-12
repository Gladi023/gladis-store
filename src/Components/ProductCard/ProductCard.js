import React from 'react';
import hat from '../images/hat.jpeg'

const ProductCard = ({ name, id }) => {
  return (
    <div>
    <div className='tc grow bg-light-red br2 pa3 ma2 dib bw2 shadow-5'>
      <img alt='hat' src={hat} class="o-50" />
      <div>
        <h2>{'Product Form will go here'}</h2>
      </div>
    </div>

    </div>
    
  );
}

export default ProductCard;