import React, { useState, useEffect } from 'react';

const Mission = () => {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        
  const sectionStyle = {
    display: windowWidth < 900 ? 'block' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    gap: '30px',
    backgroundColor: '#101010', 
    color: 'white',
   
  };

  const textStyle = {
    maxWidth: '400px', 
    margin: windowWidth < 900 ? 'auto' : 'none', 
  };

  const imageStyle = {
    width: '300px', 
    height: 'auto',
  };

  const buttonStyle = {
    fontSize: '1em',
    padding: '10px 25px',
    margin: '1em',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0066ff', 
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <section style={sectionStyle}>
      <div style={textStyle}>
        <h2>Our Mission</h2>
        <p>
          We aim to simplify the world of trading by creating a free trade
          journal platform with powerful analytics attached to the journal.
          Allowing traders to learn and grow from their trades
        </p>
        <button style={buttonStyle}>Learn More</button>
      </div>
      <div>
        <img 
          src="/media/img/Stock.jpg" 
          alt="Bull and Bear"
          style={imageStyle}
        />
      </div>
    </section>
  );
};

export default Mission;
