// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";






function App() {
  
 
  return (
    <Router basename="/chathome/">

      
        {/* <div className="App">{!state.isAuthenticated ? <Login/> : <Home/>}</div> */}
        <Switch>
          <h1>frfr</h1>
          <Route exact path="/">
            <Home /> 
          </Route>
        
        </Switch>
     
    </Router>
  );
}
export default App;

