
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Streamline Factory</title>
        <meta name="description" content="Smarter SaaS tools for insurance, construction, service, and automotive industries." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className="bg-blue-900 text-white p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Streamline Factory Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold">Streamline Factory</span>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#solutions" className="hover:underline">Solutions</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="p-10 text-center bg-blue-800 text-white">
        <h1 className="text-4xl font-extrabold mb-4">Smarter Software for Real-World Work</h1>
        <p className="text-xl mb-6">We build tools that power insurance, construction, and service industries — starting with PriviCam and Claim Route 360.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 px-6 py-2 rounded text-white">Explore Our Apps</button>
          <button className="bg-blue-700 px-6 py-2 rounded text-white">Get In Touch</button>
        </div>
      </main>
    </div>
  );
}
