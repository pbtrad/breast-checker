import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

function Navigation() {
    return (
      <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <form className="form-inline my-2 my-lg-0 pl-5">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </ul>
        
        <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/checks">Trekker</a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link disabled" href="http://localhost:3000/login">Login</a>
          </li>
      </div>
    </nav>
    <Outlet/>
      <Footer/>
      </>
    )
}

export default Navigation
