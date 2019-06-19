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
      console.log(result);
      this.setState({ tasks: result.data });
    }).catch(error => {
      this.setState({ loading: false, error })
    })
    
  }
  render() 
    {
      return(
      <ul>
        {this.state.tasks.map(task => <li>task.post_title</li>)}
      </ul>
      )
    }
}
