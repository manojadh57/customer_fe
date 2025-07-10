import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <small>Built with 💻 by Rajat</small>
      </div>
    </footer>
  );
}

export default Footer;
