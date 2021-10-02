import React from 'react'

const EstadoRefAula = () => {

    const video = React.useRef();

    // Vai ser undefined, pois só inicializa após renderizar o código. Por isso pode-se usar um callback ou useEffect (que é ativado após a renderização inicial)
    console.log(video.current);

    React.useEffect(() => {
        console.log(video.current);
    }, []);

    return (
        <div ref={video}>
            Teste
        </div>
    )
}

export default EstadoRefAula
