import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import styles from "./index.module.css"

export default () => (
  
  <div style={{ color: `purple` }}>
  
    <Header />
    <Container>
      <div className={styles.card}>
    <h2>Gestionnaire de tâches</h2>
    <p>Simplifier le travail d'équipe avec Drello. Suivez le travail de votre équipe en un coup d'oeil, gérez vos projets et tâches en toute facilité et centralisé votre communication en un seul endroit.</p>
    </div>
    <div className={styles.card}>
    <h2>Collaborez avec toutes les équipes</h2>
    <p>Que ce soit pour votre travail, pour un projet parallèle ou même pour vos prochaines vacances en famille, Trello aide votre équipe à rester organisée.</p>
    </div>
    </Container>
  </div>
)

