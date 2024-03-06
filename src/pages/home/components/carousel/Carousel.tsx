import React, { useState, useEffect, useRef } from 'react';

const colors = ['#0088FE', '#00C49F', '#FFBB28'];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = useState<number>(0);
    const timeoutRef = useRef<number | null>(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, idx) => (
                    <div
                        className="slide"
                        key={idx}
                        style={{ backgroundColor }}
                    ></div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? ' active' : ''}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;