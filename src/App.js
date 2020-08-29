import React from 'react';
import Issuer from "./components/Issuer"
import Verifier from "./components/Verifier"
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 
import { Button ,Typography,AppBar,Toolbar} from '@material-ui/core';
 


function App() {

  return (
    <Router>
      <AppBar position="static">
            <Toolbar>
      <div id ="header">
      <Link to="/issuer" id="il">
      <Button >
      <Typography variant="title" color="inherit">
         Issuer
      </Typography>
      </Button>
      </Link>


      <Link to="/verifier" id="iv">
      <Button >
      <Typography variant="title" color="inherit">
         Verifier
         </Typography>
         </Button>
      </Link>
      </div>
      </Toolbar>
        </AppBar>
      <br></br><br></br><br></br>
    
     
      <Switch>
      <Route exact path='/issuer' component={Issuer}></Route> 
      <Route exact path='/verifier' component={Verifier}></Route> 
      </Switch>
     
    </Router>
  );
}

export default App;
