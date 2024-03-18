import React, { useState, useEffect } from "react";
import './carousel.scss';
import { useTranslation } from "react-i18next";
export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [timer, setTimer] = useState(null);
    const { t } = useTranslation();
    const images = [
        '',

    ];
    const icon = [
        {
            img: '',
            text: t()
        },

    ]
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const handleHover = () => {
        setIsHovered((prevState) => !prevState);
    };
    useEffect(() => {
        if (!isHovered) {
            setTimer(
                setInterval(() => {
                    goToNextSlide();
                }, 3000)
            );
        } else {
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        };
    }, [isHovered]);

    return (
        <div className="carousel_box">
            <div className="carousel_app">
                <div className="carousel"
                    style={{ width: '80%', height: '640px' }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <img src={images[currentIndex]} alt="carousel_slide" />
                    {
                        isHovered && (
                            <div className="navigation">
                                <button type="button" className="btn" onClick={goToPrevSlide}>
                                    <ion-icon name='chevron-back-outline' />
                                </button>
                                <button type="button" className="btn" onClick={goToNextSlide}>
                                    <ion-icon name="chevron-forward-outline" />
                                </button>
                            </div>
                        )
                    }
                    <div className="mydots">
                        {images.map((images, index) => (
                            <span
                                key={index}
                                className={index === currentIndex ? 'active' : ''}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <img className="img_right" src='' />
            </div>
            <div className="menu">
                {icon.map((item) => {
                    return <div className="menu_item" key={Math.random() * Date.now()}>
                        <img src={item.img} />
                        <p>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

// import React, { useState, useEffect, useRef } from 'react';

// const colors = ['#0088FE', '#00C49F', '#FFBB28'];
// const delay = 2500;

// function Slideshow() {
//     const [index, setIndex] = useState<number>(0);
//     const timeoutRef = useRef<number | null>(null);

//     function resetTimeout() {
//         if (timeoutRef.current) {
//             clearTimeout(timeoutRef.current);
//         }
//     }

//     useEffect(() => {
//         resetTimeout();
//         timeoutRef.current = window.setTimeout(
//             () =>
//                 setIndex((prevIndex) =>
//                     prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//                 ),
//             delay
//         );

//         return () => {
//             resetTimeout();
//         };
//     }, [index]);

//     return (
//         <div className="slideshow">
//             <div
//                 className="slideshowSlider"
//                 style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//             >
//                 {colors.map((backgroundColor, idx) => (
//                     <div
//                         className="slide"
//                         key={idx}
//                         style={{ backgroundColor }}
//                     ></div>
//                 ))}
//             </div>

//             <div className="slideshowDots">
//                 {colors.map((_, idx) => (
//                     <div
//                         key={idx}
//                         className={`slideshowDot${index === idx ? ' active' : ''}`}
//                         onClick={() => {
//                             setIndex(idx);
//                         }}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Slideshow;
