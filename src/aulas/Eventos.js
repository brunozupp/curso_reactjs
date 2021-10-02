import React from 'react'

const Eventos = () => {
    
    function handleClick1(event) {
        console.log(event.target.innerText)
    }

    function handleClick2({target}) {
        console.log(target.innerText)
    }

    function handleScroll(event) {
        console.log(event);
    }

    window.addEventListener("scroll", handleScroll);
    
    return (
        <div style={{height: '200vh'}}>
            <button onClick={handleClick1}>Clicar 1</button>
            <button onClick={handleClick2}>Clicar 2</button>
            <button onClick={(event) => console.log(event.target.innerText)}>Clicar 3</button>
        </div>
    )
}

export default Eventos
