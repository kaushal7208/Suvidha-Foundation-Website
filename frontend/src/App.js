import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import FlatCards from './components/FlatCards/FlatCards';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
function App() {
  return (
     <BrowserRouter>
     <Navbar/>
     <Header/>
     <FlatCards/>
     <Team/>
     <Footer/>
     </BrowserRouter>
  );
}

export default App;
