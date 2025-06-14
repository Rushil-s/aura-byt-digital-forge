
import React, { useEffect } from 'react';
import Portfolio from '@/components/Portfolio';
import SEO from '@/components/SEO';

const PortfolioPage = () => {
  // Set document title & meta description for SEO
  useEffect(() => {
    document.title = "Portfolio – Our Work | AuraByt";
    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute(
        "content",
        "Explore AuraByt's portfolio of enterprise IT solutions, web applications, and digital transformation projects for clients across various industries."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore AuraByt's portfolio of enterprise IT solutions, web applications, and digital transformation projects for clients across various industries.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="w-full">
      <SEO 
        title="Portfolio – Our Work | AuraByt"
        description="Explore AuraByt's portfolio of enterprise IT solutions, web applications, and digital transformation projects for clients across various industries."
        keywords="AuraByt portfolio, IT projects, web development, enterprise solutions, digital transformation, software development showcase"
      />
      
      {/* Hero Section */}
      <section className="bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our latest projects and see how we've helped businesses transform through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Component */}
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;
