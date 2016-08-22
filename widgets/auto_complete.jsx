import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AutoComplete extends Component {
  constructor({names}) {
    super();
    this.state = {names, value: ""};
  }

  inputHandler(e) {
    this.setState({value: e.target.value});
  }

  fillName(name) {
    this.setState({value: name});
  }

  render() {
    const { names, value } = this.state;
    const filteredNames = names.filter((name) => name.toLowerCase().indexOf(value.toLowerCase()) === 0);
    const nameList = filteredNames.map((name) => ( <li key={name} onClick={this.fillName.bind(this, name)}>{name}</li> ));
    return (
      <div className="auto-complete-wrapper">
        <h1>Autocomplete</h1>
        <section className="auto-complete">
          <input type="text" placeholder="search..." onChange={this.inputHandler.bind(this)} value={value}/>
          <ul className="name-list">
            <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              {nameList}
            </ReactCSSTransitionGroup>
          </ul>
        </section>
      </div>
    );
  }
}

export default AutoComplete;
