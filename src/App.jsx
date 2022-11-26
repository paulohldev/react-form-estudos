import React from 'react';

const App = () => {
  const [dados, setDados] = React.useState({
    nome: '',
    sobrenome: '',
    idade: '',
    universitario: '',
    sexo: '',
    cidade: '',
    messagem: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(dados);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setDados({ ...dados, [id]: value });
  }

  function handleRadio({ target }) {
    setDados({ ...dados, universitario: target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={dados.nome} onChange={handleChange} />
      <label htmlFor="sobrenome">Sobrenome</label>
      <input
        type="text"
        id="sobrenome"
        value={dados.sobrenome}
        onChange={handleChange}
      />
      <label htmlFor="idade">Idade</label>
      <input
        type="text"
        id="idade"
        value={dados.idade}
        onChange={handleChange}
      />

      <div>
        <label>Sexo</label>
        <label>
          <input
            type="radio"
            value="masculino"
            checked={dados.sexo === 'masculino'}
            onChange={({ target }) =>
              setDados({ ...dados, sexo: target.value })
            }
          />
          Masculino
        </label>
        <label>
          <input
            type="radio"
            value="feminino"
            checked={dados.sexo === 'feminino'}
            onChange={({ target }) =>
              setDados({ ...dados, sexo: target.value })
            }
          />
          Feminino
        </label>
      </div>

      <div>
        <label>Universitário?</label>
        <label>
          <input
            type="radio"
            value="sim"
            checked={dados.universitario === 'sim'}
            onChange={handleRadio}
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            value="nao"
            checked={dados.universitario === 'nao'}
            onChange={handleRadio}
          />
          Não
        </label>
      </div>
      <label>Cidade</label>
      <select
        value={dados.cidade}
        onChange={({ target }) => setDados({ ...dados, cidade: target.value })}
      >
        <option value="" disabled>
          Selecione
        </option>
        <option value="jaboatão">Jaboatão</option>
        <option value="recife">Recife</option>
        <option value="cabo">Cabo</option>
        <option value="olinda">Olinda</option>
      </select>
      <textarea
        rows="5"
        value={dados.messagem}
        onChange={({ target }) =>
          setDados({ ...dados, messagem: target.value })
        }
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
