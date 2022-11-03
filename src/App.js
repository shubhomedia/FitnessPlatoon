import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Pages/Contact/Contact';
import Login from './Components/Login/Login';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/servicedetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
