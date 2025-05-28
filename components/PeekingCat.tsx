import React, { useState, useEffect, useRef, useCallback } from 'react';

const PeekingCatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 80 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ears */}
    <path d="M10 20 Q15 0 30 10 T30 20 Z" />
    <path d="M70 20 Q65 0 50 10 T50 20 Z" />
    {/* Head */}
    <path d="M5 40 C5 20 20 15 40 15 C60 15 75 20 75 40 C75 45 65 50 40 50 C15 50 5 45 5 40 Z" />
  </svg>
);

const PeekingCat: React.FC = () => {
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<number | null>(null); // Holds ID for the current timer in a sequence

  const ANIMATION_DURATION = 600; // ms, matches CSS transition for slide in/out
  const VISIBLE_DURATION = 3500; // ms, how long the cat stays visible
  const MIN_INTERVAL = 15000; // ms (15 seconds) for subsequent appearances
  const MAX_INTERVAL = 40000; // ms (40 seconds) for subsequent appearances
  const INITIAL_APPEARANCE_DELAY = 4000; // ms, delay before the very first appearance

  // This function handles scheduling all appearances *after* the very first one.
  const scheduleSubsequentAppearance = useCallback(() => {
    if (!isMounted) return;

    const randomInterval = Math.random() * (MAX_INTERVAL - MIN_INTERVAL) + MIN_INTERVAL;

    timerRef.current = window.setTimeout(() => {
      if (!isMounted) return;
      setShow(true); // Show the cat

      timerRef.current = window.setTimeout(() => {
        if (!isMounted) return;
        setShow(false); // Hide the cat

        timerRef.current = window.setTimeout(() => {
          if (isMounted) {
            scheduleSubsequentAppearance(); // Loop for the next random appearance
          }
        }, ANIMATION_DURATION);
      }, VISIBLE_DURATION);
    }, randomInterval);
  }, [isMounted, MIN_INTERVAL, MAX_INTERVAL, VISIBLE_DURATION, ANIMATION_DURATION]);

  useEffect(() => {
    setIsMounted(true);

    // Handle the very first appearance sequence
    const firstAppearanceTimer = window.setTimeout(() => {
      if (!isMounted) return; // Check if still mounted
      setShow(true); // Show the cat for the first time

      // After it's visible, schedule its disappearance and then the *first subsequent* random cycle
      timerRef.current = window.setTimeout(() => {
        if (!isMounted) return;
        setShow(false); // Hide the cat

        timerRef.current = window.setTimeout(() => {
          if (isMounted) {
            scheduleSubsequentAppearance(); // Start the random interval loop for next appearances
          }
        }, ANIMATION_DURATION);
      }, VISIBLE_DURATION);
    }, INITIAL_APPEARANCE_DELAY);

    return () => {
      setIsMounted(false);
      // Clear any active timer from the sequence or the initial timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      clearTimeout(firstAppearanceTimer);
    };
  // Dependencies for the main effect
  }, [scheduleSubsequentAppearance, INITIAL_APPEARANCE_DELAY, VISIBLE_DURATION, ANIMATION_DURATION]);

  // Don't render or attempt to start timers until the component is confirmed to be mounted by the effect
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`peeking-cat-container ${show ? 'show' : ''}`}
      aria-hidden="true"
    >
      <PeekingCatIcon className="w-full h-full text-sky-400 bobbing-cat" />
    </div>
  );
};

export default PeekingCat;