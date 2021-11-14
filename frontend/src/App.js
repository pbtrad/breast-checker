// import { BrowseRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Action from './components/Action/Action';
import Footer from './components/Footer/Footer';
import "../src/sass/style.scss";
import './GlobalStyles.css';


function App() {
  return (
    <div className='Container'>
      <div className='wrapper'>
        <Header />
        <Hero />
        <Action />
      </div>
      <h1>Be Yo Tracker</h1>
        <div className='Layout'>
            <h3>Main content</h3>
            <p>second content</p>
        </div>
        <Footer />
    </div>
  );
}

export default App;
