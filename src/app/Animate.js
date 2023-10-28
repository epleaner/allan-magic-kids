'use client';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  hidden: { opacity: 0 },
};

export const itemVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function Animate({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        className='relative flex h-screen flex-col items-center'
        initial='hidden'
        animate='visible'
        {...{ variants }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
