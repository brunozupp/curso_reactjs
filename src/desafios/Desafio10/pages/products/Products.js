import React from 'react'
import requisicao from '../../utils/Requisicao'
import Loading from '../../components/Loading/Loading.js'
import CardProduct from '../../components/CardProduct/CardProduct';
import styles from './Product.module.css';
import Head from '../../components/Head/Head';

const Products = () => {

    const [data,setData] = React.useState(null);
    const [loading,setLoading] = React.useState(false);

    React.useEffect(() => {

        getData();

    }, []);

    async function getData() {
        setLoading(true);

        const json = await requisicao.get("https://ranekapi.origamid.dev/json/api/produto");
        setData(json);

        setLoading(false);
    }

    if(loading) return <Loading />

    if(data === null) return <h3>Nenhuma informação disponível</h3>

    return (
        <div className={styles.container}>
            <Head title="Produtos" description="Tela de Produtos" />
            {
                data.map((item, index) => <CardProduct key={index} product={item} />)
            }
        </div>
    )
}

export default Products
