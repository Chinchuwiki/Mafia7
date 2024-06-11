import './App.css'
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
    </>
  )
}

export default App
