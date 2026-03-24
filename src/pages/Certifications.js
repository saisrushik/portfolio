import { certifications } from "../data/portfolioData";
import SectionWrapper from "../components/SectionWrapper";
import { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { HiBadgeCheck, HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <SectionWrapper title="Certifications">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md p-6 card-hover flex items-start gap-4 h-full"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-xl text-green-600 dark:text-green-400 flex-shrink-0 shadow-sm"
              >
                <HiBadgeCheck size={28} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  Issued: {cert.date}
                </p>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  View Credential <HiExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
