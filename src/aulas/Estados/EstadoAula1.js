import React from 'react'

const EstadoAula1 = () => {

    const [ativo,setAtivo] = React.useState(false);

    const [dados, setDados] = React.useState({nome: "Bruno", idade: 22});

    return (
        <div>
            <button onClick={() => setAtivo(!ativo)}>{ativo ? "Ativo" : "Inativo"}</button>
            <form action="">
                <input type="text" value={dados.nome} />
                <input type="text" value={dados.idade} />
            </form>
            <button onClick={() => setDados({nome: "Bruno", idade: 22})}>Bruno</button>
            <button onClick={() => setDados({nome: "Ana", idade: 15})}>Ana</button>
        </div>
    )
}

export default EstadoAula1
