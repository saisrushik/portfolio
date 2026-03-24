import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../components/SectionWrapper";
import AnimatedSection from "../components/AnimatedSection";
import { HiMail, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_yv38o7l",
        "template_vdjkile",
        formRef.current,
        "Ok2AJ0PnFmhTk0ngb"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ from_name: "", from_email: "", phone: "", subject: "", message: "" });
        },
        () => {
          setStatus("error");
        }
      )
      .finally(() => setLoading(false));
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-blue-100 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-md";

  return (
    <SectionWrapper title="Contact Me">
      <AnimatedSection>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-center text-lg leading-relaxed">
            Whether you&apos;re looking to collaborate on a project, have a research
            opportunity, or want to hire me for a role — I&apos;d love to hear from you!
          </p>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-5 py-4 rounded-xl border border-green-200 dark:border-green-800"
            >
              <HiCheckCircle size={22} />
              <span>Message sent successfully! I&apos;ll get back to you soon.</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-2 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-5 py-4 rounded-xl border border-red-200 dark:border-red-800"
            >
              <HiExclamationCircle size={22} />
              <span>Something went wrong. Please try again or email me directly.</span>
            </motion.div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Phone Number <span className="text-gray-400 dark:text-gray-500 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select a reason...</option>
                <option value="Collaboration">Collaboration on a project</option>
                <option value="Hiring">Hiring for a role</option>
                <option value="Research">Research opportunity</option>
                <option value="General">General inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project, opportunity, or question..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-500 to-blue-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
            >
              <HiMail size={20} />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-6">
            Or reach me directly at{" "}
            <a
              href="mailto:saisrushik98@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              saisrushik98@gmail.com
            </a>
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
