
import { motion } from "framer-motion";
import { Code, Database, Workflow, Braces } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blob effect */}
      <div className="hero-blob top-1/4 left-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="text-gradient">Full Stack</span> Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-lg">
              I build beautiful, functional, and accessible web applications with modern technologies.
            </p>
            
            {/* Tech stack with icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <div className="flex items-center gap-1.5 bg-secondary/50 dark:bg-secondary/20 px-3 py-1.5 rounded-full">
                <Braces size={16} className="text-blue-500" />
                <span className="text-sm font-medium">React.js</span>
              </div>
              <div className="flex items-center gap-1.5 bg-secondary/50 dark:bg-secondary/20 px-3 py-1.5 rounded-full">
                <Database size={16} className="text-red-500" />
                <span className="text-sm font-medium">Laravel</span>
              </div>
              <div className="flex items-center gap-1.5 bg-secondary/50 dark:bg-secondary/20 px-3 py-1.5 rounded-full">
                <Workflow size={16} className="text-green-500" />
                <span className="text-sm font-medium">n8n</span>
              </div>
              <div className="flex items-center gap-1.5 bg-secondary/50 dark:bg-secondary/20 px-3 py-1.5 rounded-full">
                <Code size={16} className="text-purple-500" />
                <span className="text-sm font-medium">Automa</span>
              </div>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="/lovable-uploads/70c75227-a268-4054-b875-15f819b1a4e3.png" 
                alt="Developer Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center">
            <motion.div 
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
              }}
              className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
