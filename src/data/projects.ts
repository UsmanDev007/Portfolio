export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
  staffUrl?: string;
  portalLabels?: [string, string];
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 11,
    title: "Faisal Hills Property Services",
    description:
      "A real estate platform built for a client in Faisal Hills, Taxila. Visitors browse verified plots, houses and commercial properties, filter listings by block, size, category and price, request on-ground verification or a video tour before they commit, and reach the team directly on WhatsApp. Live at fhmap.pk.",
    image: "/images/faisal-hills.jpg",
    technologies: ["Real Estate Listings", "Smart Filters", "WhatsApp Contact", "Responsive UI"],
    liveUrl: "https://fhmap.pk",
    category: "Client Project · Real Estate",
    featured: true,
  },
  {
    id: 10,
    title: "Faisal Hills Interactive Map",
    description:
      "The official Faisal Hills society map laid over live satellite imagery. Buyers search by plot number or block name, see every plot's status at a glance, and move from the map straight to verified listings. The walkthrough video includes the client's voice-note feedback on the finished product.",
    image: "/images/faisal-hills-map.jpg",
    video: "/videos/faisal-hills-map.mp4",
    technologies: ["Interactive Map", "Satellite Imagery", "Plot Search", "Geo-referenced Layout"],
    liveUrl: "https://fhmap.pk",
    category: "Client Project · Interactive Map",
    featured: true,
  },
  {
    id: 9,
    title: "MORIS",
    description:
      "MORIS (Multi-Outlet Retail Information System) is a comprehensive business management platform built with Next.js 15, featuring dual Owner and Admin portals. It manages retail operations including inventory with IMEI/serial tracking, point-of-sale transactions, vendor management, procurement workflows (PO to GRN), repair services, and staff management with role-based permissions. Supports hierarchical categories, province-based tax calculations, multi-currency transactions, and financial analytics.",
    image: "/images/moris.png",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "Tailwind CSS", "Radix UI", "Recharts"],
    githubUrl: "https://github.com/UsmanDev007",
    liveUrl: "https://madmin-test.dockhost-01.symcloud.net/",
    staffUrl: "https://moris-test.dockhost-01.symcloud.net/",
    portalLabels: ["Admin", "Owner"],
    category: "Business Management System",
  },
  {
    id: 8,
    title: "TeleTaleem EMIS",
    description:
      "TeleTaleem EMIS is an Education Management Information System developed as a private government collaboration project in Pakistan. It aims to provide quality online education to students in remote locations where access to traditional schooling is limited. The platform features dual portals — Admin and Teacher — with comprehensive capabilities including student management, attendance tracking (with GPS-based staff attendance), marks management, school facility ticketing, analytics dashboards, notification systems, detailed records and more..",
    image: "/images/teletaleem.png",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM"],
    githubUrl: "https://github.com/UsmanDev007",
    liveUrl: "https://emis-staging.dockhost.symcloud.net/",
    staffUrl: "https://schoolui.dockhost.symcloud.net/",
    portalLabels: ["Admin", "Staff"],
    category: "Education Management System",
  },
  {
    id: 5,
    title: "Restaurant Meal Solutions App",
    description:
      "A modern and responsive restaurant web application showcasing ready meals, catering services, frozen foods, and mobile kitchen solutions.",
    image: "/images/restaurant.png",
    technologies: ["React JS", "TypeScript", "Strapi 5", "GraphQL", "React-Bootstrap", "LottieFiles"],
    githubUrl: "https://github.com/UsmanDev007",
    liveUrl: "https://github.com/UsmanDev007",
    category: "Web Application",
  },
  {
    id: 6,
    title: "SmartSite",
    description:
      "SmartSite is a scalable analytics and automation platform designed to optimize costs, reduce risk, and improve operational efficiency across IT and network environments.",
    image: "/images/cert-site-main.png",
    technologies: ["React JS", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "React Speech Recognition", "Google Maps", "Postman"],
    githubUrl: "https://github.com/UsmanDev007",
    liveUrl: "https://sitecert.nesterra.net/login",
    category: "Web Application",
  },
  {
    id: 3,
    title: "Car Dealership Web Application",
    description:
      "A fully responsive and dynamic car dealership web application that works as a 24/7 virtual showroom.",
    image: "/images/CarDealerShip.png",
    technologies: ["React JS", "TypeScript", "Strapi 5", "GraphQL", "Material UI", "LottieFiles"],
    githubUrl: "https://github.com/UsmanDev007",
    liveUrl: "https://github.com/UsmanDev007",
    category: "Web Application",
  },
  {
    id: 1,
    title: "Organic Agricultural Website",
    description:
      "An organic farming e-commerce platform that allows users to browse fresh farm products, add them to cart, and place orders seamlessly.",
    image: "/images/organic.png",
    technologies: ["React", "MUI", "Bootstrap", "Redux"],
    githubUrl: "https://github.com/UsmanDev007",
    liveUrl: "https://organic-pi-umber.vercel.app/",
    category: "Web Application",
  },
  {
    id: 2,
    title: "Exclusive Ecommerce Website",
    description:
      "An ecommerce website with an attractive UI, add-to-cart functionality, billing flow, multiple pages, and timeout features.",
    image: "/images/exclusive.png",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/UsmanDev007",
    liveUrl: "https://exclusive-ecommerce-website-theta.vercel.app",
    category: "Web Application",
  },
];
