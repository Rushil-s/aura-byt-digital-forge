
export interface Project {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  delay: number;
}

export const portfolioProjects: Project[] = [
  {
    title: "Enterprise Cloud Migration",
    category: "Cloud Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    description: "Complete AWS cloud migration for Fortune 500 manufacturing company, reducing operational costs by 40%.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    delay: 100
  },
  {
    title: "Banking API Platform",
    category: "Fintech Development",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    description: "Secure REST API platform serving 2M+ daily transactions with 99.99% uptime.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "JWT"],
    delay: 200
  },
  {
    title: "Healthcare Data Analytics",
    category: "Data Solutions",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    description: "Real-time analytics dashboard for patient data processing across 50+ hospitals.",
    technologies: ["React", "Python", "Apache Kafka", "MongoDB"],
    delay: 300
  },
  {
    title: "E-Commerce Modernization",
    category: "Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "Legacy system modernization resulting in 3x performance improvement and mobile-first design.",
    technologies: ["React", "Microservices", "GraphQL", "Stripe"],
    delay: 400
  },
  {
    title: "IoT Manufacturing System",
    category: "IoT Solutions",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    description: "Smart factory monitoring system with predictive maintenance and real-time alerts.",
    technologies: ["IoT Core", "Python", "InfluxDB", "Grafana"],
    delay: 500
  },
  {
    title: "Enterprise Security Audit",
    category: "Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    description: "Comprehensive security assessment and implementation of zero-trust architecture.",
    technologies: ["Penetration Testing", "SIEM", "Multi-Factor Auth", "VPN"],
    delay: 600
  }
];
