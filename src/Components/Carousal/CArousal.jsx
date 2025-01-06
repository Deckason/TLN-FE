import React, { useState } from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';

const Carousel = ({ slides, slidesToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= slides.length ? 0 : prevIndex + slidesToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - slidesToShow < 0 ? slides.length - slidesToShow : prevIndex - slidesToShow
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.button} onClick={prevSlide}>Prev</button>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselSlide}
          style={{
            transform: `translateX(-${(currentIndex) * 10}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className={styles.carouselItem} key={index}>
              <Image src={slide} alt={`Slide ${index}`} width={500} height={400}/>
              <div className={styles.overlay}>
                <p>Slide {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.button} onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
