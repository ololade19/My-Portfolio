import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Clock, Github, Twitter, Instagram, Send, MessageCircle, Facebook, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      }, 2000);
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
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
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
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm always excited to work on new projects and collaborate with fellow developers and designers. Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp}>
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">lawalalameen09@gmail.com</p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                  <MapPin className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">Nigeria</p>
                </div>
              </div>
              {/* Time */}
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

            {/* Social Links */}
            <motion.div className="pt-6" variants={fadeInUp}>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {/* Repeatable buttons */}
                {[
                  { icon: <Github className="w-6 h-6" />, url: "https://github.com/ololade19" },
                  { icon: <Twitter className="w-6 h-6" />, url: "https://x.com/lawalalameen09" },
                  { icon: <MessageCircle className="w-6 h-6" />, url: "http://wa.me/2349110002160?text=Hi+Al-Ameen+Lawal+I%20+contact+you+from+your+portfolio" },
                  { icon: <Facebook className="w-6 h-6" />, url: "https://web.facebook.com/AyobamiFC/" },
                  { icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/ayobami_fc1/" },
                ].map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-600 dark:text-slate-400 hover:text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300">
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl">
              <CardContent className="p-0">
                {/* Success Animation Overlay */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center z-10"
                    >
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                          className="w-20 h-20 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-6 h-6 text-white" />
                          </motion.div>
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7, duration: 0.3 }}
                          className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2"
                        >
                          Message Sent!
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.3 }}
                          className="text-slate-600 dark:text-slate-400"
                        >
                          Thanks for reaching out!
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required />
                  </div>
                  <Button type="submit" disabled={contactMutation.isPending} className="w-full">
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
