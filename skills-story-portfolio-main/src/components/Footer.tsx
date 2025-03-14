
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
