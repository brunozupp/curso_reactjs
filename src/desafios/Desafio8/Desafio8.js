import React from 'react'

const Desafio8 = () => {

    const [cores,setCores] = React.useState([]);

    const coresArray = ['azul', 'vermelho', 'roxo', 'laranja', 'verde'];

    function handleMultiple({target}) {

        if(target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    }

    return (
        <form>
            {
                coresArray.map((cor) => (
                    <label key={cor}>
                        <input type="checkbox" checked={cores.includes(cor)} value={cor} onChange={handleMultiple} />
                        {
                            cor.charAt(0).toUpperCase() + cor.slice(1)
                        }
                    </label>
                ))
            }
            {
                cores.map(cor => cor + " ")
            }
        </form>
    )
}

export default Desafio8
