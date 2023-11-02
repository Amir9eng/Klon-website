import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Footer bgColor='bg-neutral-950' />
    </>
  );
}

export default App;
