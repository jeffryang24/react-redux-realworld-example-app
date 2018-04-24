import React from "react";
import { connect } from "react-redux";

// Map state to component props
const mapStateToProps = (state) => ({
  appName: state.appName
});

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.appName}</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
