import React from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import QualitySection from '../components/Quality';

export default function Quality() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-[10vh]">
        <QualitySection />
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}