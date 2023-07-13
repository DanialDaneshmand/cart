import Navbar from "./components/NavBar/Navbar";
import ProductList from "./components/ProductsList/ProductList";
import CounterProvider from "./components/Context/CounterProvider";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <>
      <CounterProvider>
        <Navbar />
        <Filter />
        <ProductList />
      </CounterProvider>
    </>
  );
};

export default App;
