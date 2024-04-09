import React, { useState, useEffect } from 'react';

function SignUp() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define styles

        const aboutTrading = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
            color: '#fff',
            textAlign: 'center',
            background: '#101010',
            backgroundSize: 'cover',
        }
        
        const aboutTradingTitle = {
            fontSize: '2.5em',
            marginBottom: '50px',
        }

        const item = {
            width: '50vh',
            height: '100vh',
            background: 'url(/media/img/Landing_Hero.webp) center no-repeat',
            backgroundSize: 'cover',
        }

        const itemright = {
            width: '50vh',
            height: '100vh',
        }

       const signupButton = {
            fontSize: '0.75em',
            padding: '10px 25px',
            margin: '1em',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#0066ff', 
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }
  

    return (
        <div style={aboutTrading}>
            <div style={item}>
            <h1 style={aboutTradingTitle}>Already A Member?</h1>
            <button style={signupButton}>Go To Dashboard</button>
            </div>
            <div style={itemright}>
            <h1 style={aboutTradingTitle}>Already A Member?</h1>
            <button style={signupButton}>Go To Dashboard</button>
            </div>
            
        </div>
    );
}

export default SignUp;
