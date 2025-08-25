export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 4,
    title: "I'm flexible with time zone communications & locations",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-3",
    imgClassName: "relative w-full w-full h-full mx-auto",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Tech stacks & Tools I use",
    description: "Technologies that help me turn ideas into innovative, functional applications",
    className: "md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-2 row-span-3 md:row-span-1 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center lg:max-w-full max-w-[80%] text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mern Chat",
    des: "Mern Chat is a real-time messaging app which uses Web Socket to make every message real-time. The tech I used for this app are MERN stack, Socket.io, TailwindCSS and Daisy UI. It includes authentication with JWT, online user status, user setting features and profile as well",
    img: "/p1.svg",
    iconLists: ["/assets/icons/Node.js.svg", "/assets/icons/MongoDB.svg", "/assets/icons/React.svg", "/tail.svg"],
    link: "https://mernlivechat.onrender.com/",
    gitrepo: "https://github.com/khinenweoo/chat-app-socketio",
  },
  {
    id: 2,
    title: "Smart Spender",
    des: "Smart Spender is a personal finance tracker app built with Mern Stack and TailwindCSS. It aims to offer users to take control of financial habits by tracking their income and expenses. It allow users to manage, view and filter all their personal financial records. With real-time updates and user friendly design, the app helps you to analyze your cash flow and make budgeting decisions.",
    img: "/proj-2.png",
    iconLists: ["/assets/icons/Node.js.svg", "/assets/icons/MongoDB.svg", "/assets/icons/React.svg", "/ts.svg", "/tail.svg"],
    link: "https://smartspender-track.vercel.app/",
    gitrepo: "https://github.com/khinenweoo/mern-personal-finance-tracker",
  },
  {
    id: 3,
    title: "ProJix",
    des: "ProJix is team's project management app built with React, Laravel and TailWindCSS. The app allows users to create projects and manage associated tasks with role-based access control for Admins and Members. Admins can manage users and assign tasks, while members can do operations like edit tasks and mark their own tasks as complete. Features include role based access and operations, smart task filtering (by name, priority and status) and user-task assignment.",
    img: "/p3.svg",
    iconLists: ["/php.svg", "/laravel.svg", "/re.svg", "/tail.svg"],
    link: "https://project-creator.laravel.cloud/",
    gitrepo: "https://github.com/khinenweoo/Project-Creator-App",
  },
  {
    id: 4,
    title: "Proud of Myanmar",
    des: "ProudofMyanmar is an multivendor e-commerce platform built with Laravel and Livewire. The platform provides customers to browse products via seller store profile. It allow admin to manage every aspect of the system such as order management, shop request approval and discount. I developed this project's user interface and implementing business logic, data structure and API as well. The platform is tailored to the local market brands, offering a seamless experience for connecting buyers and sellers while purchasing from a wide variety of certified official resellers or trusted local brands.",
    img: "/p4.png",
    iconLists: ["/php.svg", "/laravel.svg", "/js.svg", "/sass.svg", "assets/icons/Livewire.svg"],
    link: "",
    gitrepo: "",
  },
  {
    id: 5,
    title: "LMS",
    des: "LMS is a learning platform where users can explore detailed information about classes and enroll various courses. Built with Laravel and Livewire, the platform allow students to browse course offerings and connect administrator through Messenger chat to enroll. It offer admin portal to create courses, upload lessons and assign to the owner of the instructor. It aims to create a seamless user experience, empowering learners to easily access educational opportunities tailored to their needs.",
    img: "/p5.jpg",
    iconLists: ["/php.svg", "/laravel.svg", "/js.svg", "assets/icons/Livewire.svg",],
    link: "",
    gitrepo: "",
  },
  {
    id: 6,
    title: "Mahar NET User App",
    des: "A mobile app which aims for customers who are using Mahar NET internet services. My role is implementing Restful APIs for this app. The features includes upgrade/downgrade data plans, request relocation, view bills, open complaint ticket and so on.",
    img: "/p6.jpg",
    iconLists: ["/php.svg", "/laravel.svg", "/js.svg", "assets/icons/Livewire.svg",],
    link: "https://play.google.com/store/apps/details?id=com.maharnet.app&hl=en",
    gitrepo: "",
  },
  {
    id: 7,
    title: "Mahar NET User Portal",
    des: "The system have modules for User App management operations including billing, finance, complaint ticketing and sale care for ISP company's customers. The platform offers real-time notification of user's activities while using the app along with other features.",
    img: "/userapp-admin.png",
    iconLists: ["/php.svg", "/laravel.svg", "/js.svg", "assets/icons/Vue.js.svg", "assets/icons/Firebase.svg"],
    link: "https://userapp.maharnet.com/admin/login",
    gitrepo: "",
  },
  {
    id: 8,
    title: "CBS - Centre for Behavioral Science",
    des: "CBS is an educational platform built with WordPress. My role involves designing user interface and integrating plugins and customized the required features such as Event reigsteration. Designed with a dynamic user-friendly interface, it provides an efficient way to register a range of programs, seminars and workshops through the platform. ",
    img: "/cbs.png",
    iconLists: ["/assets/icons/Wordpress.svg","/php.svg", "/js.svg"],
    link: "https://www.cbs.com.sg/",
    gitrepo: "",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Web Developer @ GiGA Link Technology",
    timeline: "Jan 2020 - Feb 2021",
    desc: "I started my web development journey at GiGA Link, where I built the impactful platform, CBS Learning Hub along with other innovative CMS websites. It was the time when I started discovering the joy of turning ideas to reality. Developed responsive websites, built interactive user interfaces and smooth user experiences along with the integration of project's functionality features.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Senior Web Developer @ AEG",
    timeline: "March 2021 - May 2022",
    desc: "Designed and developed responsive web applications using Laravel and Livewire as a lead developer, working on collaborating with cross-functional teams and junior developers to deliver high quality solutions.",
    className: "md:col-span-2",
  },
  {
    id: 3,
    title: "Full Stack Developer @ Mahar Net",
    timeline: "Jul 2022 - Sep 2024",
    desc: "Contributed to the in-house software development and maintenance of the web portals. Implemented clean, efficient code and streamlined debugging processes, ensuring smooth project execution and client satisfaction.",
    className: "md:col-span-2",
  },
];

