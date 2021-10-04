import React from 'react'
import PaginaAcertos from './PaginaAcertos';
import Pergunta from './Pergunta';

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
];

const Desafio9 = () => {

    const [page, setPage] = React.useState(0);
    const [respostas, setRespostas] = React.useState([]);

    if(page >= perguntas.length) {
        return <PaginaAcertos 
            respostasTeste={perguntas.map((pergunta) => pergunta.resposta)}
            respostasUsuario={respostas} 
        />;
    }

    return (
        <div>
            {
                <Pergunta key={perguntas[page].id} data={perguntas[page]} setRespostas={setRespostas} />
            }
            <br />
            <button onClick={() => setPage(page + 1)}>PRÓXIMA</button>
        </div>
    )
}

export default Desafio9
