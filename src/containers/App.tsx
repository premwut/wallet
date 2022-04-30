import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import Tabs from '../components/Tabs';
import './App.css';
import BalanceDetails from '../components/BalanceDetails';

const App: FunctionComponent = (props) => {
  const Main = (
    <div className="App">
      <header className="App-header">
        <Tabs />
      </header>
      <section>
        <BalanceDetails {...props} />
      </section>
    </div>
  );
  
  return (
    <Routes>
      <Route path="/" element={Main} />
      <Route path="/test" element={<Tabs />} />
    </Routes>
  );
}

const mapStateToProps = (state: any) => {
  return state;
}

export default connect(mapStateToProps)(App);
