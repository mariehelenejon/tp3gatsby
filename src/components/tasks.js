import React, {Component} from "react";
import axios from "axios";  

export default class Tasks extends Component {
  state = {
    tasks: [],
  };
    createTable = () => {
      let tasks = this.state.tasks, final =[];
        // Outer loop to create parent
        for (let task of tasks) {
          let children = []
          //Inner loop to create children
            children.push(<label htmlFor="name">Titre</label>)
            children.push(<input type="text" name="name"  defaultValue={task.post_title} />)
            children.push(<label htmlFor="descript">Description</label>)
            children.push(<input type="text" name="descript" defaultValue={task.post_content} />)
            children.push(<input type="button" id={task.ID} key={task.ID} onClick={this.handleChange.bind(this)} value="Modifier" />)
          //Create the parent and add the children
          final.push(<li><form >{children}</form></li>)
        }
        return final
    }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    axios.get('http://localhost/TP2-Task-Manager/wp-json/taskmanagerx/v0/tasks/').then(result => {
      this.setState({ tasks: result.data });
    })
  }

  handleChange(e) {
    axios.get('http://localhost/TP2-Task-Manager/wp-json/taskmanagerx/v0/tasks/update/{task.ID}').then(result => {
      this.setState({ tasks: result.data });
    })
  }

  handleClick(e) {
    this.handleChange();
  }
  
  render() {

    return(
      <ul>
          {this.createTable()}
      </ul>
    )
  }
}
