import React, { useState } from 'react';
import "./Compare1.css"

const App = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [uniqueItemsA, setUniqueItemsA] = useState([]);
  const [uniqueItemsB, setUniqueItemsB] = useState([]);
  const [matchingItems, setMatchingItems] = useState([]);

  const handleCompute = () => {
    const itemsA = listA.split('');
    const itemsB = listB.split('');

    const uniqueA = itemsA.filter((item) => !itemsB.includes(item));
    const uniqueB = itemsB.filter((item) => !itemsA.includes(item));
    const matching = itemsA.filter((item) => itemsB.includes(item));

    setUniqueItemsA(uniqueA);
    setUniqueItemsB(uniqueB);
    setMatchingItems(matching);
  };

  return (
    <div className="app">
      
      <h1>List Comparison</h1>
      <div className="input-container">
        <textarea
          className="list-input1"
          placeholder="Enter items for list A"
          value={listA}
          onChange={(e) => setListA(e.target.value)}
        />
        <textarea
          className="list-input"
          placeholder="Enter items for list B"
          value={listB}
          onChange={(e) => setListB(e.target.value)}
        />
        
        <button className="compute-button" onClick={handleCompute}>
          Compute
        </button>
       

      </div>
      <div className="result-container">
        <div className="result-section">
          <h2>Items present only in A:</h2>
          <p className='para'>{uniqueItemsA.join('')}</p>
        </div>
        <div className="result-section">
          <h2>Items present only in B:</h2>
          <p className='para'>{uniqueItemsB.join('')}</p>
        </div>
        <div className="result-section">
          <h2>Items present in both A and B:</h2>
          <p className='para'>{matchingItems.join('')}</p>
        </div>
        <div className="result-section">
          <h2>Items combining both A and B (unique):</h2>
          <p className='para'>{[...new Set([...listA, ...listB])].join('')}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
