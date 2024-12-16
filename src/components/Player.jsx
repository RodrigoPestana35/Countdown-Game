import { useState } from 'react';

export default function Player() {
  const [name, setName] = useState('unknown entity');
  const [inputName, setInputName] = useState('');

  function handleChange(e) {
    setInputName(e.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" onChange={handleChange}/>
        <button onClick={() => setName(inputName)}>Set Name</button>
      </p>
    </section>
  );
}
