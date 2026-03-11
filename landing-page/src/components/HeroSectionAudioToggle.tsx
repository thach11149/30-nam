import React from "react";
import "./HeroSection.css";

interface AudioToggleButtonProps {
    muted: boolean;
    setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AudioToggleButton({ muted, setMuted }: AudioToggleButtonProps) {
    return (
        <button
            className={`hero-audio-toggle${muted ? '' : ' unmuted'}`}
            style={{ opacity: 0.5 }}
            aria-label={muted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            onClick={() => setMuted(m => !m)}
            type="button"
        >
            {muted ? (
                <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11H3.5C2.67 11 2 11.67 2 12.5V15.5C2 16.33 2.67 17 3.5 17H6V11Z" fill="#fff" fillOpacity="0.8"/>
                    <path d="M8 9V19L15 24V4L8 9Z" fill="#fff" fillOpacity="0.8"/>
                    <line x1="20" y1="8" x2="26" y2="20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
                </svg>
            ) : (
                <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11H3.5C2.67 11 2 11.67 2 12.5V15.5C2 16.33 2.67 17 3.5 17H6V11Z" fill="#fff" fillOpacity="0.95"/>
                    <path d="M8 9V19L15 24V4L8 9Z" fill="#fff" fillOpacity="0.95"/>
                    <path d="M20 14C20 11.24 18.12 8.98 15.5 8.2V19.8C18.12 19.02 20 16.76 20 14Z" fill="#fff" fillOpacity="0.95"/>
                </svg>
            )}
        </button>
    );
}
