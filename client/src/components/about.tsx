import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';

const skills = [
  { name: 'HTML5', level: 95, color: 'bg-orange-600', icon: '🟠' },
  { name: 'CSS3', level: 90, color: 'bg-blue-600', icon: '🔵' },
  { name: 'JavaScript', level: 85, color: 'bg-yellow-600', icon: '🟡' },
  { name: 'React', level: 80, color: 'bg-blue-400', icon: '⚛️' },
  { name: 'Node.js', level: 75, color: 'bg-green-600', icon: '🟢' },
  { name: 'Git', level: 85, color: 'bg-red-600', icon: '🔴' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={staggerChildren.initial}
            whileInView={staggerChildren.animate}
            transition={staggerChildren.transition}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                I'm a dedicated 15-year-old web developer from Nigeria with a passion for creating beautiful, functional, and user-friendly websites. Despite my young age, I've immersed myself in the world of web development, constantly learning and improving my skills.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                My journey started with curiosity about how websites work, and it has evolved into a deep love for coding and problem-solving. I believe that age is just a number when it comes to creating amazing digital experiences.
              </p>
            </motion.div>
            
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Education & Background</h3>
              <Card className="bg-slate-50 dark:bg-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                      <GraduationCap className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Self-Taught Developer</h4>
                      <p className="text-slate-600 dark:text-slate-400">Currently studying web development through online courses, tutorials, and practical projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 dark:bg-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-2 rounded-lg">
                      <MapPin className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Based in Nigeria</h4>
                      <p className="text-slate-600 dark:text-slate-400">Working remotely and collaborating with clients worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Skills & Technologies</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
