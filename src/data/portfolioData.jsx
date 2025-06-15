import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaFigma,
  FaJava,
  FaPython,
  FaAndroid,
  FaCloud,
  FaTools,
  FaGitAlt,
  FaJira,
  FaAws,
  FaDocker,
} from 'react-icons/fa';

import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiMysql,
  SiGraphql,
  SiJquery,
  SiJenkins,
  SiKubernetes,
  SiBootstrap,
  SiAngular,
  SiSap,
  SiEclipseide,
  SiRedux,
  SiPython,
} from 'react-icons/si';

export const personalInfo = {
  name: 'Dheeraj Kommineni',
  fullName: 'Sri Hari Dheeraj Kommineni',
  title: 'Full Stack Developer',
  email: 'dheerajkommineni.ms@gmail.com',
  linkedin: 'https://linkedin.com/in/dheeraj-kommineni',
  github: 'https://github.com/DheerajKommineni',
  resumeLink: '/SriHariDheerajKommineni_RESUME.pdf', // Make sure your resume is in public/
  bio: 'Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.',
  shortBio: 'I build things for the web.', // For Hero section
};

export const education = [
  {
    institution: 'California State University, Fullerton',
    degree: "Master's in Computer Science",
    duration: 'Jan 2023 – Jan 2025',
    score: 'CGPA: 3.83/10',
  },
  {
    institution: 'BML Munjal University',
    degree: 'Bachelor of Engineering in Computer Science',
    duration: 'Aug 2016 – Aug 2020',
    score: 'CGPA: 7.76/10',
  },
  // {
  //   institution: 'Sri Chaitanya Junior College',
  //   degree: 'Intermediate State Board',
  //   duration: 'April 2014 - April 2016',
  //   score: '93.5%',
  // },
  // {
  //   institution: 'Narayana IIT Olympiad School',
  //   degree: 'Class 10th State Board',
  //   duration: 'April 2013 - April 2014',
  //   score: '9.8/10 CGPA',
  // },
];

export const projects = [
  {
    title: 'FitConnect',
    tech: [
      'React JS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Python',
      'Chart.js',
    ],
    description:
      'Led FitConnect for 1,000+ users with real-time Google Fit integration and a responsive React UI. Used hooks, context API, and Chart.js for fitness data visualization. Applied ML in Python for health insights. Boosted engagement by 25% through communities, challenges, and real-time messaging, while reducing latency by 50%.',
    date: 'March 2024 – May 2024',
    githubLink: 'https://github.com/DheerajKommineni/FitConnect.git',
    liveLink: null,
    category: 'Full Stack',
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: 'LearnQuest',
    tech: ['React JS', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML', 'Python'],
    description:
      'Built a MERN app with resume upload, course recommendations (Coursera API), mentor matching, and dashboards. Integrated Random Forest, Logistic Regression, and K-Means Clustering to deliver 80% accurate job fit predictions. Resulted in a 35% boost in engagement from 500+ users.',
    date: 'Jan 2023 – March 2023',
    githubLink: 'https://github.com/DheerajKommineni/LearnQuest.git',
    liveLink: null,
    category: 'AI/ML',
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: 'Email Spam Detector',
    tech: ['Python', 'TensorFlow', 'Apache Spark', 'Hadoop'],
    description:
      'Constructed a fraud detection system using Python, TensorFlow, and Big Data tools (Apache Spark & Hadoop), achieving 95% accuracy in predicting fraudulent transactions across 1M+ records. Designed and trained models specifically for email spam classification.',
    date: 'Jan 2023 – March 2023',
    githubLink: 'https://github.com/DheerajKommineni/EmailSpamDetector.git', // Placeholder
    liveLink: null,
    category: 'AI/ML',
    icon: <SiPython size={24} className="text-accent-1" />,
  },
  {
    title: 'Digital Identity Verification DApp',
    tech: ['React JS', 'Node.js', 'Solidity', 'Truffle', 'Ganache', 'Ethereum'],
    description:
      'Built a decentralized app for secure identity and credential verification using blockchain. Features include employer/institution registration, resume validation, dynamic smart contract handling, and public Ethereum testnet deployment. Entire system—from smart contracts to frontend and backend—developed from scratch.',
    date: '2023',
    githubLink:
      'https://github.com/DheerajKommineni/DigitalIdentityVerifcation_DApp.git',
    liveLink: null,
    category: 'Blockchain',
    icon: <FaCode size={24} className="text-accent-1" />,
  },
];

export const skills = {
  languages: [
    { name: 'C', icon: <SiC /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'SAP ABAP', icon: <SiSap /> }, // Best fit
  ],
  frameworksAndLibraries: [
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'React Native', icon: <FaReact /> },
    { name: 'Ionic', icon: <FaAndroid /> }, // Closest representation
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'JQuery', icon: <SiJquery /> },
    { name: 'Redux', icon: <SiRedux /> },
  ],
  development: [
    { name: 'Responsive Design', icon: <FaCode /> },
    { name: 'REST API Integration', icon: <FaCode /> },
    { name: 'WebSocket Integration', icon: <FaCode /> },
    { name: 'Microservices', icon: <FaCode /> },
    { name: 'Design Patterns', icon: <FaTools /> },
    { name: 'OOP', icon: <FaCode /> },
    { name: 'State Management', icon: <FaCode /> },
  ],
  databasesAndCloud: [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'SQL Server', icon: <FaDatabase /> },
    { name: 'GraphQL', icon: <SiGraphql /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
  ],
  toolsAndPlatforms: [
    { name: 'Jenkins', icon: <SiJenkins /> },
    { name: 'GitLab CI/CD', icon: <FaGitAlt /> },
    { name: 'Git', icon: <FaGithub /> },
    { name: 'Jira', icon: <FaJira /> },
    { name: 'Eclipse', icon: <SiEclipseide /> },
    { name: 'Android Studio', icon: <FaAndroid /> },
    { name: 'SAP', icon: <SiSap /> },
    { name: 'VS Code', icon: <FaCode /> },
  ],
  coreCompetencies: [
    'Problem Solving',
    'Agile & SCRUM',
    'Web Content Creation',
    'Optimizing Data Structures',
    '3P (Performance, Portability, Precision)',
    'Efficiency & Scalability',
    'System Resiliency',
  ],
};

