// Application data and content

export const servicesData = [
  {
    id: 'qa-learning',
    title: 'QA Learning & Training',
    description: 'Master Quality Assurance with our comprehensive training programs',
    icon: '🎯',
    features: [
      'QA Fundamentals & Best Practices',
      'Test Automation Training',
      'ISTQB Certification Programs',
      'Hands-on Project Experience',
      'Industry Expert Mentorship',
      'Career Placement Assistance'
    ],
    href: '/learn-qa'
  },
  {
    id: 'web-development',
    title: 'Web Development Services',
    description: 'Custom websites and applications tailored to your business needs',
    icon: '💻',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'CMS Integration',
      'Responsive Design',
      'SEO Optimization'
    ],
    href: '/web-development'
  },
  {
    id: 'it-support',
    title: 'IT Support & Maintenance',
    description: '24/7 technical support and proactive system maintenance',
    icon: '🛠️',
    features: [
      '24/7 Technical Support',
      'System Monitoring',
      'Security Updates',
      'Performance Optimization',
      'Backup & Recovery',
      'Cloud Migration'
    ],
    href: '/it-support'
  }
];

export const blogArticles = [
  {
    id: 1,
    title: "Top 10 QA Testing Trends in 2025",
    excerpt: "Discover what’s shaping the future of QA, including AI-driven automation, codeless tools, security focus, and more.",
    slug: "top-10-qa-testing-trends-2025",
    category: "Quality Assurance",
    author: "Sarah Johnson",
    date: "2025-08-20",
    readTime: "8 min read",
    tags: ["QA", "Testing", "Trends", "Automation"],
    content: `
1. **AI and Machine Learning in Testing**  
Advanced AI tools automate test generation, prioritize test cases, and self-heal broken tests.

2. **Shift-Left and Shift-Right Testing**  
Testing earlier (and later) in development—catch bugs sooner and gain more user feedback post-release.

3. **Codeless Automation**  
Low-code/no-code platforms empower more users to automate tests.

4. **Security and Privacy Testing**  
Security is now a first-class citizen in the QA process.

5. **Hybrid Manual + Automated Strategies**  
Combining human insight with automation for thorough coverage.

6. **Test Reporting and Analytics**  
Real-time, actionable dashboards to help teams react quickly.

7. **API Test Automation**  
API test automation is key for modern system reliability and scalability.

8. **IoT & Embedded Systems Testing**  
Specialized tools for device and sensor testing are in demand.

9. **Accessibility and UX Testing**  
Automated accessibility checks are mainstream in QA pipelines.

10. **Ethical, Compliance, & Regulatory Testing**  
New automation tools check for privacy, fairness, and bias.

**Conclusion:**  
QA in 2025 is more intelligent, automated, and user-centric than ever. Embracing these trends means higher quality and happier users.
`
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with React",
    excerpt: "Best practices and strategies for developing scalable and maintainable React apps suitable for enterprise level projects.",
    slug: "building-scalable-web-applications-with-react",
    category: "Web Development",
    author: "Mike Chen",
    date: "2025-08-18",
    readTime: "12 min read",
    tags: ["React", "Scalability", "Web Development", "Best Practices"],
    content: `
  Building scalable React applications requires thoughtful design and adherence to best practices to ensure maintainability, performance, and rapid development cycles. Here are some proven strategies:
  
  1. **Component-driven Architecture**  
  Design your UI in small, reusable components. Utilize atomic design principles to keep your components modular and testable.
  
  2. **State Management**  
  Leverage React's Context API for light use-cases and robust libraries like Redux or Zustand for complex state management across large applications.
  
  3. **Code Splitting and Lazy Loading**  
  Use React.lazy and Suspense to dynamically load components and reduce initial bundle size, improving performance.
  
  4. **Use TypeScript**  
  Type safety provided by TypeScript helps catch errors early, improves developer experience, and leads to more maintainable codebases.
  
  5. **Testing and Quality Assurance**  
  Incorporate unit tests with Jest and React Testing Library, and end-to-end testing with Cypress to ensure components behave as expected.
  
  6. **Performance Optimization**  
  Employ memoization techniques like React.memo and useMemo to avoid unnecessary renders. Analyze bundle size with tools like Webpack Bundle Analyzer.
  
  7. **API and Data Handling**  
  Adopt libraries like React Query or SWR for effective data fetching, caching, and synchronization with your UI.
  
  8. **Scalable Folder Structure**  
  Organize files logically (e.g., features, components, pages) to keep your project maintainable as it grows.
  
  9. **CI/CD Integration**  
  Automate your deployment and testing pipelines with GitHub Actions, Jenkins, or CircleCI to maintain code quality and speed releases.
  
  10. **Documentation and Collaboration**  
  Maintain good documentation for onboarding and developer collaboration using tools like Storybook and well-commented code.
  
  **Conclusion:**  
  A scalable React application blends modular design, efficient state management, and ongoing performance monitoring. With best practices in place, your app can grow to meet enterprise demands gracefully.
  `
  },

  {
    id: 3,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Essential security measures every small business should implement to protect against cyber threats.',
    category: 'IT Security',
    author: 'Alex Rodriguez',
    slug: "top-10-IT-Security-trends",
    date: '2025-08-15',
    readTime: '6 min read',
    tags: ['Cybersecurity', 'Small Business', 'Protection']
  }
];
