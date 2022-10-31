import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import LogoSection from './Components/LogoSection/LogoSection';
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Features></Features>
      <LogoSection></LogoSection>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