export const sectionImages = [
  {
    id: 1,
    img: "/profileimage.svg"
  }
];

export const techList = [
  {
    title: "PHP",
    path: "/assets/icons/PHP.svg",
  },
  {
    title: "Laravel",
    path: "/assets/icons/Laravel.svg",
  },
  {
    title: "Node.js",
    path: "/assets/icons/Node.js.svg",
  },
  {
    title: "Express.js",
    path: "/assets/icons/Express.svg",
  },
  {
    title: "TypeScript",
    path: "/assets/icons/TypeScript.svg",
  },
    {
    title: "JavaScript",
    path: "/assets/icons/JavaScript.svg",
  },
  {
    title: "Vue.js",
    path: "/assets/icons/Vue.js.svg",
  },
  {
    title: "React",
    path: "/assets/icons/React.svg",
  },
  {
    title: "Livewire",
    path: "/assets/icons/Livewire.svg",
  },
  {
    title: "Redux",
    path: "/assets/icons/Redux.svg",
  },
  {
    title: "Wordpress",
    path: "/assets/icons/WordPress.png",
  },
  {
    title: "MySQL",
    path: "/assets/icons/MySQL.svg",
  },
  {
    title: "MongoDB",
    path: "/assets/icons/MongoDB.svg",
  },
  {
    title: "PostgresSQL",
    path: "/assets/icons/PostgresSQL.svg",
  },
  {
    title: "Git",
    path: "/assets/icons/Git.svg",
  },
  {
    title: "Firebase",
    path: "/assets/icons/Firebase.svg",
  },
  {
    title: "Docker",
    path: "/assets/icons/Docker.svg",
  },
  {
    title: "Postman",
    path: "/assets/icons/Postman.svg",
  },
  {
    title: "TailwindCSS",
    path: "/assets/icons/Tailwindcss.svg",
  },
  {
    title: "Sass",
    path: "/assets/icons/Sass.svg",
  },

];

