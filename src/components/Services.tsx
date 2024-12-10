import React from 'react';
import { Dumbbell, Brain, Battery, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Personalized Training",
      description: "Custom workout plans tailored to your schedule and goals"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mindset Coaching",
      description: "Transform your relationship with fitness and nutrition"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Energy Optimization",
      description: "Maximize your daily performance and recovery"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lifestyle Integration",
      description: "Sustainable habits that fit your busy schedule"
    }
  ];

  return (
    <div className="bg-black text-white py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="section-box max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Transform Your Life With Our Programs</h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions designed for busy professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="section-box group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}