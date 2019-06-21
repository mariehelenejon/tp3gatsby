import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import styles from "./index.module.css"
import task from '../images/task.jpeg'

export default () => (
  
  <div style={{ color: `purple` }}>
  
    <Header />
    <Container>
      <div className={styles.card}>
    <h2>Drello, le gestionnaire de tâches fait pour vous</h2>
    <p>Simplifier le travail d'équipe avec Drello. Suivez le travail de votre équipe en un coup d'oeil, gérez vos projets et tâches en toute facilité et centralisé votre communication en un seul endroit.</p>
    <img src={task} alt="Personne en planification" className={styles.task}/>
    </div>

    </Container>
  </div>
)

