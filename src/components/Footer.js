import { socialLinks } from "../data/portfolioData";
import { FaLinkedin, FaGithub, FaMedium, FaKaggle, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiCube } from "react-icons/hi";
import { motion } from "framer-motion";

const icons = [
  { href: socialLinks.linkedin, icon: <FaLinkedin size={20} />, label: "LinkedIn" },
  { href: socialLinks.github, icon: <FaGithub size={20} />, label: "GitHub" },
  { href: socialLinks.medium, icon: <FaMedium size={20} />, label: "Medium" },
  { href: socialLinks.kaggle, icon: <FaKaggle size={20} />, label: "Kaggle" },
  { href: socialLinks.leetcode, icon: <SiLeetcode size={20} />, label: "LeetCode" },
  { href: socialLinks.googleScholar, icon: <FaGraduationCap size={20} />, label: "Google Scholar" },
  { href: socialLinks.deepml, icon: <HiCube size={20} />, label: "DeepML" },
  { href: socialLinks.email, icon: <FaEnvelope size={20} />, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-white/60 dark:bg-gray-800/80 backdrop-blur-sm border-t border-blue-100 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-3">
            {icons.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                aria-label={item.label}
                title={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
