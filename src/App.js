import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          <li className='opcao'><p>CATEGORIAS</p></li>
          <li className='opcao'><p>MINHA ESTANTE</p></li>
          <li className='opcao'><p>FAVORITOS</p></li>
        </ul>
      </header>
    </div>
  );
}

export default App
