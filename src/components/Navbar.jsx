import React from "react";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navigator">
      <ul>
      <img src='https://play-lh.googleusercontent.com/fXQVXTma1ENwAFjsxJ4IT6GntBr3RxWP3HMSLbNdvycl-0tscOQEeJIEAmehcNOt5hCp' alt='logo'></img>
        <li>Home</li>
        <li>Characters</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
