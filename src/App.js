import './styles/App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Skills } from './components/Skills';
function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Main/>
    </div>
  );
}

export default App;
