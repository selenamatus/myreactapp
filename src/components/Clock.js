import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    const tick = () => {
        setTime(new Date());
    };

    return (
        <div className="clock-container">
            <h2 className="clock-time">{time.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Clock;
