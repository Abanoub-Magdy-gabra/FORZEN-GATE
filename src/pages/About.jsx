import React from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import AboutUs from '../components/about';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-[10vh]">
        <AboutUs />
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}