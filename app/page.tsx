/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'next-view-transitions';

const highlight = 'text-[#FFD700]';

function AnimatedName() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHighlighted(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHighlighted(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <h1
      className="font-medium pt-12 fade-in-up-delayed-top"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="sr-only">Domenico Valentino</span>
      <span
        aria-hidden="true"
        className={`hover:text-[rgb(255,251,0)] block overflow-hidden group relative transition-colors ${
          isHighlighted ? 'text-[#FFD700]' : ''
        }`}
      >
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {'Domenico Valentino'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {'domidev'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}


export default function Home() {
  return (
    <>
      <AnimatedName />
      <div className="text-white space-y-4 leading-snug font-light fade-in-up-delayed">
        <p>
          I'm a computer science student at Dawson College in Montréal Québec, dean's list semi-finalist FRC Alumn, full stack developer, robotics mentor at{' '}
            <Link href="https://team3990.com" className={highlight}>
            Tech For Kids
            </Link>
          , where I teach students{' '}
          <Link href="https://docs.wpilib.org/en/stable/index.html" className={highlight}>
            WPILib and Java
          </Link>{' '}
          from the ground up.
        </p>
        <p>
          I'm a software engineer for my team where I build projects and tools for the team, such as a{' '}
          <Link href="https://apps.apple.com/us/app/tech-scout/id6446188906" className={highlight}>
            scouting app
          </Link>{' '}
          for the team to use during competitions, or an{' '}
          <Link href="https://apps.apple.com/us/app/tech-insights/id6477985456" className={highlight}>
            insights app
          </Link>{' '}
          for the team to use to analyze that scouting data.
        </p>
        <p>
          I work on passion projects like{' '}
          <Link href="https://cnvyapp.com" className={highlight}>
            CNVY
          </Link>
          , an app that turns driving into an adventure with real-time group alerts, smooth communication, and synchronized tunes.
        </p>
        <p>
          I'm always looking for new opportunities to learn and grow, so feel free to reach out to me. Or feel free to check out and support my work. It would mean the 🌍
        </p>
      </div>
    </>
  );
}
