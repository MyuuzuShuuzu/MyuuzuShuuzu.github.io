"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sword, User, Briefcase, Code, Mail } from 'lucide-react';

const menuItems = [
  { href: '/', label: 'Home', icon: Sword },
  { href: '/about', label: 'About', icon: User },
  { href: '/experience', label: 'Experience & Education', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: Code },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="ff-menu">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <motion.div key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item.href}
                className={`ff-menu-item flex items-center gap-3 ${isActive ? 'active' : ''}`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs">{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
}