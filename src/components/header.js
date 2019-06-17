import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"
/* import logo from "./check-list.svg" */

export default () => (
    <div className={styles.header} style={{ color: `teal` }}>
      <div className={logo}></div>
      <Link to="/">Accueil</Link>
      <Link to="/gestionnaire/">gestionnaire</Link>
      <Link to="/presentation/">Présentation</Link>
      <Link to="/documentation/">Documentation</Link>
      <Link to="/contact/">Nous joindre</Link>
  {/*     <h2>{props.headerText}</h2> */}
      <p>Send us a message!</p>
    </div>
  )



