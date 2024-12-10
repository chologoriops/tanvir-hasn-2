import React from 'react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black text-white py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="section-box max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Start Your Transformation</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a href="mailto:contact@tanvirhasan.com" className="flex items-center space-x-3 text-gray-400 hover:text-primary">
                  <Mail className="w-5 h-5" />
                  <span>contact@tanvirhasan.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-400 hover:text-primary">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}