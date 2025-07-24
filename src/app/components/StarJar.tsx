"use client";

import React, { useState } from 'react';
import MemoryModal from './MemoryModal';
import { motion, AnimatePresence } from 'framer-motion';

interface Memory {
  id: number;
  image: string;
  text: string;
  date: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "That sunset walk on the beach when you laughed so hard at my terrible joke that you snorted. Your joy was more beautiful than any sunset.",
    date: "March 15, 2023"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "Dancing in the kitchen while making pancakes, flour in your hair and pure happiness in your eyes. Perfect chaos.",
    date: "July 22, 2023"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "Stargazing on the rooftop, your hand in mine, dreaming about tomorrow while living perfectly in today.",
    date: "September 8, 2023"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "That rainy afternoon when we built a fort out of blankets and pretended we were kids again. Time stopped.",
    date: "November 12, 2023"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "Morning coffee in bed, your sleepy smile and messy hair. The most beautiful sight I've ever woken up to.",
    date: "December 25, 2023"
  }
];

const StarJar: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleJarClick = () => {
    if (isAnimating) return;
    
    const randomMemory = memories[Math.floor(Math.random() * memories.length)];
    setIsAnimating(true);
    
    // Start animation, then show modal after delay
    setTimeout(() => {
      setSelectedMemory(randomMemory);
      setIsModalOpen(true);
      setIsAnimating(false);
    }, 800);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMemory(null);
  };

  // Generate stars inside the jar
  const jarStars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 70 + 15, // Keep stars within jar bounds
    top: Math.random() * 60 + 20,
    size: Math.random() * 3 + 2,
    animationDelay: Math.random() * 2,
  }));

  return (
    <div className="flex flex-col items-center">
      {/* Animated star that emerges from jar */}
      {isAnimating && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-star-emerge">
              <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-300/50" />
            </div>
          </div>
        </div>
      )}

      {/* The Jar */}
      <div 
        className="relative cursor-pointer transform transition-transform duration-400 hover:scale-105"
        onClick={handleJarClick}
      >
        {/* Jar Image Container */}
        <div className="relative w-100 h-84">
          {/* Jar Image */}
          <img 
            src="/jar2.png?v2" 
            alt="Star Jar" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          
          {/* Stars inside jar - positioned over the image */}
          <div className="absolute mx-auto my-auto h-60 w-60 inset-0">
            {jarStars.map((star) => (
              <div
                key={star.id}
                className="absolute bg-yellow-300 rounded-full animate-float"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: `${star.animationDelay}s`,
                  boxShadow: '0 0 8px rgba(253, 224, 71, 0.6)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quote Label */}
      <div className="mt-8 max-w-4xl text-center">
        <p className="text-yellow-100 text-lg leading-relaxed font-medium italic sm:px-4 px-6">
          "My baby. Every time you made me smile during this year, I took one star from the night sky and stored it in this jar. You helped me collect enough stars to light up the rest of my life. <br></br> <br></br> Thank you for lighting up my life for one entire year; I would never want to experience darkness again. <br></br> <br></br> Happy one year anniversary, my love!"
        </p>
      </div>

      {/* Memory Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMemory && (
          <motion.div
            key="memory-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MemoryModal
              memory={selectedMemory}
              isOpen={true}
              onClose={closeModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StarJar;