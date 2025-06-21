

export const name = 'Saketh';

export const experiences = [
  {
    company: 'UMB Financial',
    role: 'Software Developer',
    duration: 'May 2024 - Present',
    logo: 'https://mms.businesswire.com/media/20240429502428/en/2112157/22/UMB_logo.jpg',
    points: [
      'Built a cloud-based financial platform using <span class="text-green-300">Java EE</span>, <span class="text-green-300">Spring Boot</span>, and <span class="text-green-300">MongoDB</span>, ensuring high scalability, availability, and real-time performance across products like QuickBooks and Mint.',
      'Developed reusable <span class="text-green-300">React</span> components (tables, charts, modals) to streamline UI consistency across budgeting and tax modules, improving frontend maintainability by 40%.',
      'Designed a <span class="text-green-300">microservices</span> architecture for features like user management and analytics, improving deployment efficiency and reducing cross-service dependencies.',
      'Deployed services on <span class="text-green-300">AWS (EC2, S3)</span> with event-driven workflows via <span class="text-green-300">Apache Kafka</span>, enhancing scalability and achieving 99.9% uptime for real-time transaction updates.',
      'Automated DevOps workflows using <span class="text-green-300">GitHub Actions</span> for <span class="text-green-300">Docker</span> cleanup, test coverage, and <span class="text-green-300">Maven</span> builds, increasing CI/CD pipeline consistency and speed.'
    ],
    url: 'https://www.umb.com/',
  },
  {
    company: 'Cognizant',
    role: 'Software Developer',
    duration: 'Jun 2021 - Aug 2023',
    logo: 'https://www.eisgroup.com/wp-content/uploads/2022/03/cog_prim_lg_hrz_rgb_pos_2022.png',
    points: [
      'Developed scalable microservices using <span class="text-green-300">Spring Boot</span>, <span class="text-green-300">Spring Cloud</span>, and <span class="text-green-300">Eureka</span>, ensuring high availability and smooth service communication in distributed systems.',
      'Engineered responsive web apps with <span class="text-green-300">React</span>, <span class="text-green-300">Redux</span>, and modern <span class="text-green-300">JavaScript</span>, improving mobile engagement by 5% and reducing bounce rates by 20%.',
      'Boosted <span class="text-green-300">MySQL</span> database performance through indexing, query optimization, and horizontal sharding, achieving a 25% throughput increase under peak loads.',
      'Exposed and secured APIs using <span class="text-green-300">Azure API Management</span>, integrating third-party services (payment gateways, email) with robust monitoring and versioning.',
      'Modernized legacy systems by migrating <span class="text-green-300">JSP</span> + <span class="text-green-300">Struts</span> views to <span class="text-green-300">React</span>, and automated API testing using <span class="text-green-300">Postman</span> in the CI pipeline to improve release quality.'
    ],
    url: 'https://www.cognizant.com/us/en',
  }
];




export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
