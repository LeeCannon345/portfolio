'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 via-black to-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
          About Me
        </h1>

       
          <p className="text-center text-lg text-gray-300">
            I'm a software engineer passionate about turning complex problems into intuitive, human-centered digital solutions. I bring backend logic and frontend finesse to every project I touch.
          </p>

          <p>
            Whether it's a travel planner built in Java + Firebase or a live sports tracking app powered by SQL and external APIs, I focus on delivering scalable, user-first products.
          </p>

          <p>
            With hands-on experience in Java, TypeScript, and SQL, I build applications with clean, maintainable code. I believe great software starts with empathy for the user and ends with technical excellence.
          </p>

          <p>
            Outside of work, I am exploring AI tools, learning new tech stacks, and sharpening my skills through open-source projects and real-world builds.
          </p>
        

        <div className="mt-10">
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
