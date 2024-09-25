"use client"
import React, {useEffect, useRef, useState} from "react";

export default function AnimatedName() {
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
            className="font-medium pt-12"
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