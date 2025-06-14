
import React from 'react';
import Portfolio from '@/components/Portfolio';
import SEO from '@/components/SEO';

const PortfolioPage = () => {
  return (
    <div className="w-full min-h-screen bg-background pb-12">
      <SEO 
        title="Portfolio – Our Work | AuraByt"
        description="Explore AuraByt's portfolio of enterprise IT solutions, web applications, and digital transformation projects for clients across various industries."
        keywords="AuraByt portfolio, IT projects, web development, enterprise solutions, digital transformation, software development showcase"
      />
      {/* Portfolio Hero */}
      <section className="bg-background pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Client Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Explore our proven track record delivering innovative IT solutions, web applications, and digital transformation projects for companies across industries.
            </p>
            <p className="text-base text-muted-foreground">
              We partner with enterprises to modernize operations, unlock new efficiencies, and drive scalable results.
            </p>
          </div>
        </div>
      </section>
      {/* Portfolio Showcase */}
      <Portfolio />
      <section className="container mx-auto max-w-3xl mt-16 mb-20 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4 gradient-text">Interested in similar results?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          We help organizations accelerate innovation, digitize complex processes, and achieve their most ambitious goals. 
          <br />
          <a href="/contact" className="text-primary underline font-medium hover:no-underline transition-colors">Contact us</a> to discuss your project.
        </p>
      </section>
    </div>
  );
};

export default PortfolioPage;
