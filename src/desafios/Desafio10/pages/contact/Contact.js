import React from 'react'
import styles from './Contact.module.css'
import photo from '../../images/contato.jpg';
import Head from '../../components/Head/Head';

const contacts = ["brunozuppnoveli@gmail.com", "1788547-6925", "Rua das araras, n° 4787, Bairro dos dinossauros"];

const Contact = () => {
    return (
        <div className={styles.container + " animeLeft"}>
            <Head title="Contato" description="Tela de contato" />
            <img src={photo} className={styles.imageContact} />
            <div className={styles.cardContact}>
                <h1 className={styles.titleCard}>Entre em contato</h1>
                {
                    contacts.map((contact) => (
                        <div className={styles.containerItemContact}>
                            <span className={styles.lineBottom}></span>
                            <span key={contact} className={styles.itemContact}>{contact}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Contact
