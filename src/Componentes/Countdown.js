import React, { useState, useEffect } from "react";
import './Countdown.css'

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [targetDate]);

    return (
        <div className="countdown-container">
            <div className="countdown-item">
                <p>{timeLeft.days}</p>
                <span>days</span>
            </div>
            <div className="countdown-item">
                <p>{timeLeft.hours}</p>
                <span>hours</span>
            </div>
            <div className="countdown-item">
                <p>{timeLeft.minutes}</p>
                <span>minutes</span>
            </div>
            <div className="countdown-item">
                <p>{timeLeft.seconds}</p>
                <span>seconds</span>
            </div>
        </div>
    );
};

export default Countdown;