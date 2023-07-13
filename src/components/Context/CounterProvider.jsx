import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { products } from "../../db/products";
import _ from "lodash";

const CounterContext = createContext();
const CounterContextDispatcher = createContext();
const initialState = products;
const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const newProducts = state.filter((p) => p.id !== action.payload);
      return newProducts;
    }
    case "increment": {
      const index = state.findIndex((p) => p.id === action.payload);

      const product = { ...state[index] };
      product.count++;
      const newProducts = [...state];
      newProducts[index] = product;
      return newProducts;
    }
    case "decrement": {
      const newProducts = [...state];
      const index = newProducts.findIndex((p) => p.id === action.payload);
      if (newProducts[index].count > 1) {
        newProducts[index].count--;
        return newProducts;
      } else {
        const filteredProducts = state.filter((p) => p.id !== action.payload);
        return filteredProducts;
      }
    }
    case "filter": {
      const value = action.payload;
      if (value === "") {
        return products;
      } else {
        const newProducts = products.filter(
          (p) => p.availableSize.indexOf(value) > 0
        );
        return newProducts;
      }
    }
    case "sort": {
      const value = action.payload;
      if (value === "lowest") {
        return _.orderBy(state, ["price"], ["asc"]);
      } else {
        return _.orderBy(state, ["price"], ["desc"]);
      }
    }
    case "search": {
      const value = action.payload.target.value;
      if (value === "") {
        return state;
      } else {
        const newProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return newProducts;
      }
    }
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CounterContext.Provider value={products}>
        <CounterContextDispatcher.Provider value={dispatch}>
          {children}
        </CounterContextDispatcher.Provider>
      </CounterContext.Provider>
    </>
  );
};

export default CounterProvider;

export const useProducts = () => {
  return useContext(CounterContext);
};
// export const useCountActions = () => {
//   const setCount = useContext(CounterContextDispatcher);
//   const addOne = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   const addFive = () => {
//     setCount((prevCount) => prevCount + 5);
//   };
//   return { addFive, addOne };
// };

export const useProductsActions = () => {
  return useContext(CounterContextDispatcher);
};
