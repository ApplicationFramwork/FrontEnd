import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IndexPageComponent from './components/indexcomponent';
import reviwerdash from './components/ReviwerDashcomponent';
import reviwerachive from './components/achivementcomponent';
import reviwersettings from './components/reviwersettingcomponent';
import reviwerchangepassword from './components/changePasswordcomponent';

function App() {
  return (
    <div>
      <Router>
          <Switch>
          <Route path = "/" exact component = {IndexPageComponent}></Route>
          <Route path = "/reviwer/:id" component = {reviwerdash}></Route>
          <Route path = "/reviwerachivement" component = {reviwerachive}></Route>
          <Route path = "/reviwersettings/:id" component = {reviwersettings}></Route>
          <Route path = "/reviwerchangepassword" component = {reviwerchangepassword}></Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
