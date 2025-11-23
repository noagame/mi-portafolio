import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseTrail = () => {
    const [trail, setTrail] = useState([]);
    const MAX_TRAIL_LENGTH = 20;

    useEffect(() => {
        const handleMouseMove = (e) => {
            setTrail((prevTrail) => {
                const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
                const newTrail = [...prevTrail, newPoint];
                if (newTrail.length > MAX_TRAIL_LENGTH) {
                    return newTrail.slice(newTrail.length - MAX_TRAIL_LENGTH);
                }
                return newTrail;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {trail.map((point, index) => (
                <motion.div
                    key={point.id}
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute rounded-full bg-stone-400/30 blur-sm"
                    style={{
                        left: point.x,
                        top: point.y,
                        width: '12px',
                        height: '12px',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
        </div>
    );
};

export default MouseTrail;
