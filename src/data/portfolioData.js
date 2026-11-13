// ============================================================
// portfolioData.js — Portfolio Data Configuration
// Contains all text, links, and content for the portfolio.
// ============================================================

export const personalInfo = {
  name: "Mahasamudram Likitha",
  firstName: "Mahasamudram Likitha",
  brandName: "Mahasamudram Likitha", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "9000391425",
  emails: {
    primary: "mahasamudramlikitha123@gmail.com",
    secondary: "",
  },
  summary:
    "A passionate Computer Science graduate and aspiring Java Full Stack Developer with strong knowledge of Java, SQL, and web technologies, enthusiastic about building scalable applications and solving real-world problems through technology.",
  resumeUrl: "/resume.java", // put the resume file inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Lovelyliki",
  linkedin: "https://www.linkedin.com/in/mahasamudramlikitha",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Mahasamudram Likitha",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate about building scalable web applications with Java, SQL, and modern frontend technologies to solve real-world problems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mahasamudramlikitha123@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/resume.java" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mahasamudram Likitha</span>, an aspiring Java Full Stack Developer based in Bengaluru, India, sharpening my skills through the placement training program at TAP Academy. My strengths are quick learning, logical thinking, problem-solving, and adaptability, with a genuine enthusiasm for creating clean, scalable code. Dedicated and self-motivated, I am eager to embrace new technologies and contribute effectively to real-world engineering teams.`,
  techStack: ["Java", "Python", "React", "MySQL", "JavaScript"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured development methodology focused on clean design, efficient logic, and reliable execution.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze requirements, understand end-user needs, and select optimal tech stacks.",
    },
    {
      number: "02",
      title: "Design",
      text: "Structure database schemas, responsive UI wireframes, and scalable component architecture.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Write clean, modular code with robust Java backend logic and modern frontend interfaces.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Test comprehensively, optimize performance, and deploy production-ready applications.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "JavaScript" }, { name: "Python" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "National Level Technical Symposium",
    description:
      "Coordinated technical quiz and coding competitions, managing participant logistics and event workflows.",
    role: "Student Coordinator",
    badge: "Event Lead",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy, Bangalore",
    role: "Java Full Stack Developer Intern",
    duration: "6 Months",
    skills: [
      "Full Stack Development",
      "Database Management",
      "Problem Solving",
      "Version Control",
    ],
    tech: [
      "Java",
      "Python",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "Git",
      "GitHub",
      "AWS Tools",
    ],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Work cooperatively with peers to build cohesive solutions and support shared goals.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Break down complex programming challenges into logical, manageable steps.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluate problem statements critically to formulate efficient algorithms and architectures.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Express technical ideas clearly and engage actively with teammates to foster alignment.",
  },
];

export const projects = [
  {
    id: "tfi-movies",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "TFI Movies – Telugu Cinema Universe",
    description:
      "A responsive cinema fan hub featuring favorite Telugu movies, teasers, iconic dialogues, soundtracks, and interactive galleries.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/Lovelyliki",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "iot-smart-health-card",
    number: "02",
    badge: null,
    title: "IoT-Based Smart Health Card",
    description:
      "A low-cost, portable digital health card storing medical records for rapid offline access using QR codes and secure storage.",
    techTags: ["HTML", "CSS", "JavaScript", "Python", "SQLite", "QR Code"],
    links: {
      github: "https://github.com/Lovelyliki",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "ecommerce-sales-prediction",
    number: "03",
    badge: null,
    title: "E-Commerce Sales Prediction",
    description:
      "A machine learning predictive model comparing algorithms like XGBoost, SVM, and Random Forest to forecast sales performance.",
    techTags: ["Python", "Machine Learning", "XGBoost", "SVM", "Random Forest"],
    links: {
      github: "https://github.com/Lovelyliki",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Java Full Stack Development", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/mahasamudramlikitha",
};

export const education = {
  degree: "B.E. Computer Science",
  institution: "Saveetha School of Engineering",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · SQL · React",
    "Building Scalable Real-World Solutions",
  ],
  credential: "B.E. Computer Science",
  copyright: `© ${new Date().getFullYear()} Mahasamudram Likitha | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
