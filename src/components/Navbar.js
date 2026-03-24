import { useState, useRef, useCallback } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { projectCategories } from "../data/portfolioData";
import { HiSun, HiMoon, HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "About" },
  { path: "/education", label: "Education" },
  { path: "/experience", label: "Experience" },
  { path: "/publications", label: "Publications" },
  { path: "/projects", label: "Projects", hasDropdown: true },
  { path: "/certifications", label: "Certifications" },
  { path: "/contact", label: "Contact" },
];

function ProjectsDropdown({ onNavigate }) {
  const navigate = useNavigate();
  const navToCategory = useCallback((catKey) => {
    navigate(`/projects?filter=${catKey}&t=${Date.now()}`);
  }, [navigate]);
  const navToAll = useCallback(() => {
    navigate(`/projects?t=${Date.now()}`);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-full left-0 mt-1 w-60 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-blue-100 dark:border-gray-700 overflow-hidden z-50"
    >
      <div className="py-1.5">
        <button
          onClick={() => { navToAll(); onNavigate(); }}
          className="w-full text-left px-4 py-2.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
        >
          All Projects
        </button>
        <div className="h-px bg-blue-50 dark:bg-gray-700 mx-3" />
        {projectCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => { navToCategory(cat.key); onNavigate(); }}
            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {cat.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hoverTimeout = useRef(null);

  const navToCategory = useCallback((catKey) => {
    navigate(`/projects?filter=${catKey}&t=${Date.now()}`);
  }, [navigate]);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setProjectsOpen(false), 200);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-blue-100 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold gradient-text tracking-tight">
            &lt;Portfolio /&gt;
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={item.path}
                      className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-0.5"
                    >
                      <span
                        className={
                          isActive
                            ? "text-primary-600 dark:text-primary-400"
                            : "text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                        }
                      >
                        {item.label}
                      </span>
                      <motion.span
                        animate={{ rotate: projectsOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={
                          isActive
                            ? "text-primary-600 dark:text-primary-400"
                            : "text-gray-400 dark:text-gray-500"
                        }
                      >
                        <HiChevronDown size={14} />
                      </motion.span>
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-1 right-1 h-0.5 bg-primary-500 rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </NavLink>
                    <AnimatePresence>
                      {projectsOpen && (
                        <ProjectsDropdown onNavigate={() => setProjectsOpen(false)} />
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span
                    className={
                      isActive
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                    }
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-1 right-1 h-0.5 bg-primary-500 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
            <motion.button
              whileTap={{ rotate: 180, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full bg-blue-100 dark:bg-gray-700 text-primary-600 dark:text-yellow-300 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileTap={{ rotate: 180, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-blue-100 dark:bg-gray-700 text-primary-600 dark:text-yellow-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
            </motion.button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-blue-100 dark:border-gray-700"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);

                if (item.hasDropdown) {
                  return (
                    <div key={item.path}>
                      <div className="flex items-center">
                        <NavLink
                          to={item.path}
                          onClick={() => { setMenuOpen(false); setMobileProjectsOpen(false); }}
                          className={`flex-1 block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                              : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800"
                          }`}
                        >
                          {item.label}
                        </NavLink>
                        <button
                          onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                          className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <motion.span
                            animate={{ rotate: mobileProjectsOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="block"
                          >
                            <HiChevronDown size={16} />
                          </motion.span>
                        </button>
                      </div>
                      <AnimatePresence>
                        {mobileProjectsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 pl-3 border-l-2 border-primary-200 dark:border-primary-800 space-y-0.5 py-1">
                              {projectCategories.map((cat) => (
                                <button
                                  key={cat.key}
                                  onClick={() => { navToCategory(cat.key); setMenuOpen(false); setMobileProjectsOpen(false); }}
                                  className="w-full text-left block py-2 px-3 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                  {cat.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
