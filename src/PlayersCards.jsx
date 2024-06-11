import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    { id: 1, title: 'Player 1', subtitle: 'Details of player 1' },
    { id: 2, title: 'Player 2', subtitle: 'Details of player 2' },
    { id: 3, title: 'Player 3', subtitle: 'Details of player 3' },
    { id: 4, title: 'Player 4', subtitle: 'Details of player 4' }
];

const PlayersCards = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="container">
            <div className="row mt-4 mb-4" >
                <div className="col">
                    <motion.div
                        layoutId={1}
                        onClick={() => setSelectedId(1)}
                        className="card h-100 p-3"
                        whileHover={{ scale: 0.9 }}
                        style={{ cursor: 'pointer', backgroundColor: '#f8f9fa' }}
                    >
                        <h2>AVASCK</h2>
                        <h5>ESTAS COSAS SUELEN PASAR CON TODO LO QUE DECIS</h5>
                    </motion.div>
                </div>

                <div className="col">
                    <motion.div
                        layoutId={2}
                        onClick={() => setSelectedId(2)}
                        className="card h-100 p-3"
                        whileHover={{ scale: 0.9 }}
                        style={{ cursor: 'pointer', backgroundColor: '#f8f9fa' }}
                    >
                        <h2>AYATO</h2>
                        <h5>ESTAS COSAS SUELEN PASAR CON AYATO</h5>
                    </motion.div>
                </div>
            </div>

            <div className="row mt-4 mb-4">
                <div className="col">
                    <motion.div
                        layoutId={3}
                        onClick={() => setSelectedId(3)}
                        className="card h-100 p-3"
                        whileHover={{ scale: 0.9 }}
                        style={{ cursor: 'pointer', backgroundColor: '#f8f9fa' }}
                    >
                        <h2>BLASTEX56</h2>
                        <h5>ESTAS COSAS SUELEN PASAR CON AYATO</h5>
                    </motion.div>
                </div>

                <div className="col">
                    <motion.div
                        layoutId={4}
                        onClick={() => setSelectedId(4)}
                        className="card h-100 p-3"
                        whileHover={{ scale: 0.9 }}
                        style={{ cursor: 'pointer', backgroundColor: '#f8f9fa' }}
                    >
                        <h2>CRISR13</h2>
                        <h5>ESTAS COSAS SUELEN PASAR CON TODO LO QUE DECIS</h5>

                    </motion.div>
                </div>

                <div className="col">
                    <motion.div
                        layoutId={5}
                        onClick={() => setSelectedId(5)}
                        className="card h-100 p-3"
                        whileHover={{ scale: 0.9 }}
                        style={{ cursor: 'pointer', backgroundColor: '#f8f9fa' }}
                    >

                        <h2>FEDERECK</h2>
                        <h5>ESTAS COSAS SUELEN PASAR CON AYATO</h5>
                    </motion.div>
                </div>
            </div>

            <div className="row mt-4 mb-4">
                <div className="col">
                    <motion.div
                        layoutId={6}
                        onClick={() => setSelectedId(6)}
                        className="card h-100 p-3"
                        whileHover={{ scale: 0.9 }}
                        style={{ cursor: 'pointer', backgroundColor: '#f8f9fa' }}
                    >
                        <h2>CHINCHUWIKI</h2>
                        <h5>ESTAS COSAS SUELEN PASAR CON TODO LO QUE DECIS</h5>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="card p-3 position-absolute top-50 start-50 translate-middle"
                        style={{ backgroundColor: '#f8f9fa' }}
                    >
                        <motion.button
                            onClick={() => setSelectedId(null)}
                            className="btn btn-primary mt-3"
                        >
                            Close
                        </motion.button>
                        <h2>{items.find(item => item.id === selectedId).title}</h2>
                        <h5>{items.find(item => item.id === selectedId).subtitle}</h5>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PlayersCards;