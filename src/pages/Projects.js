import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { projects, projectCategories } from "../data/portfolioData";
import SectionWrapper from "../components/SectionWrapper";
import { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { HiExternalLink, HiFilter } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter");
  const navTimestamp = searchParams.get("t");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // When navigating from navbar dropdown, replace selection entirely
  useEffect(() => {
    if (initialFilter && projectCategories.some((c) => c.key === initialFilter)) {
      setSelectedCategories([initialFilter]);
    } else {
      setSelectedCategories([]);
    }
  }, [initialFilter, navTimestamp]);

  const toggleCategory = (key) => {
    setSelectedCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const clearFilters = () => setSelectedCategories([]);

  const filtered =
    selectedCategories.length === 0
      ? projects
      : projects.filter((p) => selectedCategories.includes(p.category));

  const filterKey = selectedCategories.length === 0 ? "all" : [...selectedCategories].sort().join(",");

  return (
    <SectionWrapper title="Projects">
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 mr-1">
          <HiFilter size={16} /> Filters:
        </span>
        {projectCategories.map((cat) => {
          const isSelected = selectedCategories.includes(cat.key);
          const count = projects.filter((p) => p.category === cat.key).length;
          return (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border flex items-center gap-1.5 ${
                isSelected
                  ? "bg-gradient-to-r from-primary-500 to-blue-500 text-white border-transparent shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-blue-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
            >
              {cat.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-blue-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
        {selectedCategories.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearFilters}
            className="px-3 py-2 rounded-full text-sm font-medium text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border border-red-200 dark:border-red-800 transition-colors"
          >
            Clear all
          </motion.button>
        )}
      </div>

      {/* Active filter summary */}
      {selectedCategories.length > 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""} in:{" "}
          {selectedCategories
            .map((k) => projectCategories.find((c) => c.key === k)?.label)
            .join(", ")}
        </p>
      )}

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filterKey}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {filtered.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((project) => (
                <StaggerItem key={project.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="glass-card bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-md overflow-hidden card-hover group h-full flex flex-col"
                  >
                    <div className="overflow-hidden relative">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-600 dark:text-primary-400 border border-blue-100 dark:border-gray-700">
                        {projectCategories.find((c) => c.key === project.category)?.label}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-blue-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium border border-blue-100 dark:border-primary-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-lg text-sm font-medium hover:from-primary-600 hover:to-blue-600 transition-all shadow-sm hover:shadow-md"
                        >
                          Live Demo <HiExternalLink size={16} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all shadow-sm"
                        >
                          <FaGithub size={16} /> Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">&#128194;</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                There are no projects matching the selected {selectedCategories.length === 1 ? "category" : "categories"}.
                <br />Try selecting different filters or clear all filters to view all projects.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearFilters}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
              >
                View All Projects
              </motion.button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
