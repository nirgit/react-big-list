import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BigList from './BigList';

const ASC = 1;
const DESC = -1;
var sortingOrder = ASC;

const mockList = Array(50000).fill(1).map((v, idx) => {
  return {
    id: idx,
    value: Math.floor(Math.random() * 1000000) + 1
  }
})

const sortingFunc = (i1, i2) => {
  if (i1.value > i2.value) return 1;
  if (i1.value < i2.value) return -1;
  return 0;
}
const id = (x, y) => sortingFunc(x, y);
const rev = (x, y) => sortingFunc(y, x);

function sortMockList(items, callback) {
  console.log("sorting...")
  var itemClone = [].concat(items);

  itemClone.sort(sortingOrder === ASC ? id : rev)
  sortingOrder = sortingOrder * -1;
  
  console.log("sorting done")
  callback(itemClone);
}

function App() {
  var [items, setItems] = useState(mockList);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <BigList items={items} onAction={() => sortMockList(items, setItems)} />
    </div>
  );
}

export default App;
