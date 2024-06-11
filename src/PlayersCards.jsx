import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PlayersCards.css';

function PlayersCards() {
    const [selectedId, setSelectedId] = useState(null);
    let items = [
        {
            "id": 1,
            "subtitle": "Nolose",
            "title": "queseyo"
        },
        {
            "id": 2,
            "subtitle": "Nolose",
            "title": "queseyo"
        },
        {
            "id": 3,
            "subtitle": "Nolose",
            "title": "queseyo"
        },
        {
            "id": 4,
            "subtitle": "Nolose",
            "title": "queseyo"
        },
        {
            "id": 5,
            "subtitle": "Nolose",
            "title": "queseyo"
        },
    ];

    const selectedItem = items.find(item => item.id === selectedId);

    return (
        <div className='container-fluid'>
            {items.map(item => (
                <motion.div
                    className="card-body bg-primary"
                    key={item.id}
                    layoutId={item.id.toString()}
                    onClick={() => setSelectedId(item.id)}
                >
                    <motion.h5 className="card-title">{item.subtitle}</motion.h5>
                    <motion.p className="card-text">{item.title}</motion.p>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div className="card-body bg-danger" layoutId={selectedId.toString()}>
                        <motion.h5 className="card-title">{selectedItem.subtitle}</motion.h5>
                        <motion.p className="card-text">{selectedItem.title}</motion.p>
                        <motion.button onClick={() => setSelectedId(null)}>
                            Close
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default PlayersCards;