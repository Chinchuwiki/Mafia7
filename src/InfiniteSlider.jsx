import { motion } from 'framer-motion';
import AVASCK from '/AVASCK.png';
import AYATO98 from '/AYATO98.png';
import BLASTEX56 from '/BLASTEX56.png';
import CHINCHUWIKI from '/CHINCHUWIKI.png';
import CRISR13 from '/CRISR13.png';
import FEDEREK33 from '/FEDEREK33.png';
import './InfiniteSlider.css';

const slides = [
    { player: AVASCK },
    { player: AYATO98 },
    { player: BLASTEX56 },
    { player: CHINCHUWIKI },
    { player: CRISR13 },
    { player: FEDEREK33 }
];

function InfiniteSlider() {
    const duplicatedSlides = [...slides, ...slides];
    const totalSlides = duplicatedSlides.length;

    return (
        <div className="infinite-slider-container">
            <motion.div
                className="infinite-slider-inner"
                animate={{
                    x: [0, -100 * (totalSlides / slides.length) + '%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="infinite-slider-slide">
                        <div className="infinite-slider-content">
                            <img src={slide.player} alt={`Slide ${index}`} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default InfiniteSlider;