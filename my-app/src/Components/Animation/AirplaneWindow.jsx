


import React, { useEffect, useState } from 'react';
import './AirplaneWindow.css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';

const AirplaneWindow = () => {
    const [windowState, setWindowState] = useState('closed');

    useEffect(() => {
        const animationInterval = 12000; // 12 seconds for the complete animation cycle
        const step = animationInterval / 6; // 6 steps

        const interval = setInterval(() => {
            setWindowState('open');
            setTimeout(() => setWindowState('idle'), step * 2);
            setTimeout(() => setWindowState('closed'), step * 3);
            setTimeout(() => setWindowState('idle'), step * 5);
        }, animationInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="containers">
            <div className={`window ${windowState}`}>
                <img src={img1} className="image" alt="Window 1" />
                <div className={`shutter ${windowState}`}></div>
            </div>
            <div className={`window ${windowState}`}>
                <img src={img2} className="image" alt="Window 2" />
                <div className={`shutter ${windowState}`}></div>
            </div>
            <div className={`window ${windowState}`}>
                <img src={img3} className="image" alt="Window 3" />
                <div className={`shutter ${windowState}`}></div>
            </div>
        </div>
    );
};

export default AirplaneWindow;

