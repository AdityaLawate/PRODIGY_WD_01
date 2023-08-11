import { useState } from 'react'
import  styles from './Navbar.module.css';



function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
    <div className="App">
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <a href='/' className={`${styles.logo}`}>
            <b>
              Woah.io
            </b>
            </a>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/home' className={`${styles.navLink}`} >Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='/about' className={`${styles.navLink}`}>About Us</a>
            </li>
            <li onClick={removeActive}>
              <a href='/features' className={`${styles.navLink}`}>Features</a>
            </li>
            <li onClick={removeActive}>
              <a href='/contact' className={`${styles.navLink}`}>Contact</a>
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
    </div>
  );
}


export default Navbar;
