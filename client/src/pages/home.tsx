import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
