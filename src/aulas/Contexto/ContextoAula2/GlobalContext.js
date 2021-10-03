import React from "react";

export const GlobalContext = React.createContext();

// Criando um meio mais fácil de acesso ao .Provider
export const GlobalStorage = ({children}) => {

    const [contar,setContar] = React.useState(0);

    // As vezes para omitir a função de atualização pode usar uma técnica dessa, desse jeito posso ter as validações direto aqui
    function adicionarUm() {
        setContar((old) => old + 1);
    }

    return <GlobalContext.Provider value={{
        nome: "Bruno",
        contar,
        setContar,
        adicionarUm
    }}>{children}</GlobalContext.Provider>
}