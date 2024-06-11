import storm from '/lightningStormAnimationBackground.webm'
import { motion } from "framer-motion";
import mafia7 from '/MAFIA-7.png'
import './MainContent.css'

function MainContent() {
    return (
        <>
            <div className="container-fluid">
                <div className="background-container">
                    <video autoPlay loop muted className="background-video">
                        <source src={storm} type="video/webm" />
                    </video>
                    <motion.div
                        transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 1 }
                        }}
                    >
                        <img src={mafia7} alt="Mafia 7" className="centered-image" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default MainContent