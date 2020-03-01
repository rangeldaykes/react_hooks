import React, { useEffect, useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([

  ]);

  const [input, setInput] = useState('');

  // Component DID Mount
  // os colchetes estão vazios indicando q
  // que será executado toda vez que o componente
  // for montado
  useEffect(() => {

    const tarefasStorage = localStorage.getItem('tarefas');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }

    // component WILL unMount executa esta
    // funcao quando sair do  Component DID Mount
    return () => { };

  }, []);

  // Component DID update - fica olhando para o tarefas
  // que esta entro os colchetes
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}> {tarefa} </li>
        ))}
      </ul>

      <input type="text" value={input} onChange={e => { setInput(e.target.value) }}></input>
      <button type="button" onClick={handleAdd}> Adicionar </button>
    </div>
  );
}

export default App;
