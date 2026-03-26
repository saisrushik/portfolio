import { personalInfo, aboutMe, socialLinks, testimonial } from "../data/portfolioData";
import { FaLinkedin, FaGithub, FaMedium, FaKaggle, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiCube } from "react-icons/hi";
import SectionWrapper from "../components/SectionWrapper";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const socialIcons = [
  { href: socialLinks.linkedin, icon: <FaLinkedin size={22} />, label: "LinkedIn", color: "hover:bg-blue-600" },
  { href: socialLinks.github, icon: <FaGithub size={22} />, label: "GitHub", color: "hover:bg-gray-800 dark:hover:bg-gray-600" },
  { href: socialLinks.medium, icon: <FaMedium size={22} />, label: "Medium", color: "hover:bg-green-600" },
  { href: socialLinks.kaggle, icon: <FaKaggle size={22} />, label: "Kaggle", color: "hover:bg-cyan-600" },
  { href: socialLinks.leetcode, icon: <SiLeetcode size={22} />, label: "LeetCode", color: "hover:bg-amber-500" },
  { href: socialLinks.googleScholar, icon: <FaGraduationCap size={22} />, label: "Google Scholar", color: "hover:bg-blue-700" },
  { href: socialLinks.deepml, icon: <HiCube size={22} />, label: "DeepML", color: "hover:bg-purple-600" },
  { href: socialLinks.email, icon: <FaEnvelope size={22} />, label: "Email", color: "hover:bg-red-500" },
];

export default function About() {
  return (
    <SectionWrapper>
      {/* Hero */}
      <AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full blur opacity-40 animate-pulse-glow" />
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700 ring-4 ring-primary-200 dark:ring-primary-800"
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3"
            >
              {personalInfo.name}
            </motion.h1>
            <div className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4 h-8">
              <TypeAnimation
                sequence={[
                  personalInfo.roles[0],
                  2000,
                  personalInfo.roles[1],
                  2000,
                  personalInfo.roles[2],
                  2000,
                  personalInfo.roles[3],
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 mb-5 max-w-xl text-lg leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>
            <div className="flex gap-2.5 justify-center md:justify-start flex-wrap">
              {socialIcons.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.07 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2.5 rounded-full bg-blue-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-white ${item.color} transition-all duration-200 shadow-sm hover:shadow-md`}
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection delay={1}>
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-5 pb-3 border-b-2 border-primary-500 inline-block">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            {aboutMe.summary}
          </p>
          <StaggerContainer className="flex flex-wrap gap-3">
            {aboutMe.highlights.map((item) => (
              <StaggerItem key={item}>
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  className="inline-block px-5 py-2.5 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium shadow-sm border border-blue-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-default"
                >
                  {item}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Quote */}
      <AnimatedSection delay={2}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-sky-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-750 rounded-2xl p-10 border border-blue-100 dark:border-gray-700 shadow-lg"
        >
          <div className="absolute top-4 left-6 text-7xl text-primary-200 dark:text-primary-800 font-serif select-none">&ldquo;</div>
          <blockquote className="relative z-10 text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 text-center pt-6 px-4">
            {testimonial.quote}
          </blockquote>
          <p className="text-center mt-5 text-primary-600 dark:text-primary-400 font-semibold text-lg">
            — {testimonial.author}
          </p>
        </motion.div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
