import React from 'react'
// import Contato from './Contato'
const Contato = React.lazy(() => import('./Contato.js'))

const AulaLazySuspense = () => {

    const [ativo, setAtivo] = React.useState(false);

    return (
        <div>
            {ativo && (
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <Contato />
                </React.Suspense>
            )}
            <button onClick={() => setAtivo(!ativo)}>Click</button>
        </div>
    )
}

export default AulaLazySuspense
