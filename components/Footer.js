import styles from "../styles/Footer.module.css"

import { BsGithub, BsLinkedin, BsInstagram  } from "react-icons/bs";

export default function Footer(){
    return (
        <footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <a href="https://www.instagram.com/davimateus1/" target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/davimateus1" target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/davimateusg/" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          <span>Poke</span>Next By: Davi Mateus &copy; 2021
        </p>
      </footer>
    )
}