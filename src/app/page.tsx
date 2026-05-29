"use client";
import React from 'react';
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { Hero } from "../components/ui/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Additional sections (featured products, categories, etc.) can be added here */}
        <section className="py-12 px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-semibold text-center text-primary mb-8">
            Featured Collections
          </h2>
          <p className="text-center text-muted mb-4">
            Curated selections for the most discerning shoppers.
          </p>
          {/* Placeholder for product grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Example product cards – replace with real data */}
            <div className="bg-card rounded-lg shadow-lg p-4 text-center">
              <div className="h-48 bg-gray-200 mb-4 rounded" />
              <h3 className="text-lg font-medium text-foreground">Product 1</h3>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-4 text-center">
              <div className="h-48 bg-gray-200 mb-4 rounded" />
              <h3 className="text-lg font-medium text-foreground">Product 2</h3>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-4 text-center">
              <div className="h-48 bg-gray-200 mb-4 rounded" />
              <h3 className="text-lg font-medium text-foreground">Product 3</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
