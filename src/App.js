import React from 'react';
import { connect } from 'react-redux';
import { exampleAction } from './actions/exampleAction';
import ExampleComponent from './components/ExampleComponent';

function App(props) {
  return (
    <div>
      <ExampleComponent {...props}/>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  exampleAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);