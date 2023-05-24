import React, { useEffect } from 'react';
import M from 'materialize-css';

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
          <div className="user-view">
            <div className="background user-content">
              <img src="images/office.jpg" alt="Office Background" />
            </div>
            <a href="#user">
              <img className="circle" src="images/yuna.jpg" alt="User Avatar" />
            </a>
            <a href="#name">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="#email">
              <span className="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons" style={{ color: 'red' }}>tram</i>
            First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
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
      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </>
  );
};

export default Sidenav;