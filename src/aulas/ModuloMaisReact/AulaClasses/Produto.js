import React from "react";

class Produtos extends React.Component {

    constructor(props) {
        super(props);

        this.teste = "teste"; // Propriedade estática

        // Propriedade reativa
        this.state = {
            contar: 0,
        }

        // Vai recriar essas funções para que o this delas façam referência a classe em si
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    // Acontece quando o componente é renderizado. O mesmo que usar o UseEffect com o [] vazio 
    componentDidMount() {
        console.log("Renderizou componentDidMount");
    }

    // Toda vez que renderizar vai ativar essa função novamente
    componentDidUpdate() {
        console.log("Renderizou componentDidUpdate");
        document.title = this.state.contar;
    }

    // Acontece quando o componente vai sumir da tela, milesimos de segundos antes dele sair da tela
    componentWillUnmount() {
        console.log("Vai sumir da tela componentWillUnmount");
    }

    handleClick1() {
        this.setState({...this.state, contar: this.state.contar + 1});
    }

    handleClick2() {
        this.setState((state) => ({...state, contar: state.contar + 1}));
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.teste}</h3>
                <div>
                    <button onClick={() => this.setState({...this.state, contar: this.state.contar + 1})}>Contar1</button>
                    <button onClick={() => this.setState((state) => ({...state, contar: state.contar + 1}))}>Contar2</button>
                    <button onClick={this.handleClick1}>Contar3</button>
                    <button onClick={this.handleClick2}>Contar4</button>
                    <h2>{this.state.contar}</h2>
                </div>
            </div>
        )
    }
}

export default Produtos;