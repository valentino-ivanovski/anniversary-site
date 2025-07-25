import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Memory {
  id: number;
  image: string;
  text: string;
  date: string;
}

interface MemoryModalProps {
  memory: Memory | null;
  isOpen: boolean;
  onClose: () => void;
}

const MemoryModal: React.FC<MemoryModalProps> = ({ memory, isOpen, onClose }) => {
  if (!isOpen || !memory) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 h-screen w-screen flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#15224D] rounded-2xl p-4 max-w-md w-full mx-4 transform border border-white/10 shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 bg-white hover:bg-slate-200 rounded-full p-2 transition-colors duration-200"
          >
            <X size={16} className="text-slate-900" />
          </button>
          
          <div className="mb-4">
           <img
              src={memory.image}
              alt="Memory"
              className="w-full h-[90%] object-contain rounded-lg border-2 border-white/10"
            />
          </div>
          
          <div className="text-center">
            <p className="text-white text-lg leading-relaxed mb-4 font-medium">
              {memory.text}
            </p>
            <p className="text-white/70 text-sm font-semibold tracking-wide">
              {memory.date}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MemoryModal;