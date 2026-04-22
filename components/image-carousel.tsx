"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@heroui/react";

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative group w-full h-[400px] md:h-[600px]">
      <div
        style={{ backgroundImage: `url(/${images[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 border-2 border-foreground/10"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer backdrop-blur-sm">
        <Button isIconOnly variant="light" onClick={prevSlide}>
          <ChevronLeft size={30} />
        </Button>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer backdrop-blur-sm">
        <Button isIconOnly variant="light" onClick={nextSlide}>
          <ChevronRight size={30} />
        </Button>
      </div>
      <div className="flex top-4 justify-center py-2 space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer w-3 h-1 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? "bg-white w-6" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
