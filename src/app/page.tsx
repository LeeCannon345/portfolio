'use client';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="animated-bg min-h-screen flex flex-col justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }}
        className="bg-black bg-opacity-60 p-8 rounded-lg max-w-4xl text-center"
      >
        <div className="text-lg sm:text-xl italic text-gray-300 mb-4">
          I’m a Software Engineer
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight max-w-5xl text-white drop-shadow-lg">
          Building Scalable, User-First Software <br /> with Precision and Purpose
        </h1>

        <div className="mt-8">
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </div>
  );
}
