import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (window) {
      setTheme(window.localStorage.getItem('theme') ?? 'light');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={handleClick} className='inline-block align-middle mt-[-7px]'>
      <span className="sr-only">Light and Dark Theme Switch</span>
      {theme === 'light' ? <FaMoon size={24}/> : <IoIosSunny size={24}/>}
    </button>
  );
}
