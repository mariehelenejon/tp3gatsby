import React, {Component} from "react";
import axios from "axios";  

export default class Tasks extends Component {
  state = {
    tasks: [],
  };

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
        {this.state.tasks.map(task => <li>{task.post_title}{task.post_content}{task.post_modified}</li>)}
      </ul>
    )
  }
}
