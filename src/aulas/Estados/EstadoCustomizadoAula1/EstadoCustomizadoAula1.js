import React from 'react'
import useLocalStorage from './useLocalStorage';

const EstadoCustomizadoAula1 = () => {

    const [produto,setProduto] = useLocalStorage('produto', '');

    return (
        <div>
            <button onClick={() => setProduto("smartphone")}>Smartphone</button>
            <button onClick={() => setProduto("notebook")}>Notebook</button>
        </div>
    )
}

export default EstadoCustomizadoAula1
