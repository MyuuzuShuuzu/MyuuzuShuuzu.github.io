"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 space-y-8"
    >
      <div className="space-y-4">
        <h1 className="text-2xl typing-cursor">Your Name</h1>
        <h2 className="text-lg text-blue-300">Full-Stack Software Developer</h2>
      </div>

      <div className="space-y-6">
        <motion.div
          className="ff-window inline-block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-sm mb-2">STATS</h3>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p>HP: ████████ 80/80</p>
              <p>MP: ███████░ 70/80</p>
              <p>EXP: Level 7</p>
            </div>
            <div>
              <p>STR: 65</p>
              <p>DEX: 75</p>
              <p>INT: 85</p>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-4">
          <Link href="/contact" className="ff-button">
            <span className="text-xs">Contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link href="/resume.pdf" className="ff-button">
            <span className="text-xs">Resume</span>
            <Download className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}