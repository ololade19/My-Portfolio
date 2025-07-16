import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's work together to create something amazing.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={staggerChildren.initial}
            whileInView={staggerChildren.animate}
            transition={staggerChildren.transition}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm always excited to work on new projects and collaborate with fellow developers and designers. Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </motion.div>
            
            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">lawal.ameen@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                  <MapPin className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                  <Clock className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Response Time</h4>
                  <p className="text-slate-600 dark:text-slate-400">Within 24 hours</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="pt-6" variants={fadeInUp}>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-600 dark:text-slate-400 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-600 dark:text-slate-400 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-600 dark:text-slate-400 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-600 dark:text-slate-400 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
