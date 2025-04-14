// src/pages/Contact.tsx
import React, { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';
import SEO from '@/components/SEO';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Number',
      details: '(437) 925-2744'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: 'connect@aurabyt.com'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div>
      <SEO 
        title="Contact AuraByt - Get In Touch With Our Team" 
        description="Contact AuraByt for all your web development, digital marketing and IT support needs. Our team is ready to help your business grow."
        keywords="Contact AuraByt, IT consultancy contact, Toronto tech company, web development services, digital marketing contact"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-aurabyt-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get In Touch</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Have a question or want to work with us? Fill out the form below or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info - Optimized for mobile */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What types of businesses do you work with?",
                  answer: "We work with businesses of all sizes across various industries, including e-commerce, healthcare, finance, education, and more. Our solutions are tailored to meet the specific needs of each client."
                },
                {
                  question: "How long does a typical web development project take?",
                  answer: "The timeline varies depending on the scope and complexity of the project. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you offer ongoing support after project completion?",
                  answer: "Yes, we provide ongoing support and maintenance for all our projects. We offer various support packages to ensure your digital assets continue to perform optimally."
                },
                {
                  question: "What is your approach to digital marketing?",
                  answer: "We take a data-driven approach to digital marketing, focusing on strategies that deliver measurable results. We start by understanding your business goals and target audience, then develop a customized strategy to reach and engage them effectively."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;