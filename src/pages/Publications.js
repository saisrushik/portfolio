import { researchPublications } from "../data/portfolioData";
import SectionWrapper from "../components/SectionWrapper";
import { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { HiDocumentText, HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Publications() {
  const [expanded, setExpanded] = useState({});

  function toggleExpand(idx) {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }

  return (
    <SectionWrapper title="Research Publications">
      <StaggerContainer className="space-y-6">
        {researchPublications.map((pub, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md p-6 md:p-8 card-hover group"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/30 rounded-xl text-indigo-600 dark:text-indigo-400 hidden sm:block shadow-sm"
                >
                  <HiDocumentText size={28} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {pub.journal} &middot; {pub.year}
                  </p>
                  <div className="relative mb-4">
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pr-20">
                      {expanded[index]
                        ? pub.abstract
                        : pub.abstract && pub.abstract.length > 300
                        ? pub.abstract.slice(0, 300) + "..."
                        : pub.abstract}
                    </p>
                    {pub.abstract && pub.abstract.length > 300 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="absolute right-0 bottom-0 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      >
                        {expanded[index] ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                  >
                    View Publication <HiExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
