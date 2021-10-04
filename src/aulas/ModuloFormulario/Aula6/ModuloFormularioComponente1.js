import React from 'react'
import Checkbox from '../ComponentesForm/Checkbox';
import Input from '../ComponentesForm/Input'
import Radio from '../ComponentesForm/Radio';
import Select from '../ComponentesForm/Select';

const ModuloFormularioComponente1 = () => {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [cor, setCores] = React.useState('');
    const [carro, setCarro] = React.useState('');
    const [linguagens,setLinguagens] = React.useState(['ruby']);
    const [termos, setTermos] = React.useState([]);

    if(termos.length > 0) {
        console.log("Aceitou os termos");
    }

    return (
        <form>
            <Input label="Nome" id="nome" value={nome} setValue={setNome} required />
            <Input label="Email" id="email" value={email} setValue={setEmail} />
            <Select options={["vermelho","verde","azul","amarelo"]} label="Cores" id="cor" value={cor} setValue={setCores} />
            <br />
            <Radio label="Carros" options={['corsa', 'gol', 'sedan']} value={carro} setValue={setCarro} />
            <br />
            <Checkbox label="Linguagens de programação" options={['java', 'c#', 'php','ruby','c','js']} value={linguagens} setValue={setLinguagens} />
            <br />
            <Checkbox label="Termos de uso" options={['Li e aceito os termos']} value={termos} setValue={setTermos} />
            <br />
            <button>ENVIAR</button>
        </form>
    )
}

export default ModuloFormularioComponente1
