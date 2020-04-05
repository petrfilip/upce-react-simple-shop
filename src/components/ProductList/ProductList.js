import * as React from "react";
import {Product} from "../Product/Product";
import PropTypes from "prop-types";

export class ProductList extends React.Component {

  render() {
    return (<div>
      {this.props.products.map(function (item, index) {
        return <Product key={index} product={item}/>
      })}
    </div>);
  }
}

ProductList.propTypes = {
  products: PropTypes.array
};
