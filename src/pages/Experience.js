import { workExperience } from "../data/portfolioData";
import SectionWrapper from "../components/SectionWrapper";
import { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { HiBriefcase } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <SectionWrapper title="Work Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-200 dark:from-primary-700 dark:via-primary-600 dark:to-primary-800 hidden md:block" />

        <StaggerContainer className="space-y-8">
          {workExperience.map((exp, index) => (
            <StaggerItem key={index}>
              <div className="relative md:pl-12">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="absolute left-1.5 top-8 w-5 h-5 bg-primary-500 rounded-full border-4 border-surface-light dark:border-gray-900 hidden md:block shadow-md shadow-primary-200 dark:shadow-primary-900"
                />

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass-card bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md p-6 md:p-8 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      className="p-3 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/40 dark:to-blue-900/30 rounded-xl text-primary-600 dark:text-primary-400 hidden sm:block shadow-sm"
                    >
                      <HiBriefcase size={28} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="text-sm bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                        {exp.company} &middot; {exp.location}
                      </p>
                      <ul className="space-y-2.5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-blue-400 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
