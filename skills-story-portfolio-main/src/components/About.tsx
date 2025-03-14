
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-card p-1 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/70c75227-a268-4054-b875-15f819b1a4e3.png"
                  alt="About Me"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              Full Stack Developer with a passion for creating exceptional digital experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I specialize in building modern, responsive web applications that provide seamless user experiences. With expertise in both frontend and backend technologies, I bring ideas to life from concept to deployment.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              My approach to development focuses on creating clean, maintainable code that scales well and adapts to changing requirements. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">React</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">PostgreSQL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
