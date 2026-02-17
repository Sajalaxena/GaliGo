import React from 'react';
import { Pizza, Hammer, Zap, ShoppingBag, Sandwich, Dumbbell, Candy, Carrot } from 'lucide-react';

const FloatingIcons = ({ opacity = 0.15 }) => {
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '10%', left: '5%', color: '#f59e0b', opacity, animation: 'float 6s infinite ease-in-out' }}>
                <Pizza size={60} />
            </div>
            <div style={{ position: 'absolute', bottom: '20%', right: '10%', color: '#6366f1', opacity, animation: 'float 8s infinite ease-in-out reverse' }}>
                <Hammer size={80} />
            </div>
            <div style={{ position: 'absolute', top: '30%', right: '20%', color: '#eab308', opacity, animation: 'float 7s infinite ease-in-out' }}>
                <Zap size={50} />
            </div>
            <div style={{ position: 'absolute', bottom: '10%', left: '15%', color: '#ec4899', opacity, animation: 'float 9s infinite ease-in-out reverse' }}>
                <ShoppingBag size={60} />
            </div>
            <div style={{ position: 'absolute', top: '20%', left: '40%', color: '#10b981', opacity: Math.max(0, opacity - 0.03), animation: 'float 7.5s infinite ease-in-out' }}>
                <Sandwich size={50} />
            </div>
            <div style={{ position: 'absolute', bottom: '40%', right: '5%', color: '#3b82f6', opacity: Math.max(0, opacity - 0.03), animation: 'float 8.5s infinite ease-in-out reverse' }}>
                <Dumbbell size={70} />
            </div>
            <div style={{ position: 'absolute', top: '10%', right: '40%', color: '#d946ef', opacity: Math.max(0, opacity - 0.03), animation: 'float 6.5s infinite ease-in-out' }}>
                <Candy size={40} />
            </div>
            <div style={{ position: 'absolute', bottom: '5%', left: '50%', color: '#84cc16', opacity: Math.max(0, opacity - 0.03), animation: 'float 9.5s infinite ease-in-out reverse' }}>
                <Carrot size={50} />
            </div>
        </div>
    );
};

export default FloatingIcons;
