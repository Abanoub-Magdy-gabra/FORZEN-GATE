import React from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import AgronomyComponent from '../components/agronomy';

export default function Agronomy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-[10vh]">
        <AgronomyComponent />
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}