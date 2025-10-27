import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/10 dark:border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
          <a href="mailto:aasr20is@cmrit.ac.in" className="text-blue-600 dark:text-blue-400">aasr20is@cmrit.ac.in</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
