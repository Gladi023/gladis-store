
import Navigation from '../../Components/Navigation/Navigation';
import SearchForm from '../../Components/SearchForm/SearchForm';
import UserDash from '../../Components/UserDash/UserDash';
import ProductCard from '../../Components/ProductCard/ProductCard';
import '../../Components/App.css';






function Home() {
  return (
    <div className="App">
     
   
      <Navigation />
       <SearchForm />
       <UserDash />
       <br></br>
       <br></br>
       <ProductCard />



     {/*  <Home />
      <Travel />
      <Product />
      <UserSearchHistory />
  <Footer />*/}


   </div>
  );
}

export default Home;