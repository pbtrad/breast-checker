import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/sass/style.scss";
import './GlobalStyles.css';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ActionPage from './pages/Action';
import CompletePage from './pages/Complete';
import ManagePage from './pages/Manage';
import ProfilePage from './pages/profile';
import TrekkerPage from './pages/Trekker';
import Navigation from './components/Header/Navigation';
import HomePage from './pages/Home';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/action' element={<ActionPage/>}/>
        <Route path='/complete' element={<CompletePage/>}/>
        <Route path='/manage' element={<ManagePage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/trekker' element={<TrekkerPage/>}/>
      </Route>
      </Routes>
    </>
  );
}

export default App;
