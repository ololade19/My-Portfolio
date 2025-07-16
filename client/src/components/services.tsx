import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Server, Smartphone, Palette, Zap, Wrench, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';

const services = [
  {
    icon: Laptop,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using modern frameworks like React, Vue.js, and Angular.',
    features: [
      'Responsive Web Design',
      'Modern JavaScript Frameworks',
      'Performance Optimization'
    ],
    color: 'bg-blue-100 dark:bg-blue-900',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: Server,
    title: 'Full-Stack Development',
    description: 'Building complete web applications with both frontend and backend technologies for seamless user experiences.',
    features: [
      'MERN Stack Applications',
      'API Development',
      'Database Design'
    ],
    color: 'bg-emerald-100 dark:bg-emerald-900',
    iconColor: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Designing and developing websites that work perfectly on all devices, from mobile phones to desktops.',
    features: [
      'Progressive Web Apps',
      'Cross-Platform Compatibility',
      'Touch-Friendly Interfaces'
    ],
    color: 'bg-purple-100 dark:bg-purple-900',
    iconColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that provide excellent user experiences.',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Design Systems'
    ],
    color: 'bg-orange-100 dark:bg-orange-900',
    iconColor: 'text-orange-600 dark:text-orange-400'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing websites for speed, accessibility, and search engine visibility.',
    features: [
      'Speed Optimization',
      'SEO Implementation',
      'Accessibility Standards'
    ],
    color: 'bg-red-100 dark:bg-red-900',
    iconColor: 'text-red-600 dark:text-red-400'
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Providing ongoing support and maintenance to keep your website running smoothly.',
    features: [
      'Regular Updates',
      'Security Monitoring',
      'Bug Fixes & Improvements'
    ],
    color: 'bg-teal-100 dark:bg-teal-900',
    iconColor: 'text-teal-600 dark:text-teal-400'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            What I can offer to help bring your ideas to life
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={staggerChildren.initial}
          whileInView={staggerChildren.animate}
          transition={staggerChildren.transition}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <Card className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-0">
                  <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className={`${service.iconColor} w-8 h-8`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
