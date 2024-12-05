"use client";

import { motion } from 'framer-motion';
import { Code, Link as LinkIcon, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: "Project Name 1",
    description: "A brief description of the project and its key features. Highlight the main technologies used and the problems solved.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    tech: ["React", "Node.js", "MongoDB"],
    links: {
      live: "https://project1.com",
      github: "https://github.com/username/project1"
    }
  },
  {
    title: "Project Name 2",
    description: "Another amazing project description. Talk about the challenges overcome and the impact made.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    links: {
      live: "https://project2.com",
      github: "https://github.com/username/project2"
    }
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 p-6"
    >
      <h2 className="text-xl flex items-center gap-2">
        <Code className="w-5 h-5" />
        Inventory
      </h2>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="ff-window"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/3 h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-lg text-blue-300">{project.title}</h3>
                
                <p className="text-xs leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="text-xs px-2 py-1 bg-blue-900 rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.links.live}
                    target="_blank"
                    className="ff-button text-xs"
                  >
                    <LinkIcon className="w-4 h-4" />
                    Live Demo
                  </Link>
                  
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="ff-button text-xs"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}