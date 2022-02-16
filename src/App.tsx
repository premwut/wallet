import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Tabs from './components/Tabs';
import './App.css';

class Test {
  test: string;
  constructor() {
    this.test = 'test';
  }
}

const App: FunctionComponent = () => {
  const test = new Test();
  console.log(test);
  console.log(test.test);
  const Main = (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
  return (
    <Routes>
      <Route path="/" element={Main} />
      <Route path="/test" element={<Tabs />} />
    </Routes>
  );
}

export default App;
