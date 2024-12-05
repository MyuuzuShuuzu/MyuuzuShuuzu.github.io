"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Company",
    period: "2020 - Present",
    location: "San Francisco, CA",
    achievements: [
      "Led development of key features",
      "Mentored junior developers",
      "Improved system performance by 40%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inc",
    period: "2018 - 2020",
    location: "New York, NY",
    achievements: [
      "Built scalable microservices",
      "Implemented CI/CD pipeline",
      "Reduced deployment time by 60%"
    ]
  }
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "University Name",
    period: "2014 - 2018",
    location: "Boston, MA",
    courses: [
      "Data Structures",
      "Algorithms",
      "Software Engineering"
    ]
  }
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 p-6"
    >
      <section className="space-y-6">
        <h2 className="text-xl flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Quest Log
        </h2>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="ff-window"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg text-blue-300">{exp.title}</h3>
                <p className="text-sm">{exp.company}</p>
              </div>
              <div className="text-xs text-right">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </div>
              </div>
            </div>
            
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="text-xs flex items-center gap-2"
                >
                  <span className="text-yellow-300">→</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-xl flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Training Grounds
        </h2>
        
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="ff-window"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg text-blue-300">{edu.degree}</h3>
                <p className="text-sm">{edu.school}</p>
              </div>
              <div className="text-xs text-right">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </div>
              </div>
            </div>
            
            <div className="text-xs">
              <h4 className="mb-2">Key Learnings:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {edu.courses.map((course, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-yellow-300">★</span>
                    {course}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}