import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserContext from '../context/UserContext';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col flex-grow">
        <Outlet />
      </main>
      <footer className="flex flex-col flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
