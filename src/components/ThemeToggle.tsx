import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = stored ? stored === 'dark' : true;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="rounded-full border border-accent px-3 py-1 text-sm text-accent hover:bg-accent hover:text-black transition-colors"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}