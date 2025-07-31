'use client';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-black to-black text-white px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        {/* Tic Tac Toe */}
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400">
            Tic Tac Toe <span className="text-blue-300">(Java)</span>
          </h2>
          <p className="mt-2 text-gray-300">
            A simple command-line Tic Tac Toe game built in Java. Great for understanding game loops and basic logic.
          </p>
          <a
            href="https://github.com/LeeCannon345/TicTacToe"
            className="text-blue-400 underline inline-block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Loan Calculator */}
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400">
            Loan Calculator <span className="text-blue-300">(Java)</span>
          </h2>
          <p className="mt-2 text-gray-300">
            Calculates loan payments with principal, interest, and term inputs. Includes error handling and clean user interface via Java Swing.
          </p>
          <a
            href="https://github.com/LeeCannon345/LoanCalculator"
            className="text-blue-400 underline inline-block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Fantasy Football Database */}
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400">
            Fantasy Football Stats DB <span className="text-blue-300">(MySQL)</span>
          </h2>
          <p className="mt-2 text-gray-300">
            A fantasy football database schema and queries built with MySQL Workbench to analyze player stats, matchups, and historical data.
          </p>
          <a
            href="https://github.com/LeeCannon345/FantasyFootballSQL"
            className="text-blue-400 underline inline-block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Travel Planner App */}
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400">
            LC Travel Planner <span className="text-blue-300">(Java + Firebase)</span>
          </h2>
          <p className="mt-2 text-gray-300">
            A mobile-first app for planning vacations and excursions. Built using Java, Android Studio, and Firebase for real-time syncing and auth.
          </p>
          <a
            href="https://github.com/LeeCannon345/VacationPlannerApp"
            className="text-blue-400 underline inline-block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Social Media Analyzer */}
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400">
            Social Media Analyzer <span className="text-blue-300">(Python)</span>
          </h2>
          <p className="mt-2 text-gray-300">
            Python project that uses Tweepy and NLTK to fetch tweets and run sentiment analysis. Visualized with matplotlib.
          </p>
          <a
            href="https://github.com/LeeCannon345/SocialMediaAnalyzer"
            className="text-blue-400 underline inline-block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
