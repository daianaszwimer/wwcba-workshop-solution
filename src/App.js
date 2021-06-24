import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Header } from "./modules/common/components/Header";
import { SocialMedia } from "./modules/common/components/SocialMedia";
import Home from "./modules/home/Home";
import Profile from "./modules/profile/Profile";
import Blog from "./modules/blog/Blog";
import Lala from "./modules/lala/Lala";

function App() {
  return (
    <Router basename="/wwcba-workshop-solution">
    <div>
      <Header/>
      <div className='content'>
        <SocialMedia/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/lala">
            <Lala/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
