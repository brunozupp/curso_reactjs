import React from 'react'
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Essa é a página de Contato" />
                <title>Dog | Contato</title>
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous"></link> */}
            </Helmet>
            <h1>Entre em contato conosco</h1>
        </div>
    )
}

export default Contact
