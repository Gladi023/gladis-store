
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component';
// import Navigation from './Components/Navigation/Navigation';
// import SearchForm from './Components/SearchForm/SearchForm';
// import UserDash from './Components/UserDash/UserDash';
// import ProductCard from './Components/ProductCard/ProductCard';


const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes> 
  );
};

export default App;