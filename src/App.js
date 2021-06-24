import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IndexPageComponent from './components/indexcomponent';
import reviwerdash from './components/ReviwerDashcomponent';
import reviwersettings from './components/reviwersettingcomponent';
import reviwerchangepassword from './components/changePasswordcomponent';
import allresearch from './components/allresearch';
import newresearch from './components/newResearch';
import signup from './components/UserSignUpComponent';

function App() {
  return (
    <div>
      
      <Router>
          <Switch>
          <Route path = "/" exact component = {IndexPageComponent}></Route>
          <Route path = "/reviwer/:id" component = {reviwerdash}></Route>
          <Route path = "/reviwersettings/:id" component = {reviwersettings}></Route>
          <Route path = "/reviwerchangepassword/:id" component = {reviwerchangepassword}></Route>
          <Route path = "/allresearch" component = {allresearch}></Route>
          <Route path = "/newresearch"  component = {newresearch}></Route>
          <Route path = "/signup"  component = {signup}></Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
