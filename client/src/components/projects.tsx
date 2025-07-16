import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren, scaleOnHover } from '@/lib/animations';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    technologies: ['React', 'Node.js', 'HTML5', 'CSS3', 'JavaScript'],
    category: ['React', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'PWA'],
    category: ['Vue.js', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with location-based forecasts and interactive weather maps.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    category: ['React', 'API'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media management dashboard with analytics and post scheduling.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'D3.js'],
    category: ['Next.js', 'GraphQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing creative work with smooth animations and modern design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Framer Motion'],
    category: ['Angular', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'An educational platform with course management, progress tracking, and interactive learning features.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: ['MERN', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my best work and creative solutions
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={staggerChildren.initial}
          whileInView={staggerChildren.animate}
          transition={staggerChildren.transition}
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {project.category.map((cat) => (
                      <Badge key={cat} className="bg-blue-600 text-white">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button 
                      variant="link"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-0"
                      asChild
                    >
                      <a href={project.liveUrl}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="link"
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 p-0"
                      asChild
                    >
                      <a href={project.githubUrl}>
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
