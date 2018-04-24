import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from "redux";

const defaultState = { checked: false };
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        checked: !state.checked
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  onChange() {
    store.dispatch({
      type: 'TOGGLE'
    });
  }

  render() {
    return (
      <div>
        <h1>To-Dos</h1>
        <div>
          Learn Redux&nbsp;
          <input type="checkbox" checked={this.state.checked} onChange={this.onChange}/>
        </div>
        {this.state.checked ? (<h2>Done!</h2>) : null}
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'));
