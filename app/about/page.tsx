"use client";

import { motion } from 'framer-motion';
import { Code, Brain, Heart, Star } from 'lucide-react';

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
  { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 p-6"
    >
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        className="ff-window"
      >
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Character Background
        </h2>
        <p className="text-sm leading-relaxed">
          A passionate developer with a quest to create meaningful digital experiences. 
          Specializing in full-stack development, I combine technical expertise with 
          creative problem-solving to craft elegant solutions.
        </p>
      </motion.div>

      <div className="ff-window">
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Star className="w-5 h-5" />
          Skills & Abilities
        </h2>
        <div className="grid gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-sm mb-2 text-blue-300 flex items-center gap-2">
                <Code className="w-4 h-4" />
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="text-xs"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-300">★</span>
                      {skill}
                    </div>
                    <div className="h-2 bg-blue-900 mt-1 rounded">
                      <motion.div
                        className="h-full bg-blue-400 rounded"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        className="ff-window"
      >
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5" />
          Special Abilities
        </h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">→</span>
            Problem-solving expertise
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">→</span>
            Strong communication skills
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">→</span>
            Team collaboration mastery
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}