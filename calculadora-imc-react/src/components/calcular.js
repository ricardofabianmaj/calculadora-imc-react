import "./Calcular.css"

const Calcular = (props) => {
    var Altura = props.tamanho
    var Peso = props.pesagem

    var IMC = Peso / (Altura * Altura)
    return (
        <div className="Resultado">
            <p>O valor abaixo está sendo calculado a partir da altura de {Altura}m e do peso de {Peso}kg </p>
            <h2 id="imc">IMC: {IMC.toFixed(2)}</h2>

            {(IMC < 18.5) && <p className="estado">Estado: Magreza</p>}
            {(IMC > 18.5 && IMC <= 24.9) && <p className="estado">Estado: Normal</p>}
            {(IMC > 24.9 && IMC <= 29.9) && <p className="estado">Estado: Sobrepeso</p>}
            {(IMC > 29.9 && IMC <= 34.9) && <p className="estado">Estado: Obesidade (Grau I)</p>}
            {(IMC > 34.9 && IMC <= 39.9) && <p className="estado">Estado: Obesidade (Grau II)</p>}
            {(IMC > 40) && <p className="estado">Estado: Obesidade (Grau III)</p>}
        </div>
    )
}
export default Calcular;