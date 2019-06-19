import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"
/* import logo from './check-list.svg' */


export default () => (
    <div className={styles.header} style={{ color: `teal` }}>
      <div className={styles.logoTitle}>
     <img src={'check-list.svg'} alt="Logo" className={styles.logo}/> 
     <h1 className={styles.maintitle}>Drello</h1>
     </div>
     <div>
      <Link to="/">Accueil</Link>
      <Link to="/gestionnaire/">Gestionnaire</Link>
      <Link to="/presentation/">Présentation</Link>
      <Link to="/documentation/">Documentation</Link>
      <Link to="/contact/">Nous joindre</Link>
      </div>
    </div>
  )



