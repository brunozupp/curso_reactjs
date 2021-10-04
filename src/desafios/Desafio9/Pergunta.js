import React from 'react'

const Pergunta = ({data, setRespostas}) => {
    return (
        <fieldset>
            <legend>{data.pergunta}</legend>
            {
                data.options.map((opcao) => (
                    <label key={opcao}>
                        <input type="radio" value={opcao} name={data.id} onChange={({target}) => setRespostas((old) => [...old,target.value])} />
                        {opcao}
                    </label>
                ))
            }
        </fieldset>
    )
}

export default Pergunta
