import React from 'react'

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};
  
const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const Desafio1 = () => {

    const dados = mario;

    // function getTotalValue(compras) {
    //     const valores = compras.map(compra => Number(compra.preco.replace("R$ ", "")));
    //     const soma = valores.reduce((previous,current) => previous + current, 0);
    //     return soma;
    // }

    const valorTotal = dados.compras
        .map(compra => Number(compra.preco.replace("R$ ", "")))
        .reduce((previous,current) => previous + current, 0);

    return (
        <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: <span style={{color: dados.ativa ? "green" : "red"}}>{dados.ativa ? "Ativa" : "Inativa"}</span></p>
            <p>Total Gasto: R$ {valorTotal}</p>
            {
                valorTotal > 10000 && <p>Você está gastando muito</p>
            }
        </div>
    )
}

export default Desafio1
