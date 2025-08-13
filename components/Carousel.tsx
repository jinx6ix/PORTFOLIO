"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Carousel({ items }: { items: string[] }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-black/50 rounded-xl text-white text-center shadow-lg"
        >
          {item}
        </motion.div>
      ))}
    </Slider>
  );
}
