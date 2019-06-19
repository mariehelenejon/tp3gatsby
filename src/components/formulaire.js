import React from "react"
import styles from "./formulaire.module.css"
export default class Formulaire extends React.Component {
    state = {
      name: "",
      email: "",
      message: ""
    }
  
    handleInputChange = event => {
      const target = event.target
      const value = target.value
      const name = target.name
  
      this.setState({
        [name]: value,
      })
    }
    render() {
      return (
        <form method="POST" action="https://formspree.io/maudelarochee@gmail.com">
        <label className={styles.sectionForm}>
            Name
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required/>
        </label>            
        <label className={styles.sectionForm}>
            Email
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required/>
        </label>            
        <label className={styles.sectionForm}>
            Message
            <textarea rows="7" name="message" value={this.state.message} onChange={this.handleInputChange} required></textarea>
        </label>            
        <button type="submit">Submit</button>
      </form>
    );
    }
  }