import Head from "next/head";
import { BsWhatsapp, BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <>
      <Head>
        <link rel="shortcurt icon" href="/images/favicon.ico" />
        <title>PokeNext: Contato</title>
      </Head>
      <section className={styles.contact_container}>
        <h1>Contato</h1>
        <p>
          <SiGmail />
          <a href="mailto:davimateusga@gmail.com"> davimateusga@gmail.com </a>
        </p>
        <p>
          <BsWhatsapp />
          <a
            href="https://api.whatsapp.com/send?phone=5587988476864&text=Enviar%20mensagem%20para%20Davi%20Mateus"
            target="_blank"
            rel="noreferrer"
          >
            (87) 98847-6864
          </a>
        </p>
        <p>
          <BsInstagram />
          <a
            href="https://www.instagram.com/davimateus1"
            target="_blank"
            rel="noreferrer"
          >
            
            @davimateus1
          </a>
        </p>
        <p>
          <BsLinkedin />
          <a
            href="https://www.linkedin.com/in/davimateusg/"
            target="_blank"
            rel="noreferrer"
          >
            
            /davimateusg
          </a>
        </p>
      </section>
    </>
  );
}

export default Contact;
