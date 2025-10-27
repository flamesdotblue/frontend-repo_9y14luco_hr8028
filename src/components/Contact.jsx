import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = 'aasr20is@cmrit.ac.in';
    const subject = encodeURIComponent(`${name || 'Portfolio'} via Website`);
    const bodyLines = [
      `Name: ${name || 'N/A'}`,
      `Email: ${email || 'N/A'}`,
      '',
      message || '',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-gray-50 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Contact</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Want to discuss an SE2 opportunity or collaborate on something impactful? Send a direct email and I’ll respond promptly.
            </p>
            <a
              href="mailto:aasr20is@cmrit.ac.in?subject=Hello%20from%20your%20portfolio"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-blue-500"
            >
              <Mail size={18} /> Email directly
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-transparent px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-transparent px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-transparent px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium hover:opacity-90">
                Send email via mail client
              </button>
              <a
                href="mailto:aasr20is@cmrit.ac.in"
                className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-5 py-2.5 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10"
              >
                Or click to open email
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
