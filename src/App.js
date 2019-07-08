import React ,{Component}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends Component{

  render(){
    return(
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Router>
    )
  }
}

export default App;
