import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import LogoSection from './Components/LogoSection/LogoSection';
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      <Services></Services>
      <Features></Features>
      <LogoSection></LogoSection>
      <Login></Login>
      <Footer></Footer>
      <NotFound></NotFound>
    </div>
  );
}

export default App;
