import React from 'react'

const ModuloFormularioCheckbox2 = () => {

    const [cores, setCores] = React.useState(["vermelho","laranja"]);

    function handleMultiple({target}) {

        if(target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    }

    function checkColor(color) {
        return cores.includes(color);
    }

    return (
        <form>
            <label>
                <input type="checkbox" value="azul" 
                    checked={cores.includes("azul")} onChange={handleMultiple} />
                Azul
            </label>
            <label>
                <input type="checkbox" value="vermelho" 
                    checked={checkColor("vermelho")} onChange={handleMultiple} />
                Vermelho
            </label>
            <label>
                <input type="checkbox" value="verde" 
                    checked={checkColor("verde")} onChange={handleMultiple} />
                Verde
            </label>
            <label>
                <input type="checkbox" value="laranja" 
                    checked={checkColor("laranja")} onChange={handleMultiple} />
                Laranja
            </label>
            {
                cores.map((cor) => cor + " ")
            }
        </form>
    )
}

export default ModuloFormularioCheckbox2
