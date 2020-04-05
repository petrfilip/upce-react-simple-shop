import * as React from "react";

export class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {text: "", text2: ""};
  }

  handleChange(event) {
    this.setState({text2: event.target.value});
  }

  render() {
    return (
        <>
          <input
              onChange={(event => this.setState({text: event.target.value}))}/>
          <button>{this.state.text}</button>
          <hr/>
          <input onChange={this.handleChange.bind(this)}/>
          <button>{this.state.text2}</button>
        </>
    )
  }
}

