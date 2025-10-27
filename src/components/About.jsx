export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">About</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a developer targeting Software Engineer 2 roles. My strengths are system design basics,
              frontend architecture with React, and backend APIs with FastAPI and Python. I enjoy turning ideas
              into polished, production‑ready experiences with attention to performance, accessibility, and DX.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind', 'Node.js', 'Python', 'FastAPI', 'MongoDB', 'Docker', 'Git', 'CI/CD'].map((s) => (
                  <li key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-100 border border-black/5 dark:border-white/10">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Highlights</h3>
              <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Built responsive UIs with reusable component systems and state management.</li>
                <li>• Designed REST APIs with validation, auth patterns, and robust error handling.</li>
                <li>• Improved performance with code‑splitting, caching, and query optimization.</li>
              </ul>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal details</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-300">Role</dt>
                  <dd className="text-gray-900 dark:text-gray-100">Software Engineer (SE2)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-300">Specialization</dt>
                  <dd className="text-gray-900 dark:text-gray-100">Full‑stack (React • FastAPI)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-300">Email</dt>
                  <dd className="text-blue-600 dark:text-blue-400">
                    <a href="mailto:aasr20is@cmrit.ac.in">aasr20is@cmrit.ac.in</a>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-300">Location</dt>
                  <dd className="text-gray-900 dark:text-gray-100">India</dd>
                </div>
              </dl>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-500"
              >
                Get in touch
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
