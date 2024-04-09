import React, { useState, useEffect } from 'react';

function AboutUs() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define styles
    const styles = {
        aboutTrading: {
            backgroundColor: '#101010',
            color: 'white',
            textAlign: 'center',
            padding: '50px',
        },
        aboutTradingTitle: {
            fontSize: '2.5em',
            marginBottom: '50px',
        },
        features: {
            display: windowWidth < 900 ? 'block' : 'flex',
            justifyContent: 'center',
            gap: '50px',
            marginBottom: '50px',
        },
        feature: {
            marginBottom: '20px', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        icon: {
            width: '128px',
            height: '128px',
            marginBottom: '10px',
        },
        signupButton: {
            fontSize: '1em',
            padding: '10px 25px',
            margin: '1em',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#0066ff', 
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
    };

    return (
        <div style={styles.aboutTrading}>
            <h1 style={styles.aboutTradingTitle}>How we revolutionize trading</h1>
            <div style={styles.features}>
                <div style={styles.feature}>
                    <img src="/media/img/Notebook.png" alt="Journal" style={styles.icon} />
                    <p>Simple trade journal software</p>
                </div>
                <div style={styles.feature}>
                    <img src="/media/img/Graph.png" alt="Analytics" style={styles.icon} />
                    <p>Powerful analytics for your trades</p>
                </div>
                <div style={styles.feature}>
                    <img src="/media/img/Coin.webp" alt="Free" style={styles.icon} />
                    <p>Free forever.</p>
                </div>
            </div>
            <button style={styles.signupButton}>Sign Up</button>
        </div>
    );
}

export default AboutUs;
