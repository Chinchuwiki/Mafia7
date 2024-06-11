import React from 'react';
import './MainContent.css';
import mafia7 from '/MAFIA-7.png';
import { motion } from 'framer-motion';
import storm from '/lightningStormAnimationBackground.webm';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent() {
    return (
        <div className="container-fluid p-0">
            <div className="background-container">
                <video autoPlay loop muted className="background-video">
                    <source src={storm} type="video/webm" />
                </video>
                <motion.img
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                    src={mafia7}
                    alt="Mafia 7"
                    className="centered-image"
                    initial={{ x: '-50%', y: '-50%' }}
                    animate={{ x: '-50%', y: '-50%' }}
                />
            </div>
        </div>
    );
}

export default MainContent;