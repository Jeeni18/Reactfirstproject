import React, { useState } from 'react';

const Add = () => {
  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([]);

  const handleAddWord = () => {
    if (word.trim() !== '') {
      setWordList(prevList => [prevList, word]);
      setWord('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter synonym "
      />
       <button onClick={handleAddWord}>Add</button>
      <ul>
        {wordList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
