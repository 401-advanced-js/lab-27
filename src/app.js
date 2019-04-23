import React from 'react';
import { connect } from 'react-redux';
import Counter from './components/counter/counter.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
