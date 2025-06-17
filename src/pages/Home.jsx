import React from 'react';
import Navigation from '../components/Nav';
import HomeContent from '../components/Home';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-[10vh]">
        <HomeContent />
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}