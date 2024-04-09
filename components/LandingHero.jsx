import React from 'react';

function LandingHero() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    color: '#fff',
    textAlign: 'center',
    background: 'url(/media/img/Landing_Hero.webp) center no-repeat',
    backgroundSize: 'cover',
  };

  const sloganStyle = {
    margin: '0.5em',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '1.5em',
  };

  const titleStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
    margin: '0.2em',
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
    <div style={containerStyle}>
      <div style={sloganStyle}>Smart Log</div>
      <h1 style={titleStyle}>Trade. Journal. Win.</h1>
      <button style={buttonStyle}>Sign Up</button>
    </div>
  );
}

export default LandingHero;
