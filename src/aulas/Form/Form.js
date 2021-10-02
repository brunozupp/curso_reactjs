import React from 'react'
import Button from './Button'
import Input from './Input'
import InputMelhorado from './InputMelhorado'
import Subtitulo from './Subtitulo'
import Titulo from './Titulo'

const Form = () => {
    return (
        <form>

            <Titulo texto="Meu titulo" />
            <Subtitulo cor="red" texto="Meu subtitulo">
                <p>Moda, Vestuario, Ambiente</p>
            </Subtitulo>

            <label htmlFor="nome">Nome</label>
            <Input />

            <label htmlFor="email">Email</label>
            <Input />

            <InputMelhorado id="telefone" label="Telefone" placeholder="Um placeholder" type="number" />

            <Button />

        </form>
    )
}

export default Form
