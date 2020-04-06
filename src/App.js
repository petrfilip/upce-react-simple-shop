import React from 'react';
import './App.css';
import {Product} from "./components/Product/Product";
import {ProductList} from "./components/ProductList/ProductList";
import {ProductListLoader} from "./components/ProductListLoader/ProductListLoader";
import {SearchBar} from "./components/SearchBar/SearchBar";

const data = [
  {
    id: 1,
    name: "Xiaomi"
  },
  {
    id: 2,
    name: "Samsung"
  },
]

function App() {
  return (
      <div className="App">
        <SearchBar/>
        <hr/>
        Product
        <Product product={data[0]}/>
        <hr/>
        Product list - mock data
        <ProductList products={data}/>
        <hr/>
        Product list - remote data
        <ProductListLoader/>

      </div>
  );
}

export default App;
