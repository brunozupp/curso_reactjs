import React from "react";
import ComponenteReactFragment from "./ComponenteReactFragment";

const App = () => {

    const nome = "Bruno"

    const estiloH1 = {
        color: 'blue',
        fontSize: '20px',
        fontFamily: 'Helvetica'
    }

    const frases = {
        motivadora: "Hoje vai ser top",
        deprimente: "Estou triste"
    }

    return <div>
        <h1 style={estiloH1}>Meu App</h1>
        <p style={{color: "red"}}>Um subtitulo aqui</p>
        <br />
        <a className="link" href="#" title="Um link para clicar">Origamid</a>
        <br />
        <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />
        </form>
        <ComponenteReactFragment />
        <p>{nome}</p>
        <p>{frases.deprimente}</p>
        <p>{frases.motivadora}</p>
    </div>
}

export default App;