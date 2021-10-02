import React from 'react'

// React.Fragment ou apenas <> possibilita eu ter códigos que não estejam dentro de um encapsulador, como uma div.
const ComponenteReactFragment = () => {
    // return (
    //     <React.Fragment>
    //         <p>Uma linha</p>
    //         <p>Outra linha</p>
    //     </React.Fragment>
    // )
    return (
        <>
            <p>Uma linha</p>
            <p>Outra linha</p>
        </>
    )
}

export default ComponenteReactFragment
