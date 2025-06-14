
import React from "react";
import { Helmet } from "react-helmet";
import { Briefcase, Send } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Senior Software Engineer",
    location: "Toronto, ON (Hybrid)",
    type: "Full Time",
    description:
      "Work on scalable enterprise systems using React, Node.js, AWS, and more. Lead teams and architect digital solutions for Fortune 500 clients.",
  },
  {
    title: "Cloud Infrastructure Consultant",
    location: "Remote (Canada)",
    type: "Contract",
    description:
      "Shape client cloud strategies, design secure architectures, and enable digital transformation at scale.",
  },
  {
    title: "Junior UI/UX Designer",
    location: "Toronto, ON (On-site)",
    type: "Full Time",
    description:
      "Contribute to enterprise application UI/UX for global projects. Growth-focused, supportive team.",
  },
];

export default function Careers() {
  return (
    <section className="bg-background min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Careers – Join Our Team | AuraByt</title>
        <meta name="description" content="Work with AuraByt – an enterprise IT consultancy in Toronto. Open tech roles, team values, and growth opportunities." />
        <meta name="keywords" content="IT Careers, Software Jobs, Toronto, Cloud, Consulting, AuraByt, Enterprise IT, Open Positions, Join Team" />
      </Helmet>
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            <Briefcase size={16} />
            Careers @ AuraByt
          </span>
          <h1 className="mt-6 mb-4 text-4xl font-bold gradient-text">Grow With Us</h1>
          <p className="text-lg text-muted-foreground mb-2">
            We’re a fast-growing digital consultancy helping enterprise clients transform how they build, operate, and scale. Join us to shape the future of technology!
          </p>
          <div className="mt-6 text-base text-gray-600">
            Interested? Email your CV to <a className="text-primary font-semibold underline" href="mailto:careers@aurabyt.com">careers@aurabyt.com</a>
          </div>
        </div>
        <div className="divide-y divide-border/50 bg-card rounded-xl shadow-lg overflow-hidden">
          {jobs.map((job, i) => (
            <div key={i} className="p-6 hover:bg-primary/5 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h2 className="font-semibold text-xl">{job.title}</h2>
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-bold">
                  {job.type}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                <span>
                  <svg width="16" height="16" className="inline-block mr-1 text-primary" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2l4 -4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {job.location}
                </span>
              </div>
              <p className="text-base text-gray-800 mb-3">{job.description}</p>
              <a
                href={`mailto:careers@aurabyt.com?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm rounded-lg bg-primary text-white hover:bg-primary/90 font-semibold transition-shadow shadow"
              >
                <Send size={14} /> Apply Now
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-base text-gray-700">
            Don’t see a suitable role? We welcome open applications—tell us about yourself!
          </p>
        </div>
      </div>
    </section>
  );
}
