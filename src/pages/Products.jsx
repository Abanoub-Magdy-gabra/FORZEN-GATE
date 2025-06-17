import React from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import ProductsPage from '../components/ProductsPage';

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-[10vh]">
        <ProductsPage />
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}