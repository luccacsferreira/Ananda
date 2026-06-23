import React from 'react';

export const SparklesDrawn = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 10C50 30 70 50 90 50C70 50 50 70 50 90C50 70 30 50 10 50C30 50 50 30 50 10Z" fill="#A88FAC" opacity="0.4"/>
    <path d="M80 20C80 25 85 30 90 30C85 30 80 35 80 40C80 35 75 30 70 30C75 30 80 25 80 20Z" fill="#A88FAC" opacity="0.6"/>
    <path d="M20 70C20 75 25 80 30 80C25 80 20 85 20 90C20 85 15 80 10 80C15 80 20 75 20 70Z" fill="#A88FAC" opacity="0.5"/>
  </svg>
);

export const HouseDrawn = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 50L50 15L90 50" />
    <path d="M20 42V85H80V42" />
    <path d="M40 85V60H60V85" />
    <path d="M30 30V15H45" />
    <path d="M15 85H85" />
    <path d="M25 55H35V65H25V55Z" />
    <path d="M65 55H75V65H65V55Z" />
    {/* Decorative sketchy lines */}
    <path d="M8 52L50 14L92 52" strokeWidth="1" opacity="0.5"/>
    <path d="M30 87V60h20v27" strokeWidth="1" opacity="0.5"/>
  </svg>
);

export const EarDrawn = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M45 20C65 20 75 35 75 50C75 65 65 80 50 80C35 80 30 65 25 55C20 45 25 35 30 30C35 25 40 20 45 20Z" />
    <path d="M55 45C60 45 62 50 62 55C62 60 55 65 50 65C45 65 42 60 45 55" />
    <path d="M40 35C45 35 50 40 50 45" />
  </svg>
);

export const NoseDrawn = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 20L40 60C38 68 42 75 50 75C58 75 62 68 60 60C60 60 55 65 50 65C45 65 40 60 40 60" />
    <path d="M30 65C25 65 20 60 25 55" />
    <path d="M70 65C75 65 80 60 75 55" />
  </svg>
);
