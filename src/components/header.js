import * as React from 'react';
import logo from '../assets/img/objects/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useState, useEffect } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem('token');
  console.log(token);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if (response.tokenId) {
      localStorage.setItem('token', token);
      setIsLoggedIn(token);
    }
  };

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  };

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.clear();
    navigate('/');
    // window.location.reload();
      <GoogleLogout />;
  }

  return (
    <div className="container-header">
      <nav className="navbar">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a href="#service" className="nav-link">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#whyus" className="nav-link">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonial" className="nav-link">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              {!isLoggedIn ? (
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with Google"
                  onSuccess={haldleSuccessGoogle}
                  onFailure={haldleFailureGoogle}
                  cookiePolicy="single_host_origin"
                />
              ) : (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
