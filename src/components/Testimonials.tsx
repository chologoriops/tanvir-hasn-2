import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      quote: "Tanvir's approach completely transformed my relationship with fitness. As a busy mom, I never thought I could achieve these results."
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      quote: "The program fits perfectly into my demanding schedule. I've lost 30 pounds and gained incredible energy levels."
    },
    {
      name: "Emma Williams",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "Tanvir's holistic approach to fitness and nutrition has been life-changing. I've never felt better!"
    }
  ];

  return (
    <div className="bg-black text-white py-24" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="section-box max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-gray-400 text-lg">
            Real results from real people just like you
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="section-box"
            >
              <div className="flex items-center space-x-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-400 mb-6">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}