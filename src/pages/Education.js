import { education } from "../data/portfolioData";
import SectionWrapper from "../components/SectionWrapper";
import { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { HiAcademicCap } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <SectionWrapper title="Education">
      <StaggerContainer className="space-y-8">
        {education.map((edu, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md p-6 md:p-8 card-hover"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-3 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/40 dark:to-blue-900/30 rounded-xl text-primary-600 dark:text-primary-400 hidden sm:block shadow-sm"
                >
                  <HiAcademicCap size={28} />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-sm bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {edu.institution} &middot; {edu.location}
                  </p>
                  <p className="text-sm text-primary-500 dark:text-primary-500 font-semibold mb-4">
                    GPA: {edu.gpa}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <motion.span
                          key={course}
                          whileHover={{ scale: 1.08 }}
                          className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-gray-300 rounded-full text-xs font-medium border border-blue-100 dark:border-gray-600 cursor-default"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