export const leadershipAndInvolvement = [
  {
    role: 'Software Engineer',
    organization: 'CAPGEMINI, Bengaluru, India',
    duration: 'March 2021 - December 2022',
    points: [
      'Spearheaded the development of a scalable internal web application using the MEAN stack, enhancing workflow automation and productivity for over 1,500 users.',
      'Engineered RESTful APIs with Node.js and Express, reducing response times by 40% and ensuring secure, efficient data flow.',
      'Optimized Angular components to enhance load speed by 30% and improved overall user engagement by 20%.',
      'Integrated RESTful APIs and MongoDB, creating a data analytics dashboard that cut manual reporting by 50%.',
      'Deployed app on AWS, utilizing S3 and Lambda, simplifying operational costs by 20%.',
      'Improved sprint velocity by 20% through Agile practices, decreasing deployment time by 50% with CI/CD pipelines.',
      'Collaborated in Agile teams to plan sprints, resolve blockers, and ensure on-time delivery of features.',
      'Mentored junior developers, revising code quality by 15% and adherence to standards.',
    ],
  },
  {
    role: 'Front-end Developer Intern',
    organization: 'BRANDANSWERS, Trivandrum, India',
    duration: 'November 2020 - February 2021',
    points: [
      'Launched ‘Jeevani-Sanjeevani’, a Kerala State Government platform, using React JS to deliver essential agricultural and healthcare information to over 5,000 farmers via a user-friendly digital interface.',
    ],
  },
  {
    role: 'Software Developer Intern',
    organization: 'ASSETMONK PROPERTIES PVT.LTD, Hyderabad, India',
    duration: 'June 2020 - September 2020',
    points: [
      'Led the front-end development of a cross-platform real estate mobile app using Ionic and Angular 8, achieving a 25% decrease in load times and a 30% improvement in user retention through responsive design and performance tuning',
    ],
  },
  {
    role: 'Mobile Application Developer Intern',
    organization: 'CEDAR IT PVT.LTD, Hyderabad, India',
    duration: 'January 2020 - May 2020',
    points: [
      'Enhanced 3 client apps (FITR, EduTrack, ShopSmart) using Angular, Ionic, and Drupal Backend, simplifying app crashes by 20% and boosting user ratings by 1.5 stars.',
    ],
  },
];

export const certifications = [
  {
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    date: 'December 2024',
    certificateLink:
      'https://www.credly.com/badges/6e263592-13e0-4e5d-9692-8ae8b14e05ff/linked_in?t=sp6r71',
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
