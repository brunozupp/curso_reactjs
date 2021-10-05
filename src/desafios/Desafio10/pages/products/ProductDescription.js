import React from 'react'
import { useParams } from 'react-router'
import requisicao from '../../utils/Requisicao'
import Loading from '../../components/Loading/Loading.js'
import styles from './ProductDescription.module.css'
import Head from '../../components/Head/Head'

const ProductDescription = () => {

    const params = useParams();

    const [data,setData] = React.useState(null);
    const [loading,setLoading] = React.useState(false);

    React.useEffect(() => {

        getData();

    }, []);

    async function getData() {
        setLoading(true);

        const json = await requisicao.get(`https://ranekapi.origamid.dev/json/api/produto/${params.product}`);
        setData(json);

        setLoading(false);
    }

    if(loading) return <Loading />

    if(data === null) return <h3>Nenhuma informação disponível</h3>

    return (
        <div className={styles.container}>
            <Head title={"Produto | " + data.nome} description="Tela de produto especifico" />
            <img className={styles.imageProduct} src={data.fotos[0].src} />
            <div className={styles.cardInformation}>
                <h3 className={styles.productName}>{data.nome}</h3>
                <p className={styles.productPrice}>R$ {data.preco}</p>
                <p className={styles.productDescription}>{data.descricao}</p>
            </div>
        </div>
    )
}

export default ProductDescription
