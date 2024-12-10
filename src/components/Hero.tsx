import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="gradient-overlay" />
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 min-h-screen flex items-center">
        <div className="section-box w-full lg:w-2/3 mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Transform Your Life With
            <span className="block text-primary mt-2">Tanvir Hasan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering busy professionals to achieve sustainable fitness results without sacrificing their lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}