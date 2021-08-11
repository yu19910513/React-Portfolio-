import React, { useState } from 'react';
import Nav from '../nav';
import Home from '../nav/nav_home';
import Profile from '../nav/nav_profile';
import Contact_form from '../nav/nav_contact_form';
import Info from './info'


export default function Main() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'Contact_form') {
      return <Contact_form />;
    }
    return <Home />;
  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div>
        <Info />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
