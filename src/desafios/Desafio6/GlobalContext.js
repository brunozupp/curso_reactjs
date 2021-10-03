import React from "react";
import requisicao from "./Requisicao";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {

        console.log("AQUIIIIIIIIII")
        getData("https://ranekapi.origamid.dev/json/api/produto/notebook");

    }, []);

    async function getData(url) {
        
        setIsLoading(true);
        
        const json = await requisicao.get(url);
        console.log(json);
        setData(json);

        setIsLoading(false);
    }

    function cleanData() {
        setData(null);
    }

    return <GlobalContext.Provider value={{
        data,
        isLoading,
        cleanData,
        getData
    }}>
        {children}
    </GlobalContext.Provider>
}