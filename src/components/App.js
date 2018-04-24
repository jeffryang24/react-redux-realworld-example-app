import Header from './Header';
import Home from './Home';

import React, { Component } from 'react';
import { connect } from 'react-redux';

// Map state to component props
const mapStateToProps = (state) => ({
  appName: state.appName
});

class App extends Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
