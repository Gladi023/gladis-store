

import Navigation from './Components/Navigation/Navigation';
import SearchForm from './Components/SearchForm/SearchForm';
import UserDash from './Components/UserDash/UserDash';
import ProductCard from './Components/ProductCard/ProductCard';




import './App.css';


function App() {
  return (
    <div className="App">
   
      <Navigation />
       <SearchForm />
       <UserDash />
       <ProductCard />



     {/*  <Home />
      <Travel />
      <Product />
      <UserSearchHistory />
  <Footer />*/}


   </div>
  );
}

export default App;