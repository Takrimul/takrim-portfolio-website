
export const projects = [
  {
    title: "TeleCash MFS & Pocket Wallet",
    category: "Financial Core",
    description: "A high-concurrency mobile financial service platform handling millions of daily transactions.",
    isFeatured: true,
    specs: {
      role: "Core Backend Engineer",
      architecture: "Microservices",
      scale: "High-Concurrency",
    },
    tech: ["Spring Boot", "PostgreSQL", "Kafka", "Redis"],
    features: [
      "Transactional flows & eKYC",
      "Real-time Notification Integration via Kafka",
      "Fraud Management System",
      "Redis Caching for Session Management"
    ]
  },
  {
    title: "MaiSafe (SaaS)",
    category: "SaaS Architecture",
    description: "Safety management SaaS for manufacturing industries ensuring compliance and risk monitoring.",
    isFeatured: true,
    specs: {
      role: "Full Stack Engineer",
      architecture: "Monolithic -> Molecular",
      scale: "Enterprise",
    },
    tech: ["Spring Boot", "Thymeleaf", "RESTful APIs", "MySQL"],
    features: [
      "Multi-tenant Architecture",
      "Real-time Risk Dashboard",
      "Automated Compliance Reporting"
    ]
  },
  {
    title: "Maktab Management System",
    category: "Educational SaaS",
    description: "Comprehensive management platform for educational institutions with multi-role access.",
    isFeatured: true,
    specs: {
        role: "Lead Developer",
        architecture: "Modular Monolith",
        scale: "SaaS"
    },
    tech: ["Java", "Spring Security", "PostgreSQL", "React"],
    features: [
        "Multi-role Authentication (Spring Security)",
        "Student Performance Tracking",
        "Fee Management System"
    ]
  }
];

export const techStack = {
    backend: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "GraphQL"],
    distributed: ["Apache Kafka", "Redis", "RabbitMQ"],
    database: ["PostgreSQL", "MySQL", "DBeaver"],
    frontend: ["Angular", "TypeScript", "Thymeleaf", "Next.js"],
    tools: ["Docker", "Git", "Jenkins", "Linux"]
};
