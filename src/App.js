import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IndexPageComponent from './components/indexcomponent';
import reviwerdash from './components/ReviwerDashcomponent';
import reviwersettings from './components/reviwersettingcomponent';
import reviwerchangepassword from './components/changePasswordcomponent';

function App() {
  return (
    <div>
      <Router>
          <Switch>
          <Route path = "/" exact component = {IndexPageComponent}></Route>
          <Route path = "/reviwer/:id" component = {reviwerdash}></Route>
          <Route path = "/reviwersettings" component = {reviwersettings}></Route>
          <Route path = "/reviwerchangepassword" component = {reviwerchangepassword}></Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
