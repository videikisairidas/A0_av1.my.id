import { NavLink } from 'react-router-dom';
// import { setupThemeToggle } from '../assets/js/themeToggle.js';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';



function HeaderMobile() {
  const toggleRef = useRef(null);
  const [isClickedMenu, setIsClickedMenu] = useState(false);

  const menuClick = () => {
    setIsClickedMenu(true); // or toggle with !isClicked
  };


  return (
    <>
    <div id="MobileHeader" className={isClickedMenu ? 'active' : ''}>
      <div >
        <nav id="navMobile">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink>
          {/* <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'active' : '')}>Upcoming</NavLink> */}
          <NavLink to="/background" className={({ isActive }) => (isActive ? 'active' : '')}>Background</NavLink>
          <a target="_blank" href="https://buymeacoffee.com/maxyou200">Support Me</a>
        </nav>

        <div className='BottomHeader'>
          
          <div className="b2">
            <a href="tel:+37062165966">
              <svg width="26" height="26" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <ellipse cx="256" cy="256" rx="256" ry="255.8" fill="#ffffff" />
                <rect x="331.753" y="288.52" width="37.344" height="91.504" transform="matrix(0.7879 -0.6158 0.6158 0.7879 -131.5202 286.6909)" fill="#0026bd" />
                <path fill="#0026bd" d="M348.696 393.736L292.344 321.6c-51.16-14.248-87.064-60.168-88.544-113.256l-56.352-72.096s-53.392 76.488 30.4 183.64 170.848 73.448 170.848 73.448z" />
                <rect x="186.814" y="103.169" width="37.344" height="91.504" transform="matrix(0.7879 -0.6158 0.6158 0.7879 -48.1226 158.1244)" fill="#0026bd" />
              </svg>
            </a>
            <a href="https://t.me/+37062165966">
              <svg viewBox="0 0 256 256"  width="26" height="26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="128" cy="128" r="128" fill="#ffffff" />
                <path fill="#4063f1ff" d="M190.283 73.631L167.421 188.898s-3.197 7.994-11.99 4.157l-52.758-40.448-19.184-9.272-32.294-10.872s-4.956-1.758-5.436-5.595c-.479-3.837 5.596-5.915 5.596-5.915l128.376-50.36s10.552-4.636 10.552 3.038z" />
                <path fill="#6890ffff" d="M98.618 187.604s-1.54-.144-3.459-6.22c-1.918-6.075-11.67-38.049-11.67-38.049l77.537-49.24s4.477-2.718 4.317 0c0 0 .799.479-1.599 2.717-2.398 2.239-60.911 54.836-60.911 54.836z" />
                <path fill="#B5CFE4" d="M122.902 168.115l-20.868 19.026s-1.631 1.238-3.416.462l3.996-35.341z" />
              </svg>
            </a>
            <a href="mailto:airidasvideikis@gmail.com">
              <svg width="26" height="26" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="256" cy="256" r="256" fill="#ffffff" />
                <path fill="#3d66eeff" d="M400.272 356.08H112.048v-205.6h288.24v205.6zm-272.224-16h256.24v-173.6h-256.24v173.6z" />
                <polygon fill="#323ff8ff" points="256.176,279.824 115.824,192.704 124.256,179.104 256.144,260.976 388.032,178.464 396.528,192.032"  />
                <rect x="342.548" y="225.448" width="16" height="137.196" transform="matrix(-0.7863 0.6178 -0.6178 -0.7863 807.8576 308.6862)"   fill="#5a58e9ff" />
                <polygon fill="#3b38ffff" points="126.032,352.944 113.424,343.056 198.208,235.168 210.8,245.04" />
              </svg>
              </a>
          </div>
    
          <div className="b1">
            <div><h2>FullStack/Web Developer</h2></div>
            <div><h1>Airidas Videikis</h1></div>
          </div>

        </div>

        <div className='closeMenu' onClick={() => setIsClickedMenu(false)}>
          &#x2715;
        </div>
        
      </div>

      

    </div>

    <div className='HeaderMobile'>

      <div>
        <h3>Airidas Videikis</h3>
      </div>

      <div className="menuIcon" onClick={() => setIsClickedMenu(true)}> 
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
    </>
  )
}

export default HeaderMobile;
