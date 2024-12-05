"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const contactInfo = {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername"
};

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 p-6"
    >
      <h2 className="text-xl flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        Guild Hall
      </h2>

      <div className="grid gap-6">
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="ff-window"
        >
          <h3 className="text-lg mb-4 text-blue-300">Ready to start a quest together?</h3>
          <p className="text-sm mb-6">
            I'm always interested in new challenges and opportunities. 
            Feel free to reach out through any of these channels!
          </p>

          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ff-button"
            >
              <Link
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 w-full"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs">{contactInfo.email}</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ff-button"
            >
              <Link
                href={contactInfo.linkedin}
                target="_blank"
                className="flex items-center gap-3 w-full"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs">LinkedIn Profile</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ff-button"
            >
              <Link
                href={contactInfo.github}
                target="_blank"
                className="flex items-center gap-3 w-full"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs">GitHub Profile</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          className="ff-window"
        >
          <h3 className="text-lg mb-4 text-blue-300">Quest Board Status</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-green-400">●</span>
              Available for freelance work
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-400">●</span>
              Open to full-time opportunities
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-400">●</span>
              Interested in collaborations
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}