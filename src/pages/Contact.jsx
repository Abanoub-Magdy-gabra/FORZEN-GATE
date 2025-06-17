import React from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import ContactUs from '../components/contact';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-[10vh]">
        <ContactUs />
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}