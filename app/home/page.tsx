'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <Head>
        <title>Crypto Trading Platform</title>
        <meta name="description" content="Trade crypto securely and efficiently" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">CryptoTrade</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">About</a></li>
          <li><a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Features</a></li>
          <li><a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Pricing</a></li>
          <li><a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Testimonials</a></li>
          <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a></li>
        </ul>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold">The Future of Crypto Trading</h1>
        <p className="mt-4 text-lg max-w-xl">Trade securely and efficiently with our cutting-edge platform.</p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg">Get Started</button>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">We are a team of experts dedicated to revolutionizing crypto trading with secure and user-friendly solutions.</p>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-200 dark:bg-gray-700 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="p-6 bg-white dark:bg-gray-600 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Secure Transactions</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Your funds are always protected with bank-level security.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-600 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Fast Execution</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Enjoy lightning-fast trading with minimal fees.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-600 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Our team is available round the clock to assist you.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold">What Our Users Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div className="p-6 border rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 italic">"CryptoTrade made my trading experience seamless and profitable!"</p>
            <h3 className="mt-4 font-bold">- Alice W.</h3>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 italic">"I trust CryptoTrade with all my investments. Excellent platform!"</p>
            <h3 className="mt-4 font-bold">- John D.</h3>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">Have questions? Reach out to our support team for assistance.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg">Contact Us</button>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2025 CryptoTrade. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
