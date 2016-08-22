import React, { Component } from 'react';

class Tabs extends Component {
  constructor (props) {
    super(props);
    this.state = { currentTab: 0 };
  }

  updateCurrentTab (currentTab) {
    this.setState({currentTab});
  }

  render () {
    const titles = this.props.data.map((ob, idx) => (
      <h1
        key={ob.title}
        onClick={this.updateCurrentTab.bind(this, idx)}
        className={`tab-title${this.state.currentTab === idx ? " selected" : ""}`}>
        { ob.title }
      </h1>
    ));

    return (
      <div className="tabs-wrapper">
        <h1>Tabs</h1>
        <ul className="tabs-container">
          { titles }
        </ul>
        <article className="tab-content">{ this.props.data[this.state.currentTab].content }</article>
      </div>
    );
  }
}

export default Tabs;
