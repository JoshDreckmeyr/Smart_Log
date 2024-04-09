import React, { useState, useEffect } from 'react';

function AboutUs() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define styles
     
    const aboutTrading = {
            backgroundColor: '#101010',
            color: 'white',
            textAlign: 'center',
            padding: '50px',
        }

       const aboutTradingTitle ={
            fontSize: '2.5em',
            marginBottom: '50px',
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
            <h1 style={aboutTradingTitle}>Already A Member?</h1>
            <button style={signupButton}>Go To Dashboard</button>
        </div>
    );
}

export default AboutUs;
