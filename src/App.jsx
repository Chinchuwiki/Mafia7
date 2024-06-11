import './App.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Discord from './Discord';
import MainContent from './MainContent';
import PlayersCards from './PlayersCards';
import InfiniteSlider from './InfiniteSlider';

function App() {

  return (
    <>
      <Navbar />
      <MainContent />
      <InfiniteSlider />
      <PlayersCards />
      <Discord />
      <Footer />
    </>
  )
}

export default App
