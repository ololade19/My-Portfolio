import { Button } from '@/components/ui/button';
import { Github, Twitter, MessageCircle, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const slideUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0 }
};

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 lg:pt-28 lg:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Lawal Al-Ameen</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              A passionate <span className="text-emerald-600 dark:text-emerald-400 font-semibold">15-year-old web developer</span> from Nigeria, creating modern and responsive web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="https://github.com/ololade19" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl">
                <Github />
              </a>
              <a href="https://x.com/lawalalameen09" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl">
                <Twitter />
              </a>
              <a href="http://wa.me/2349110002160?text=Hi+Al-Ameen+Lawal,+I+contacted+you+from+your+portfolio" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-2xl">
                <MessageCircle />
              </a>
              <a href="https://web.facebook.com/AyobamiFC/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl">
                <Facebook />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            variants={slideUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <div className="text-8xl text-slate-400 dark:text-slate-500">👨‍💻</div>
                </div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
                <div className="text-xl">⚡</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
