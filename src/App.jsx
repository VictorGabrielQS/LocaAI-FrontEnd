import Assistente from './components/Assistente';
import './App.css'

function App() {

  return (
    <div>

      <div className='section-header' >
        <div className="icon-profile">
          <h1>C</h1>
        </div>
        <h1>ChatLocaAI</h1>
        <p className='section-header-txt2'>Um assistente virtual inteligente que oferece atendimento automatizado e interações naturais, respondendo dúvidas, detectando intenções e gerando cotações de locação de forma ágil e precisa.</p>
      </div>

      <div className='section-chat'>
        <Assistente />
      </div>



    </div>
  );
}

export default App
