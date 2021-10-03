import React from "react";

const useLocalStorage = (key,initial) => {

    const [state, setState] = React.useState(() => {
        const local = window.localStorage.getItem(key);
        return local ? local : initial;
    });

    // Toda vez que mudar o valor 'state', vou salvar no localStorage
    React.useEffect(() => {
        window.localStorage.setItem(key,state);
    }, [state, key]);

    return [state, setState];
}

export default useLocalStorage;