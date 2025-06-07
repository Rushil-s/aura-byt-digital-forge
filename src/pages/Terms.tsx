import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Mail, Phone } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import SEO from '@/components/SEO';

const Terms = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <CheckCircle size={24} />,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using AuraByt's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any modifications."
        }
      ]
    },
    {
      id: "services",
      title: "Description of Services",
      icon: <FileText size={24} />,
      content: [
        {
          subtitle: "IT Consultancy Services",
          text: "AuraByt provides professional IT consultancy services including but not limited to web development, software development, digital marketing, IT support, and infrastructure solutions."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to maintain high service availability but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control."
        },
        {
          subtitle: "Custom Solutions",
          text: "Our services are tailored to meet specific client needs. Project scope, deliverables, timelines, and pricing are defined in separate service agreements or statements of work."
        }
      ]
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      icon: <Scale size={24} />,
      content: [
        {
          subtitle: "Information Accuracy",
          text: "Clients are responsible for providing accurate, complete, and timely information necessary for project completion. Delays caused by incomplete or inaccurate information may affect project timelines and costs."
        },
        {
          subtitle: "Content and Materials",
          text: "Clients must ensure they have the right to use any content, images, or materials provided to us. Clients are responsible for obtaining necessary licenses and permissions."
        },
        {
          subtitle: "Cooperation",
          text: "Clients agree to cooperate with our team, provide timely feedback, and participate in project reviews as required for successful project completion."
        }
      ]
    },
    {
      id: "payment-terms",
      title: "Payment Terms",
      icon: <FileText size={24} />,
      content: [
        {
          subtitle: "Payment Schedule",
          text: "Payment terms are specified in individual service agreements. Generally, projects require an initial deposit with remaining payments due according to agreed milestones or upon completion."
        },
        {
          subtitle: "Late Payments",
          text: "Late payments may incur additional charges and may result in suspension of services. We reserve the right to charge interest on overdue amounts at a rate of 1.5% per month."
        },
        {
          subtitle: "Refund Policy",
          text: "Refunds are considered on a case-by-case basis. Work completed and delivered cannot typically be refunded. Refund requests must be made in writing within 30 days of payment."
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <Scale size={24} />,
      content: [
        {
          subtitle: "Client Ownership",
          text: "Upon full payment, clients own the final deliverables created specifically for their project. This includes custom code, designs, and content created by AuraByt for the client."
        },
        {
          subtitle: "AuraByt Ownership",
          text: "AuraByt retains ownership of our methodologies, tools, templates, and any pre-existing intellectual property used in delivering services."
        },
        {
          subtitle: "Third-Party Components",
          text: "Some projects may include third-party components, libraries, or software subject to their own licensing terms. Clients are responsible for compliance with such licenses."
        }
      ]
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      icon: <AlertTriangle size={24} />,
      content: [
        {
          subtitle: "Mutual Confidentiality",
          text: "Both parties agree to maintain confidentiality of proprietary information shared during the course of our business relationship."
        },
        {
          subtitle: "Data Protection",
          text: "We implement appropriate security measures to protect client data and information. However, clients are responsible for maintaining backups of their own data."
        },
        {
          subtitle: "Non-Disclosure",
          text: "We will not disclose client information to third parties without explicit consent, except as required by law or as necessary to provide agreed services."
        }
      ]
    },
    {
      id: "limitations",
      title: "Limitations of Liability",
      icon: <AlertTriangle size={24} />,
      content: [
        {
          subtitle: "Service Limitations",
          text: "Our services are provided 'as is' without warranties of any kind. We do not guarantee specific results or outcomes from our services."
        },
        {
          subtitle: "Liability Cap",
          text: "Our total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific services giving rise to the claim."
        },
        {
          subtitle: "Consequential Damages",
          text: "We shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or business opportunities."
        }
      ]
    },
    {
      id: "termination",
      title: "Termination",
      icon: <FileText size={24} />,
      content: [
        {
          subtitle: "Termination by Client",
          text: "Clients may terminate services with written notice. Payment for work completed up to the termination date will be due immediately."
        },
        {
          subtitle: "Termination by AuraByt",
          text: "We may terminate services for non-payment, breach of terms, or if continuation of services becomes impractical or impossible."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, we will deliver all completed work and return client materials. Confidentiality obligations survive termination."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service - AuraByt"
        description="Read AuraByt's terms of service to understand our policies, client responsibilities, and service agreements for our IT consultancy services."
        keywords="terms of service, service agreement, AuraByt terms, IT consultancy terms, legal terms"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20">
              <Scale size={16} />
              Legal Terms
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              These terms govern your use of our services and establish the framework for our professional relationship.
            </p>
            
            <div className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="relative mb-16">
              <div className="relative h-full rounded-xl border border-border/30 p-2">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={70}
                  inactiveZone={0.05}
                  borderWidth={2}
                  movementDuration={1.8}
                />
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to AuraByt. These Terms of Service ("Terms") govern your use of our website and services. By engaging our services, you agree to these terms. Please read them carefully before proceeding with any service agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={section.id} className="relative">
                  <div className="relative h-full rounded-xl border border-border/30 p-2">
                    <GlowingEffect
                      spread={25}
                      glow={true}
                      disabled={false}
                      proximity={60}
                      inactiveZone={0.1}
                      borderWidth={1}
                      movementDuration={1.2}
                    />
                    
                    <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm p-8 shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary border border-primary/20">
                          {section.icon}
                        </div>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                      </div>
                      
                      <div className="space-y-6">
                        {section.content.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            <h3 className="text-lg font-semibold mb-3 text-primary">
                              {item.subtitle}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Governing Law */}
            <div className="relative mt-16">
              <div className="relative h-full rounded-xl border border-border/30 p-2">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={70}
                  inactiveZone={0.05}
                  borderWidth={2}
                  movementDuration={1.8}
                />
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Governing Law and Jurisdiction</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of Ontario, Canada, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="relative mt-16">
              <div className="relative h-full rounded-xl border border-border/30 p-2">
                <GlowingEffect
                  spread={35}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.05}
                  borderWidth={2}
                  movementDuration={2}
                />
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <Mail size={20} className="text-primary mr-3" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:legal@aurabyt.com" className="text-primary hover:text-primary/80 transition-colors">
                          legal@aurabyt.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone size={20} className="text-primary mr-3" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:+14379252744" className="text-primary hover:text-primary/80 transition-colors">
                          (437) 925-2744
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong>Important:</strong> These terms supplement any specific service agreements or statements of work. In case of conflicts, the specific service agreement takes precedence for that particular project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;