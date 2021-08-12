import React from 'react';

function Footer(){
  return (
    <section className="Footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} - John Gibson - All Rights Reserved</p>
        </div>
    </section>
  );
}

export default Footer;