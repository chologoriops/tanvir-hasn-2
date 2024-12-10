import React from 'react';
import { Award, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black text-white py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="section-box max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Tanvir Hasan</h2>
          <p className="text-gray-400 text-lg">
            Specialized in transforming lives through holistic fitness coaching and lifestyle management
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="section-box">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Expert Credentials</h3>
            <p className="text-gray-400">
              One of the most qualified online personal trainers with proven success coaching hundreds worldwide
            </p>
          </div>
          
          <div className="section-box">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Celebrity Coach</h3>
            <p className="text-gray-400">
              Trained celebrities, industry leaders, and was the official trainer for Miss Earth Bangladesh 2020
            </p>
          </div>
          
          <div className="section-box">
            <Trophy className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Founder</h3>
            <p className="text-gray-400">
              Founded Tanvir Hasan Coaching and Bengal Calisthenics, leading fitness transformation programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}