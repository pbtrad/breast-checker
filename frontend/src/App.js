// import { BrowseRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import './GlobalStyles.css';

function App() {
  return (
    <div className='Container'>
      <div className='App-header'>
        <Hero />
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
