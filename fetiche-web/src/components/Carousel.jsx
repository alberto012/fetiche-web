import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full transition-transform duration-500 transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
