import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import Header from "../components/header"
import imgVincent from '../images/vincent.jpg'
import imgMaude from '../images/maude.jpg'
import imgMarie from '../images/marieh.jpg'
import imgPlanification from '../images/planification.jpg'






export default () => (
  <div>
  <Header />
  
    
<div className={styles.descriptionProduit} >
      <img src={imgPlanification} alt="Photo d'un homme perdu dans sa planification" className={styles.photoPlanification}/> 
        <div className={styles.produitText}>
        <h3>Qu'est ce que c'est Drello?</h3>
        <p> Drello c'est ce qui manque à votre vie!</p>
        <p> Simplifier le travail d'équipe avec Drello. Suivez le travail de votre équipe en un coup d'oeil, gérez vos projets et tâches en toute facilité et centralisé votre communication en un seul endroit. </p>
        <p>Que ce soit pour votre travail, pour un projet parallèle ou même pour vos prochaines vacances en famille, Drello aide votre équipe à rester organisée.</p>
        </div>
    </div>


< Container >

    <h2>Qui sommes-nous?</h2>

    <div className={styles.equipe} >
    <div className={styles.widthImg}>
      <img src={imgVincent} alt="Photo de Vincent Desrosiers" className={styles.photo}/> 
    </div>
      
        <div className= {styles.equipeInfo}>
        <h3>Vincent Desrosiers</h3>
        <p> Je suis quelqu’ un qui est passionné pas les nouvelles technologies web. Je 
        suis à l’ aise autant avec le frontend que le backend.Les défis sont pour moi un aspect très
          important de ce métier. </p>
        </div>
    </div>

    <div className={styles.equipe} >
    <div className={styles.widthImg}>
      <img src={imgMaude} alt="Photo de Maude Laroche" className={styles.photo}/> 
      </div>
        <div className= {styles.equipeInfo}>
        <h3>Maude Laroche</h3>
        < p > J’ aime relever les défis et être à l 'affût des meilleures technologies et frameworks web afin de mettre sur pied le meilleur des sites web. Je maitrise différents langages informatiques (HTML, CSS, SASS, PHP, JAVASCRIPT, JQUERY, etc.)</p>
        </div>
    </div>

    <div className={styles.equipe} >
    <div className={styles.widthImg}>
      <img src={imgMarie} alt="Photo de Marie-Hélène Joncas" className={styles.photo}/> 
    </div>
        <div className= {styles.equipeInfo}>
        <h3>Marie-Hélène Joncas</h3>
        <p> Je suis une développeuse front end qui adore le design graphique!Je maîtrise de nombreux langages et frameworks qui me permettent aujourd’ hui de réaliser tous les projets possibles. </p>
        </div>
    </div>
  </Container>
  </div>
)