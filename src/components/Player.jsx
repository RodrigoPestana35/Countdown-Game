import { useState } from 'react';

export default function Player() {
  const [name, setName] = useState('unknown entity');
  const [inputName, setInputName] = useState('');

  function handleChange(e) {
    setInputName(e.target.value);
  }

  function handleClick() {
    setName(inputName);
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" onChange={handleChange} value={inputName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
