import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";

const App = () => {
  return (
    <Layout>
      <Home />
      <ProductsList />
    </Layout>
  );
};

export default App;
