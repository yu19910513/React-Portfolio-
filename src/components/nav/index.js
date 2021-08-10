import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('Contact_form')}
          className={currentPage === 'Contact_form' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>

    </ul>
  );
}

export default Nav;
