import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import styles from "./documentation.module.css"
export default () => (
  <div style={{ color: `teal` }}>
       <Header />
        <Container>
   <div className={styles.documentation} >
        <div className={styles.documentationText}>
        <h3>Documentation sur notre produit</h3>
      <p>Drello ce connecte avec l'API REST d'un plugin Wordpress. Comment définir vos tâches? Rien de plus simple! Vous n'avez qu'à les inscrire dans le champ respectif. Vos tâches s'affichent simplement dans la page gestionnaire.</p>
        </div>
    </div>
      
      </Container>
    </div>
  )