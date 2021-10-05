import React from 'react'
import Header from './Header'

const AulaReactMemo = () => {
    
    const [contar,setContar] = React.useState(0);
    
    return (
        <div>
            <Header />
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}

export default AulaReactMemo
