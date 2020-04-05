import * as React from "react";
import PropTypes from 'prop-types';
import './Product.css';

export class Product extends React.Component {
  // inicializace komponenty se stavy
  constructor() {
    super();
    this.state = {clicked: false};
  }

  render() {
    return (
        <div className={"product"}>
          <h1>{this.props.product.name}</h1>
          <div>{this.state.clicked && "YES"}</div>
          <button
              style={{color: "green"}}
              onClick={() => this.setState({clicked: true})}>Buy
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