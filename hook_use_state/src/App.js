import React, { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);

  const [input, setInput] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('');
  }

  const [nome, setNome] = useState("josé")

  return (
    <div>
      <h1>Hooks</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={(e) =>
        setInput(e.target.value)}></input>

      <button type="button" onClick={handleAdd}>
        Adicionar
          </button>

      <h3>{nome}</h3>


    </div>
  );
}

export default App;
