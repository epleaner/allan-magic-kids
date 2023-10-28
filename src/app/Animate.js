'use client';
import { AnimatePresence, motion } from 'framer-motion';

export default function Animate({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        className='relative flex h-screen flex-col items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
