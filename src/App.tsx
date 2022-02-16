import { FunctionComponent } from 'react';

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
  return (
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
}

export default App;
