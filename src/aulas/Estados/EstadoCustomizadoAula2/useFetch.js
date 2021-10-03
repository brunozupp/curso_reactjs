import React from 'react'

const set = new Set();

const useFetch = () => {

    const [data,setData] = React.useState(null);
    const [error,setError] = React.useState(null);
    const [loading,setLoading] = React.useState(false);

    const request = React.useCallback(async (url, options) => {

        setError(null);
        
        setLoading(true);

        let response;
        let json;
        
        try {
            response = await fetch(url,options);

            if(response.status != 200) {
                throw new Error("O código não é o 200");
            }

            json = await response.json();

        } catch (error) {
            json = null;
            setError("Erro na api: " + error.message);
        } finally {
            setLoading(false);
            setData(json);
            return {response, json}
        }
    }, [])

    // Mostrando que por conta que tem vários estados mudando, a função request é recriada varias vezes. Por isso tem que usar o useCallBack
    // assim tornando ela única
    set.add(request);
    console.log(set);

    return {
        data,
        error,
        loading,
        request
    };
}

export default useFetch
