
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import Shop from './routes/Shop/shop.component';
// import Navigation from './Components/Navigation/Navigation';
// import SearchForm from './Components/SearchForm/SearchForm';
// import UserDash from './Components/UserDash/UserDash';
// import ProductCard from './Components/ProductCard/ProductCard';
// const Shop = () => {
//   return <h1>I am the shop page</h1>;
// };

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='Shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;


