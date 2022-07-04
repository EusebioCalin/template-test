import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faPoo } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Parallax from './components/parallax/Parallax';
import Quotes from './components/quotes/Quotes';
import Services from './components/services-section/Services';
import Team from './components/team/Team';
import Work from './components/work/Work';
import './App.css';

library.add(fab, faCheckSquare, faCoffee, faPoo, faFacebook, faLinkedin)

function App() {
  return (
    <div className="App">
      <Header />
      <Parallax />
      <Services />
      <Work />
      <Quotes />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
