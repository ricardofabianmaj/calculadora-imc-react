import { useState } from "react";
import Calcular from "./components/calcular";
import "./App.css"

function App() {
  var [Peso, setPeso] = useState('')
  var [Altura, setAltura] = useState('')
  return (
    <div className="App">
      <section>
        <h1>Calculadora de IMC</h1>
        <div className="info">
          <label>Altura:</label>
          <input
            type="number"
            placeholder="Digite sua Altura"
            onChange={(event) => setAltura(event.target.value)}
            />
          <p>Em m (Exemplo: 1.60)</p>
          {(Altura > 3 || Altura < 0) && <p className="invalido">Altura Inválida</p>}
        </div>


        <div className="info">
          <label>Peso:</label>
          <input
            type="number"
            placeholder='Digite seu Peso'
            onChange={(event) => setPeso(event.target.value)}
            />
          <p>Em Kg (Exemplo: 60)</p>
          {(Peso > 300 || Peso < 0) && <p className="invalido">Peso Inválido</p>}
        </div>
        


        {(Peso.length !== 0 && Altura.length !== 0 && Peso < 300 && Peso > 0 && Altura < 3 && Altura > 0) && <Calcular tamanho={Altura} pesagem={Peso}/>}

      </section>
    </div>
  );
}

export default App;
