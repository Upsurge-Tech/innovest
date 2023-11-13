import logo from './logo.svg';
import HomePage from './components/home/home_page.jsx'
import NavBar from './components/layout/NavBar.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contact/contact.jsx'
import Partners from './components/partner/partner.jsx'
import OurMissionAndVision from './components/our-mission-and-vision/index.jsx'
import Services from './components//services/index.jsx'
import TeamSection from './components/team/team_section.jsx'
import Footer from './components/layout/Footer.jsx'
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <HomePage />
    <About />
    <OurMissionAndVision/>
    <TeamSection/>
    <Services/>
    <Partners/>
    <Contact/>
    <Footer />
    
    </>
    
  );
}

export default App;
