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
    var divStyle = {
      color: 'black',
      width: '100%',
    };
    return(
      <ul>
      <form> 
          <li>
          <label htmlFor="text">Titre</label>
            <input style={divStyle} type="text" name="name" defaultValue={ this.state.tasks.map(task => <text>{task}</text>)} />
            <label htmlFor="descript">Description</label>
            <input style={divStyle} type="text" name="descript" defaultValue={this.state.tasks.map(task => <text>{task.post_content}</text>)} />
            <input type="submit" value="Modifier" />
          </li>
      </form>
      </ul>
    )
  }
}
