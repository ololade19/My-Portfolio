import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components effectively.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    category: 'Tutorial',
    categoryColor: 'bg-blue-600',
    tags: ['React', 'JavaScript'],
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Mastering CSS Grid Layout',
    excerpt: 'A comprehensive guide to CSS Grid, covering everything from basic concepts to advanced layout techniques.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    category: 'Guide',
    categoryColor: 'bg-purple-600',
    tags: ['CSS', 'Layout'],
    date: 'March 10, 2024',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Building REST APIs with Node.js',
    excerpt: 'Step-by-step tutorial on creating robust REST APIs using Node.js, Express, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    category: 'Backend',
    categoryColor: 'bg-emerald-600',
    tags: ['Node.js', 'API'],
    date: 'March 5, 2024',
    readTime: '12 min read'
  },
  {
    id: 4,
    title: 'Web Performance Optimization Tips',
    excerpt: 'Essential techniques to improve your website\'s loading speed and user experience.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    category: 'Performance',
    categoryColor: 'bg-red-600',
    tags: ['Performance', 'Optimization'],
    date: 'February 28, 2024',
    readTime: '10 min read'
  },
  {
    id: 5,
    title: 'Mobile-First Responsive Design',
    excerpt: 'Why mobile-first design is essential and how to implement it effectively in your projects.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    category: 'Design',
    categoryColor: 'bg-indigo-600',
    tags: ['Responsive', 'Mobile'],
    date: 'February 22, 2024',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Modern JavaScript ES6+ Features',
    excerpt: 'Explore the latest JavaScript features that will make your code more efficient and readable.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300',
    category: 'JavaScript',
    categoryColor: 'bg-yellow-600',
    tags: ['ES6', 'JavaScript'],
    date: 'February 15, 2024',
    readTime: '7 min read'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sharing knowledge and insights from my development journey
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={staggerChildren.initial}
          whileInView={staggerChildren.animate}
          transition={staggerChildren.transition}
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id} 
              variants={fadeInUp}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${post.categoryColor} text-white`}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="link"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-0"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </motion.article>
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
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
