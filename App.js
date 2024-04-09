import logo from './logo.svg';
import './App.css';
import LandingHero from './components/LandingHero';
import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import Member from './components/Member';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
          <LandingHero />
          <AboutUs />
          <Mission />
          <Member />
          <SignUp />
    </div>
  );
}

export default App;
