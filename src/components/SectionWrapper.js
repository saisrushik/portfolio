import { motion } from "framer-motion";

export default function SectionWrapper({ title, children }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {title && (
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b-2 border-primary-500 inline-block"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </section>
  );
}
