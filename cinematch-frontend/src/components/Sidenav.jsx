import React, { useEffect } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  useEffect(() => {
    // Initialize the sidenav when the component mounts
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, []);

  return (
    <>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <div className="user-content">
            <div className="background user-content">
              <img src="images/office.jpg" alt="Office Background" />
            </div>
            <Link to="/user">
              <img className="circle" src="images/yuna.jpg" alt="User Avatar" />
            </Link>
            <Link to="/name">
              <span className="white-text name">YOUR NAME</span>
            </Link>
            <button>
              <span className="find-matches btn">Find matches</span>
            </button>
          </div>
        </li>
        <div className="menu-content">
        <li>
          <Link to="/discover">
            <i className="material-icons" style={{ color: 'white' }}>people</i>
            Discover
          </Link>
        </li>
        <li>
          <Link to="/rankedlist">
            <i className="material-icons" style={{ color: 'white' }}>favorite</i>
            Rankedlist
          </Link>
        </li>
        </div>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </>
  );
};

export default Sidenav;
