import * as React from "react";
import {ProductList} from "../ProductList/ProductList";

export class ProductListLoader extends React.Component {

  // inicializace komponenty se stavy
  constructor() {
    super();
    this.state = {products: []}
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/product")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    })
    .then(res => this.setState({products: res}))
    .catch((e) => console.log("error: " + e));
  }

  // vykreslení
  render() {
    return (<ProductList products={this.state.products}/>);
  }
}