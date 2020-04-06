import * as React from "react";
import PropTypes from 'prop-types';
import './Product.css';

export class Product extends React.Component {
  // inicializace komponenty se stavy
  constructor(props) {
    super();
    this.state = {clicked: false, productName: props.product.name};
  }

  render() {
    return (
        <div className={"product"}>
          <h1>{this.state.productName}</h1>
          <div>{this.state.clicked && "YES"}</div>
          <button
              style={{color: "green"}}
              onClick={() => this.setState({
                clicked: true,
                productName: this.state.productName.toUpperCase()
              })}>
            Buy
          </button>
        </div>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};