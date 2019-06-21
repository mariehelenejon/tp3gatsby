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
            children.push(<input type="text" name="name" key={task.ID} defaultValue={task.post_title} onChange={this.handleChangeTitle} />)
            children.push(<label htmlFor="descript">Description</label>)
            children.push(<input type="text" name="descript" defaultValue={task.post_content} onChange={this.handleChangeDescript} />)
            children.push(<input type="submit" key={task.ID} value="Modifier" />)
          //Create the parent and add the children
          final.push(<ul>{children}</ul>)
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
  
  render() {

    return(
      <ul>
      <form> 
          
          {this.createTable()}
            
      </form>
      </ul>
    )
  }
}
