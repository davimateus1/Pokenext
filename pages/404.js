import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Error.module.css";

import fainted from "../public/images/fainted.png";
import Head from "next/head";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <link rel="shortcurt icon" href="/images/favicon.ico" />
        <title>Pokenext: Error 404</title>
      </Head>
      <div className={styles.error_container}>
        <h1 className={styles.title}>
          Erro <span>404</span>
        </h1>
        <h3>Essa página não existe :(</h3>
        <Image src={fainted} className={styles.fainted} width="280" height="200" alt="fainted image" />
        <Link href="/">
          <a className={styles.btn}>Página Inicial</a>
        </Link>
      </div>
    </>
  );
}
