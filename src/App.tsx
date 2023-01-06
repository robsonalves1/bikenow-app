import React from 'react';
import searchIcon from "./img/magnifying-glass-search.png";
import bikeIcon from "./img/bicycle.png";
import downloadIcon from "./img/download.png";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";


function MainNav(props: any) {
  return (
    <div className="header-home-page">
      <Link to="/">
        <div id="logo">
          BikeRnow
        </div>
      </Link>


      <nav id="main-nav">
        <ul>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/signup"><li>Sign up</li></Link>
        </ul>
      </nav>
    </div >
  );
}

function HomeSection(props: any) {
  return (
    <div className="banner-home-page">
      <h1 id="text-banner-home-page">Rent a bike. <br></br> Anytime. <br></br> Everywhere.</h1>
    </div>
  );

}

function HowItWorks(props: any) {
  return (
    <>
      <div className="how-it-works-grid">
        <div>
          {/* <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
          <div className="how-it-works-header">
            <img src={searchIcon} alt="search icon" />
            <h1>Start looking for a bike</h1>
          </div>
          <p>Find all bikes available in your place in simple way</p>
        </div>
        <div>
          <div className="how-it-works-header">
            <img src={bikeIcon} alt="" />
            <h1>Rent your bike</h1>
          </div>
          <p>Earn extra money with your stopped bike</p>
        </div>
        <div>
          <div className="how-it-works-header">
            <img src={downloadIcon} alt="" />
            <h1>Download the app</h1>
          </div>
          <p>The world become small with a bicycle, you don't need to carry a bike everywhere you go, just search in the app</p>
        </div>
      </div>
    </>
  );
}

function DiscoverBikeMapHomePage(props: any) {
  return (
    <>
      <div>
        <h1>Find easily bikes</h1>
        <p>Discover all bikes in your neighborhood</p>
      </div>
    </>
  );
}

function Footer(props: any) {
  return (
    <>
      <footer>
        <span>© 2023 BikeRnow</span>
      </footer>
    </>
  );
}

function Login(props: any) {
  return (
    <>
      <form className="login-signUp-container">
        <h1>Login</h1>
        <div className="login-signUp-grid-rows" id="login-email">
          <label className="login-signUp-label">Email address</label>
          <input type="email" className="login-signUp-form-control" id="login-email-input" aria-describedby="emailHelp" />
        </div>
        <div className="login-signUp-grid-rows" id="login-password">
          <label htmlFor="exampleInputPassword1" className="login-signUp-label">Password</label>
          <input type="password" className="login-signUp-form-control" id="login-password-input" />
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </>
  );
}

function SignUp(props: any) {
  return (
    <>
      <form className="login-signUp-container">
        <h1>Sign up</h1>
        <div className="login-signUp-grid-rows">
          <label className="login-signUp-label">Completed Name</label>
          <input type="email" className="login-signUp-form-control" id="login-email-input" aria-describedby="emailHelp" />
        </div>
        <div className="login-signUp-grid-rows">
          <label className="login-signUp-label">Email address</label>
          <input type="email" className="login-signUp-form-control" id="login-email-input" aria-describedby="emailHelp" />
        </div>
        <div className="login-signUp-grid-rows">
          <label htmlFor="exampleInputPassword1" className="login-signUp-label">Password</label>
          <input type="password" className="login-signUp-form-control" id="login-password-input" />
        </div>
        <button type="submit" className="btn-submit">Create</button>
      </form>
    </>
  );
}

function App() {
  return (
    <>
      <MainNav />

      <Routes>
        <Route path='/' element={<> <HomeSection /><HowItWorks /> </>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
