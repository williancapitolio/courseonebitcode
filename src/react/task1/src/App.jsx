import reactLogo from './assets/react.svg'
import './App.css'

export default function App() {
  return (
    <>
      <main className='main'>
        <img src={reactLogo} alt='Logo' className='logoImg' />
        <h1>React</h1>
        <p>A biblioteca para interfaces de usuários web e nativas.</p>
        <button>Aprenda React</button>
        <button>Referência da API</button>
        <hr />

        <h2>Crie interfaces de usuário de componentes</h2>
        <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p>
        <hr />

        <h2>Escreva componentes com código e marcação</h2>
        <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React.</p>
        <hr />

        <h2>Próximos passos</h2>
        <ul>
          <li>Uso de dados dinâmicos no JSX</li>
          <li>Criação de novos componentes</li>
          <li>Estilizaçao de componentes</li>
          <li>Uso de props e children</li>
          <li>Uso de eventos do JavaScript</li>
        </ul>
      </main>
    </>
  )
}
