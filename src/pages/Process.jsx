import React from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import ProcessComponent from '../components/Process';

export default function Process() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-[10vh]">
        <ProcessComponent />
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}