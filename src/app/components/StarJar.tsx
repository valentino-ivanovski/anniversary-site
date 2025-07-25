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
        image: "/images/1.jpg",
        text: "Found a valuable piece of toilet paper in my wallet.",
        date: "July 25, 2025"
    },
    {
        id: 2,
        image: "/images/2.jpeg",
        text: "Finally Tinche came back!!",
        date: "April 18, 2025"
    },
    {
        id: 3,
        image: "/images/3.jpeg",
        text: "Small trip to the water toboggan <3",
        date: "April 20, 2025"
    },
    {
        id: 4,
        image: "/images/4.jpeg",
        text: "I loved watching you work.",
        date: "April 28, 2025"
    },
    {
        id: 5,
        image: "/images/5.jpeg",
        text: "The day we spent on a picnic. Perhaps my favorite day of the year.",
        date: "May 3rd, 2025"
    },
    {
        id: 6,
        image: "/images/6.jpg",
        text: "The picnic in the park where we spent hours talking about everything and nothing.",
        date: "April 10, 2023"
    },
    {
        id: 7,
        image: "/images/7.JPG",
        text: "I was amazed by your skills!! I couldn't climb up there!",
        date: "April 19, 2025"
    },
    {
        id: 8,
        image: "/images/8.jpeg",
        text: "I just had to snap a pic while we were working on the wardrobes loll",
        date: "June 21, 2025"
    },
    {
        id: 9,
        image: "/images/9.jpeg",
        text: "We sat for hours and enjoyed every single second of it.",
        date: "September 25, 2024"
    },
    {
        id: 10,
        image: "/images/10.jpeg",
        text: "The date we didn't plan but turned out to be one of the best nights.",
        date: "December 12, 2024"
    },
    {
        id: 11,
        image: "/images/11.jpeg",
        text: "We made gingerbread cookies!!!! My first time trying, I loved em!!",
        date: "December 17th, 2024"
    },
    {
        id: 12,
        image: "/images/12.jpeg",
        text: "Waiting for the bus together, on the way to ice skating!",
        date: "December 17, 2025"
    },
    {
        id: 13,
        image: "/images/13.jpeg",
        text: "Finally reunited with my baby girl!!!!!",
        date: "June 19, 2025"
    },
    {
        id: 14,
        image: "/images/14.jpeg",
        text: "Beautiful trip to the beach, spending the first day in Ohrid nicely c:",
        date: "June 19, 2025"
    },
    {
        id: 15,
        image: "/images/15.jpeg",
        text: "SPA NIGHTT!!!! HAVING A GREAT TIME TOGETHER",
        date: "July 12, 2025"
    },
    {
        id: 16,
        image: "/images/16.jpeg",
        text: "Sveti Naum for the 4th time cause my dad likes taking us there for some reason hehehe",
        date: "June 22, 2025"
    },
    {
        id: 17,
        image: "/images/17.jpeg",
        text: "I had to stop for a second to snap a pic cause u looked so nice!",
        date: "June 22,"
    },
    {
        id: 18,
        image: "/images/18.jpeg",
        text: "We played your song on the guitar together!!!",
        date: "January 24, 2025"
    },
    {
        id: 19,
        image: "/images/19.jpeg",
        text: "On a nice walk to Cuba Libre, enjoying the beautiful weather.",
        date: "January 27, 2025"
    },
    {
        id: 20,
        image: "/images/20.jpeg",
        text: "Small bike ride to the lake, took pics of the swans :3",
        date: "July 10, 2025"
    },
    {
        id: 21,
        image: "/images/21.jpeg",
        text: "Tronky.",
        date: "July 11, 2025"
    },
    {
        id: 22,
        image: "/images/22.jpeg",
        text: "Driver let us take pics of the beach!",
        date: "July 15, 2025"
    },
    {
        id: 23,
        image: "/images/23.jpeg",
        text: "Off to the beach, first day in Greece!",
        date: "July 16, 2025"
    },
    {
        id: 24,
        image: "/images/24.jpeg",
        text: "First date in Greece! It was a nice one.",
        date: "July 17, 2025"
    },
    {
        id: 25,
        image: "/images/25.jpeg",
        text: "A view to die for 😻",
        date: "July 17, 2025"
    },
    {
        id: 26,
        image: "/images/26.jpeg",
        text: "MINECRAFTTTTT MOVIE NIGHTTTT",
        date: "April 27, 2025"
    },
    {
        id: 27,
        image: "/images/27.png",
        text: "When I saw this I couldn't help but tear up.",
        date: "April 18, 2025"
    },
    {
        id: 28,
        image: "/images/28.jpeg",
        text: "Went on a date, my uncle surprised us with a song!!",
        date: "July 14, 2025"
    },
    {
        id: 29,
        image: "/images/29.png",
        text: "Your mom and aunt visited, so much fun!",
        date: "November 10, 2024"
    },

    {
        id: 30,
        image: "/images/30.png",
        text: "Looked so damn fine had to take a ss somehow, IGNORE MY FACE",
        date: "December 30, 2024"
    },
    {
        id: 31,
        image: "/images/31.png",
        text: "Watched brooklyn 99 together, even though you were on the other side of the world.",
        date: "January 4, 2025"
    },
    {
        id: 32,
        image: "/images/32.jpg",
        text: "We didn't take a picture of ourselves on this night but I tried generating it with AI <3",
        date: "July 19, 2024"
    },
    {
        id: 33,
        image: "/images/33.jpg",
        text: "I loved watching you cook <3",
        date: "November 2, 2024"
    }
    ,
    {
        id: 34,
        image: "/images/34.jpg",
        text: "Halloween night, pizzas, Over the Garden Wall and my baby <3",
        date: "October 28, 2024"
    },
    {
        id: 35,
        image: "/images/35.jpg",
        text: "Trip to Ljubljana, turned out to be a two day trip ehheheh",
        date: "October 18, 2024"
    },
    {
        id: 36,
        image: "/images/36.jpg",
        text: "Lidl trip, loved these walks so fucking much!!",
        date: "October 26, 2024"
    },
    {
        id: 37,
        image: "/images/37.jpg",
        text: "If only we could've lived in Koper together........ RAHH",
        date: "September 18, 2024"
    },
    {
        id: 38,
        image: "/images/38.jpg",
        text: "My baby always making me laugh <3",
        date: "September 25, 2024"
    },
    {
        id: 39,
        image: "/images/35.jpeg",
        text: "Who would've thought that one day you would be sitting on my lap, in my own house..",
        date: "June, 2025"
    },
    {
        id: 40,
        image: "/images/40.jpg",
        text: "Don't forget where our house was <3",
        date: "September 25, 2024"
    },
    {
        id: 41,
        image: "/images/41.jpg",
        text: "The only reason I survived Hamburg",
        date: "August 10, 2024"
    },
    {
        id: 42,
        image: "/images/42.jpg",
        text: "The day you crashed into my house WITHOUT ME BEING THERE",
        date: "March 21, 2025"
    },
    {
        id: 43,
        image: "/images/43.jpg",
        text: "You never found out about this mUAHAHHAHA",
        date: "September 28, 2024"
    },
    {
        id: 44,
        image: "/images/44.jpg",
        text: "Leaving for Piran here, you said you never seen this pic before lol",
        date: "July 29, 2024"
    },
    {
        id: 45,
        image: "/images/45.jpg",
        text: "I will always remember this view.",
        date: "July, 2024"
    },
    {
        id: 46,
        image: "/images/45.jpg",
        text: "The Lightning Kiss",
        date: "September 11, 2024"
    },
    {
        id: 47,
        image: "/images/47.jpg",
        text: "God we're slaying on this pic (idk why im in jammies)",
        date: "February 19, 2025"
    }
];

const StarJar: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastMemoryId, setLastMemoryId] = useState<number | null>(null);

  const handleJarClick = () => {
    if (isAnimating) return;

    let randomMemory: Memory;
    do {
      randomMemory = memories[Math.floor(Math.random() * memories.length)];
    } while (randomMemory.id === lastMemoryId && memories.length > 1);

    setIsAnimating(true);

    setTimeout(() => {
      setSelectedMemory(randomMemory);
      setLastMemoryId(randomMemory.id);
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
        <p className="text-yellow-100 sm:text-lg text-sm leading-relaxed font-medium italic sm:px-4 px-6">
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