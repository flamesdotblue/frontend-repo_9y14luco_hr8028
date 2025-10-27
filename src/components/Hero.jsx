import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            SE2 Candidate • Tech Portfolio
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Building reliable, modern web apps
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Full‑stack developer focused on React, FastAPI, and cloud‑ready systems. I care about clean code,
            strong fundamentals, and delivering impact.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium hover:opacity-90">
              Learn more
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-blue-500">
              Contact me
            </a>
            <a
              href="mailto:aasr20is@cmrit.ac.in?subject=Interview%20Opportunity&body=Hi%2C%20I%27d%20like%20to%20connect%20regarding%20an%20SE2%20role."
              className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-5 py-2.5 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10"
            >
              Quick email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
