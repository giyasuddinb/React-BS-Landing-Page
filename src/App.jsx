import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
