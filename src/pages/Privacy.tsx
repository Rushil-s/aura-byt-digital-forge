import React from 'react';
import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import SEO from '@/components/SEO';

const Privacy = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database size={24} />,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and project details."
        },
        {
          subtitle: "Technical Information", 
          text: "We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, referring URLs, and pages visited."
        },
        {
          subtitle: "Communication Data",
          text: "When you contact us via email, phone, or our contact forms, we collect and store the content of those communications to provide support and improve our services."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <Eye size={24} />,
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our IT consultancy services, including web development, digital marketing, and IT support."
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to respond to your inquiries, provide customer support, and send you important updates about our services."
        },
        {
          subtitle: "Business Operations",
          text: "We may use your information for internal business purposes such as data analysis, audits, fraud monitoring, and developing new products or services."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <Shield size={24} />,
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting providers, analytics services, and payment processors."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Lock size={24} />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Encryption",
          text: "We use industry-standard encryption protocols to protect sensitive data during transmission and storage."
        },
        {
          subtitle: "Access Controls",
          text: "Access to personal information is restricted to authorized personnel who need the information to perform their job functions."
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      icon: <Eye size={24} />,
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. You can do this by contacting us directly."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to request a copy of your personal information in a structured, commonly used format."
        },
        {
          subtitle: "Deletion",
          text: "You may request that we delete your personal information, subject to certain legal and business requirements."
        }
      ]
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      icon: <Database size={24} />,
      content: [
        {
          subtitle: "Cookie Usage",
          text: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences."
        },
        {
          subtitle: "Analytics",
          text: "We use analytics services like Google Analytics to understand how visitors interact with our website and improve our services."
        },
        {
          subtitle: "Cookie Control",
          text: "You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy - AuraByt"
        description="Learn how AuraByt protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices."
        keywords="privacy policy, data protection, AuraByt privacy, personal information, data security"
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
              <Shield size={16} />
              Privacy & Security
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            
            <div className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                    AuraByt ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our services, you consent to the data practices described in this policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Sections */}
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
                  <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <Mail size={20} className="text-primary mr-3" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:privacy@aurabyt.com" className="text-primary hover:text-primary/80 transition-colors">
                          privacy@aurabyt.com
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
                      <strong>Note:</strong> This Privacy Policy may be updated from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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

export default Privacy;