import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

//import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

//import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment style={{display: 'flex', justifyContent: 'flex-end', color: '#000000'}} >
      <div className='navigation'>
        <Link className='logo-container' to='/'>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'style={{display: 'flex', justifyContent: 'flex-end', color: '#000000', fontSize: 'xx-large'}} >
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'style={{display: 'flex', justifyContent: 'flex-end', color: '#000000', fontSize: 'xx-large'}} >
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
