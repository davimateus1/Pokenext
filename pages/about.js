import Image from "next/image";
import Head from "next/head";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <link rel="shortcurt icon" href="/images/favicon.ico" />
        <title>PokeNext: Sobre</title>
      </Head>
      <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>
          O Pokenext é inspirado na Pokédex, nessa plataforma temos a listagem
          de vários pokémons e seus principais dados, esses dados são resgatados
          através da PokeAPI, que é uma API de pokémons que tem todos eles,
          desde a primeira geração até a última, e também, contém diversas
          informações dos pokémons, tais como: vida, força, tipos, peso, altura
          e entre diversos outros. Esta aplicação foi construida no intuito de
          praticar e conhecer melhor o famoso Framework de React, o NextJS.
          Sinta-se a vontade para explorar todos os pokémons da plataforma!
        </p>
        <Image
          src="/images/metagross.gif"
          width="300"
          height="300"
          alt="Metagross"
        />
      </div>
    </>
  );
}
