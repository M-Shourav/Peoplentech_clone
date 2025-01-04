import {
  AdvanceDMImg,
  AmjadulAlamImage,
  AnjumImage,
  ApplicationImg,
  AshrafulImg,
  AspNetImg,
  assignment,
  BdpoliticaImg,
  BdStudioImg,
  CbbLImg,
  CEHImg,
  certificate02,
  CisaImg,
  ciscoCRNImg,
  CloudComputingImg,
  ComputerFnImg,
  CreativeGDImg,
  customer_services,
  CyberImg,
  CyberSCImg,
  CyberSecurityImg,
  CyberThreadImg,
  DataAnalyticsImg,
  DigitalForensicImg,
  FarhanaHanipImg,
  FarzanaImg,
  feedback,
  FemaleInformationImg,
  FlutterImg,
  FooterLogo,
  freelanceImg,
  FreelancingCrhImg,
  FrontiaImg,
  GraphicsAvImg,
  GtsImg,
  HafizurImg,
  HamidImg,
  HanipImg,
  HasinaImg,
  InformationSSImg,
  interview,
  JobResumeImg,
  jobs,
  JohoraImg,
  LeonImg,
  LinuxImg,
  live,
  MahbuburRahmanImage,
  MamunImg,
  MCsaImg,
  MernStImg,
  MicrosoftWbImg,
  MonjurulImg,
  NetworkAdImg,
  networkSAImg,
  NrbImg,
  NurnobiImg,
  OperatingSytImg,
  oracleImg,
  PmpImg,
  PntdsImg,
  PythonDjImg,
  recorded,
  requirement,
  SazzadImg,
  SelimRezaImg,
  ShakowatImg,
  SheikhAhmedImg,
  SmartIllusionImg,
  SoftwareTestImg,
  speech_bubble,
  SpScholarshipDmImg,
  SpScholarshipGDImg,
  SpScholarshipItImg,
  supportImg,
  TanzilImg,
  UpsCaleImg,
  UsaImg,
  VolumeCoderImg,
  WebDPImg,
  webDvpImg,
  WustImg,
  YousufImg,
  ZendImg,
} from "@/public/assets";

export const NavArray = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    submenu: [
      { name: "Our Team", href: "/our-team" },
      { name: "Our Mentors", href: "/our-faculty" },
    ],
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Upcoming Batch",
    href: "/batch",
  },
  {
    name: "Join Seminars",
    href: "/seminars",
  },
  {
    name: "Success Stories",
    href: "/success",
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "WUST", href: "https://www.wust.edu/" },
      {
        name: "Hosting Services",
        href: "https://www.pntdns.com/",
      },
      {
        name: "Software Solution",
        href: "https://peoplentech.net/",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const scholarshipArray = [
  {
    name: "Freelancing with Upwork/Fiverr Crash Course",
    price: [
      {
        regularPrice: 10000,
        discountPrice: 2000,
      },
    ],
    images: FreelancingCrhImg,
  },
  {
    name: "Online Training on It security & Ethical Hacking Professional",
    price: [
      {
        regularPrice: 15000,
        discountPrice: 4999,
      },
    ],
    images: SpScholarshipItImg,
  },
  {
    name: "Online Training on Advance Digital Marketing & SEO with Freelancing ",
    price: [
      {
        regularPrice: 18000,
        discountPrice: 4999,
      },
    ],
    images: SpScholarshipDmImg,
  },
  {
    name: "Online Training on Creative Graphics Design with Freelancing",
    price: [
      {
        regularPrice: 20000,
        discountPrice: 4999,
      },
    ],
    images: SpScholarshipGDImg,
  },
  {
    name: "Computer Fundamental & Troubleshooting Training",
    price: [
      {
        regularPrice: 10000,
        discountPrice: 2000,
      },
    ],
    images: ComputerFnImg,
  },
];

export const databaseCourseArray = [
  {
    name: "Certified Training Course on Software Testing and Quality Assurance",
    images: SoftwareTestImg,
    price: [
      {
        regularPrice: 30000,
        discountPrice: 18000,
      },
    ],
    des: `Are you passionate about software testing and quality assurance? Our course on software testing & quality assurance can be your best choice. The "Software Testing and Quality Assurance" training course at PeopleNTech provides participants with comprehensive insights into the principles and practices of software testing. Covering a range of topics from testing methodologies to quality assurance processes, this course equips individuals with the skills needed to ensure the delivery of high-quality software products.`,
  },
  {
    name: "Certified Oracle Database Administration DBA 19C Course",
    images: oracleImg,
    price: [
      {
        regularPrice: 30000,
        discountPrice: 18000,
      },
    ],
    des: `Are you looking to skill up yourself in Oracle Database Administration certification course? Then our certified course on oracle database administration is for you! Our oracle training & certification course approach to mastering Oracle DBA concepts, techniques, and best practices. As the best oracle training & certification, you will get hands-on training with an updated course module and an Industry Expert mentor for becoming a certified oracle database professional in Bangladesh. This Oracle DBA training course is an intensive hands-on course designed to provide Oracle professionals with an in-depth understanding of the DBA features of Oracle, specific Oracle concepts and knowledge required for the OCP exam, and tips and techniques for passing the Oracle OCP exam on your first attempt.`,
  },
  {
    name: "Data Analytics",
    images: DataAnalyticsImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 10000,
      },
    ],
    des: `This course provides a comprehensive introduction to the field of data analytics. It is designed for individuals who are interested in learning about the tools, techniques, and methodologies used to analyze large datasets and extract meaningful insights. By the end of the course, students will be equipped with the knowledge and skills necessary to apply data analytics in real-world scenarios, making them valuable assets in any industry that relies on data-driven decision making. Whether you’re a beginner looking to start a career in data analytics or a professional seeking to enhance your skills, this course offers a solid foundation in this rapidly growing field.`,
  },
];
export const webCoursesArray = [
  {
    name: "Professional Web Design & Development Course",
    images: WebDPImg,
    price: [
      {
        regularPrice: 30000,
        discountPrice: 18000,
      },
    ],
    des: `Do you know that 80% of the websites worldwide are using PHP Technology? Do you also know that the largest web platforms like Facebook and Wikipedia are also using PHP Technology? In Bangladesh, more than 75% of IT Jobs require PHP Technology. If you also look at the international job market, it is above 65%. Undoubtedly if you learn PHP, you will never be jobless.`,
  },
  {
    name: "ASP.NET MVC Core with SQL Server Training",
    images: AspNetImg,
    price: [
      {
        regularPrice: 30000,
        discountPrice: 20000,
      },
    ],
    des: `Our ASP.NET developer training course in Bangladesh for PeopleNTech is for you! Enroll in our ASP.NET training course and elevate your skills in modern web application development. Our comprehensive ASP.NET course focuses on the powerful ASP.NET MVC Core framework, providing hands-on experience that prepares you for real-world challenges. As the premier choice for ASP.NET MVC core training in Bangladesh, we are committed to delivering the best ASP.NET course in Bangladesh. With expert instructors and a curriculum tailored to industry needs, our program is recognized as the best ASP.NET training course in Bangladesh. Enroll today and take the first step toward a successful career in web development!`,
  },
  {
    name: "Mobile Application Development with Dart & Flutter",
    images: FlutterImg,
    price: [
      {
        regularPrice: 30000,
        discountPrice: 15000,
      },
    ],
    des: `Do you know that 80% of the websites worldwide are using PHP Technology? Do you also know that the largest web platforms like Facebook and Wikipedia are also using PHP Technology? In Bangladesh, more than 75% of IT Jobs require PHP Technology. If you also look at the international job market, it is above 65%. Undoubtedly if you learn PHP, you will never be jobless.`,
  },
  {
    name: " Web Application Development in Python and Django",
    images: PythonDjImg,
    price: [
      {
        regularPrice: 30000,
        discountPrice: 15000,
      },
    ],
    des: `Do you know that 80% of the websites worldwide are using PHP Technology? Do you also know that the largest web platforms like Facebook and Wikipedia are also using PHP Technology? In Bangladesh, more than 75% of IT Jobs require PHP Technology. If you also look at the international job market, it is above 65%. Undoubtedly if you learn PHP, you will never be jobless.`,
  },
  {
    name: "Professional Web Development Training",
    images: webDvpImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 10000,
      },
    ],
    des: `Do you know that 80% of the websites worldwide are using PHP Technology? Do you also know that the largest web platforms like Facebook and Wikipedia are also using PHP Technology? In Bangladesh, more than 75% of IT Jobs require PHP Technology. If you also look at the international job market, it is above 65%. Undoubtedly if you learn PHP, you will never be jobless.`,
  },
  {
    name: "Zend Certified (PHP) Engineer",
    images: ZendImg,
    price: [
      {
        regularPrice: 30000,
        discountPrice: 20000,
      },
    ],
    des: `Do you know that 80% of the websites worldwide are using PHP Technology? Do you also know that the largest web platforms like Facebook and Wikipedia are also using PHP Technology? In Bangladesh, more than 75% of IT Jobs require PHP Technology. If you also look at the international job market, it is above 65%. Undoubtedly if you learn PHP, you will never be jobless.`,
  },
];
export const diplomaCoursesArray = [
  {
    name: "Post Graduate Diploma in Cyber Security",
    images: CyberSCImg,
    price: [
      {
        regularPrice: 100000,
        discountPrice: 70000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
  {
    name: "PGD in Network System Administration",
    images: NetworkAdImg,
    price: [
      {
        regularPrice: 100000,
        discountPrice: 70000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
  {
    name: "PGD in Microsoft Web Application Development",
    images: MicrosoftWbImg,
    price: [
      {
        regularPrice: 100000,
        discountPrice: 60000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
  {
    name: "Professional Diploma in Graphics,Editing & Animation",
    images: GraphicsAvImg,
    price: [
      {
        regularPrice: 60000,
        discountPrice: 36000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
  {
    name: "Professional Diploma in MERN Stack Development",
    images: MernStImg,
    price: [
      {
        regularPrice: 60000,
        discountPrice: 30000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
];
export const NetworkCoursesArray = [
  {
    name: "Cisco Certified Network Associate & MikroTik Administration",
    images: CyberSCImg,

    price: [
      {
        regularPrice: 20000,
        discountPrice: 12000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
  {
    name: "Cisco Certified Network Professional- CCNP",
    images: ciscoCRNImg,

    price: [
      {
        regularPrice: 20000,
        discountPrice: 15000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
  {
    name: "Red Hat Linux Training",
    images: LinuxImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 10000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
  {
    name: "MCSA: Windows Server 2019",
    images: MCsaImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 10000,
      },
    ],
    des: `Are you interested & thrilled in Cyber Security Career? Here Post Graduate Diploma in Cyber Security course of PeopleNTech can be the best choice for you. Our Post Graduate Diploma in Cyber Security Training Course is a comprehensive, one-year program designed to equip students with the essential skills and knowledge to tackle the evolving challenges of the digital world. If you are looking for a Cybersecurity course in Bangladesh, This course focuses on safeguarding networks, systems, and sensitive data from cyber threats. Recognized as the best cyber security course in Bangladesh, we provide hands-on experience in risk management, cryptography, and ethical hacking. Whether you're looking to enhance your career or enter the cybersecurity field, this cybersecurity diploma in Bangladesh offers a strong foundation for success in the fast-growing industry.`,
  },
];
export const ProjectManagementArray = [
  {
    name: "IT Security & Ethical Hacking",
    images: CEHImg,
    price: [
      {
        regularPrice: 15000,
        discountPrice: 12000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Certified Information System Auditor (CISA)",
    images: CisaImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 10000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Project Management Professional (PMP)",
    images: PmpImg,
    price: [
      {
        regularPrice: 25000,
        discountPrice: 12500,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Security Strategies in Server and End computing Operating Systems",
    images: OperatingSytImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 15000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Network Security Architecture",
    images: networkSAImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 15000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Application Software Security ",
    images: ApplicationImg,
    price: [
      {
        regularPrice: 15000,
        discountPrice: 20000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Cyber Security Operating Center Management and Threat Hunting",
    images: CyberSecurityImg,
    price: [
      {
        regularPrice: 15000,
        discountPrice: 20000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Cyber Thread Hunting and Analysis",
    images: CyberThreadImg,
    price: [
      {
        regularPrice: 15000,
        discountPrice: 20000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Cloud Computing Security",
    images: CloudComputingImg,
    price: [
      {
        regularPrice: 15000,
        discountPrice: 12000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Digital Forensic Investigation",
    images: DigitalForensicImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 15000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
  {
    name: "Information System Security Architecture",
    images: InformationSSImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 15000,
      },
    ],
    des: `IT Security & Ethical Hacking`,
  },
];
export const GraphicCoursesArray = [
  {
    name: "Creative Graphic Design with Freelancing",
    images: CreativeGDImg,
    price: [
      {
        regularPrice: 20000,
        discountPrice: 10000,
      },
    ],
    des: `Creative Graphic Design with Freelancing`,
  },
];
export const DigitalMarketingCourseArray = [
  {
    name: "Advance Digital Marketing with SEO",
    images: AdvanceDMImg,
    price: [
      {
        regularPrice: 18000,
        discountPrice: 9000,
      },
    ],
    des: `Advance Digital Marketing with SEO`,
  },
];
export const ComputingCoursesArray = [
  {
    name: "No course found!",
  },
];
export const FacilitiesArray = [
  {
    _id: 1,
    image: live,
    title: "Industry Focused Live Course",
    des: "Every piece of our content is developed in collaboration with leading industry experts, ensuring direct support, guidance, and feedback. By participating in industry-centric live courses, our goal is to cultivate professionalism and expertise among our students in their chosen field of study.",
  },
  {
    _id: 2,
    image: jobs,
    title: "Job and internship opportunities",
    des: "Over the past 14 years, our recruitment team has consistently achieved impressive job placement results for our students. Currently, the PeopleNTech job placement team in Bangladesh is actively assisting students in securing positions at major companies in the country.",
  },
  {
    _id: 3,
    image: supportImg,
    title: "Lifetime Support",
    des: "At the conclusion of the course, we offer lifelong support to our trainees. They can engage in real-time chat with our online team or visit our institution for assistance whenever needed.",
  },
  {
    _id: 4,
    image: freelanceImg,
    title: "Support for freelance work",
    des: "We offer comprehensive guidance and assistance to trainees interested in pursuing freelance opportunities post-course completion. Students can access support directly from the institution at any time for their needs.",
  },
  {
    _id: 5,
    image: interview,
    title: "Career and Interview Preparation",
    des: "Our trainees will get direct support for your CV, LinkedIn profile, GitHub profile and job interview at the end of the course.",
  },
  {
    _id: 6,
    image: speech_bubble,
    title: "Guidance directly from mentors",
    des: "If any issues arise during the course, solutions are available from our seasoned mentors solely during designated support hours.",
  },
  {
    _id: 7,
    image: assignment,
    title: "Projects and Assignments",
    des: "Do practice projects with what you are learning, hone your skills. Market standard practical projects and assignments will be done, which you can add to your portfolio.",
  },
  {
    _id: 8,
    image: customer_services,
    title: "24/7 online support",
    des: "Basically, we provide 24/7 online support considering the convenience of our students and those who have started freelancing or new jobs in various sectors after receiving training from us.",
  },
  {
    _id: 9,
    image: requirement,
    title: "Opportunity to practice in the lab",
    des: "We have separate labs so that your regular practice is not interrupted during the course. You can practice your work anytime, as long as you want in the lab.",
  },
  {
    _id: 10,
    image: feedback,
    title: "Career Advancement Program",
    des: "The Career Advancement Program is intended to maintain the relationship of the students with PeopleTech Institute of IT not only during the course but also after the course under close supervision to reach the specific goals.",
  },
  {
    _id: 11,
    image: certificate02,
    title: "Verified Certificate",
    des: "At the end of the course you will be graded on your performance. Accordingly you will get certificate from PeopleTech Institute of IT.",
  },
  {
    _id: 12,
    image: recorded,
    title: "Recorded Class video",
    des: "Many times students do not understand some topics in the class, for them there is the benefit of class videos. So now students can take class with peace of mind. You can solve your problem yourself by watching the video of any difficulty.",
  },
];

export const videoLink = [
  {
    id: 1,
    link: "https://www.youtube.com/embed/ec8I4GI5ULo?si=nrsg-nC10rCLdWxz",
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/GFSQYBZ7-yU?si=4kcl8vR5lSz0gk5B",
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/VEjAVNvh-0Y?si=ax7oY7s2oUsXDACW",
  },
  {
    id: 4,
    link: "https://www.youtube.com/embed/iTIH5s7wZkE?si=OzqApylT6nQ-Z8Z2",
  },
  {
    id: 5,
    link: "https://www.youtube.com/embed/7JmGdV50Lxo?si=IlC6ZJ6U3EdEt0iF",
  },
  {
    id: 6,
    link: "https://www.youtube.com/embed/m4WxQahNkKk?si=KqzA-kpDgdN7TQ_K",
  },
  {
    id: 7,
    link: "https://www.youtube.com/embed/71XgfuAWu9Y?si=KgVkVFvB4ln8Gxc3",
  },
  {
    id: 8,
    link: "https://www.youtube.com/embed/S5ky_2p12IU?si=5dZIFlsKfHm9qeiS",
  },
];

export const ConcernArray = [
  {
    id: "01",
    images: NrbImg,
    href: "https://nrbc.tv/",
  },
  {
    id: "02",
    images: WustImg,
    href: "https://www.wust.edu/",
  },
  {
    id: "03",
    images: UsaImg,
    href: "https://higherstudyusa.com/",
  },
  {
    id: "04",
    images: PntdsImg,
    href: "https://www.pntdns.com/",
  },
  {
    id: "05",
    images: VolumeCoderImg,
    href: "https://www.volumecoder.com/",
  },
  {
    id: "06",
    images: JobResumeImg,
    href: "https://jobnresume.com/",
  },
  {
    id: "07",
    images: BdStudioImg,
    href: "https://bdclippingstudio.com/",
  },
  {
    id: "08",
    images: CbbLImg,
    href: "https://cbbl.com.bd/",
  },
  {
    id: "09",
    images: SmartIllusionImg,
    href: "https://smartillusion.com/",
  },
  {
    id: "10",
    images: UpsCaleImg,
    href: "https://www.upscalelearning.com/",
  },
  {
    id: "11",
    images: CyberImg,
    href: "https://care247.tech/",
  },
  {
    id: "12",
    images: FrontiaImg,
    href: "https://frontia.com.bd/",
  },
  {
    id: "13",
    images: GtsImg,
    href: "https://gts365.com/",
  },
  {
    id: "14",
    images: FemaleInformationImg,
    href: "https://fiit.com.bd/",
  },
  {
    id: "15",
    images: BdpoliticaImg,
    href: "https://bdpolitica.com/",
  },
];

export const OurTeamArray = [
  {
    name: "Engr.Abubokor Hanip",
    title: "Founder & CEO",
    Image: HanipImg,
  },
  {
    name: "Farhana Hanip",
    title: "President & Managing Director",
    Image: FarhanaHanipImg,
  },
  {
    name: "Mashrul Hossain Khan Leon",
    title: "Vice President",
    Image: LeonImg,
  },
  {
    name: "Mohammad Abdul Hamid",
    title: "Chief Operating Officer (COO)",
    Image: HamidImg,
  },
  {
    name: "Fatema Tuj Johora",
    title: "Manager-HR & Admin",
    Image: JohoraImg,
  },
  {
    name: "Selim Reza",
    title: "Manager-Project & Operations",
    Image: SelimRezaImg,
  },
  {
    name: "Md Mamun Rahman",
    title: "Manager-IT",
    Image: MamunImg,
  },
  {
    name: "Ashaqul Islam Tanzil",
    title: "Manager-Digital Marketing",
    Image: TanzilImg,
  },
  {
    name: "Sheikh Ahmed ",
    title: "Deputy Manager-Operations",
    Image: SheikhAhmedImg,
  },
  {
    name: "Hasina Akter",
    title: "Assistant Manager,Accounts",
    Image: HasinaImg,
  },
  {
    name: "Md.Hafizur Rahman",
    title: "Team Lead-Software Development",
    Image: HafizurImg,
  },
  {
    name: "Kazi Farjana Duti",
    title: "Center Manager and QA Officer",
    Image: FarzanaImg,
  },
  {
    name: "Nurunnabi Sarker",
    title: "Team Lead-Business Development",
    Image: NurnobiImg,
  },
  {
    name: "Md.Ashraful Haque",
    title: "Team Lead-Business Development",
    Image: AshrafulImg,
  },
  {
    name: "Md.Monjurul Alam",
    title: "Team Lead-Industrial Attachment",
    Image: MonjurulImg,
  },
  {
    name: "Md.Yousuf Ali",
    title: "Senior Executive-Business Development",
    Image: YousufImg,
  },
  {
    name: "Sajjad Hossain",
    title: "Senior Programmer-Software Development",
    Image: SazzadImg,
  },
  {
    name: "Shakowat Zaman",
    title: "Programmer-Software Development",
    Image: ShakowatImg,
  },
];
export const MentorsArray = [
  {
    _id: "nirjh-anjum",
    name: "Nirjhor Anjum",
    title: "Faculty Head & Chief Consultant",
    des: `Involved in Programming since 1999,
     almost 20 years. Worked as Technical Lead 
     and Project Manager, almost 11 years. Served
     5 Multinational and 7 Local Companies in India
     and Bangladesh. Successfully Developed and Led
     50+ Software projects and 200+ Web projects. 
     Experienced in 4 Programming Languages, 17 CMS,
     and 10 Web Frameworks. Achieved 38 International
     IT Certifications with 12 Professional Training.
     Mentored 1500+ students in Software Development
     and Project Management . Columnist on 1 English
     and 3 Bengali Daily Newspapers`,
    Skills: [
      {
        name: "HTML",
      },
      {
        name: "PHP",
      },
      {
        name: "MYSQL",
      },
      {
        name: "C#",
      },
      {
        name: "Java",
      },
      {
        name: "Python",
      },
      {
        name: "C++",
      },
    ],
    email: "nirjhor@peoplentech.com.bd",
    phone: "01799446655",
    education: [
      {
        name: "MSC",
        university: "MSc in CS (Software Engineering)",
        title: "Passed with 85% Marks ",
      },
      { name: "BSC", university: "BSc in CIS", title: "Passed with 81% Marks" },
    ],
    certificate: [
      {
        name: "Accredited Project Manager™ (APRM)",
        title: "International Organization for Project Management™",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
    ],
    image: AnjumImage,
  },
  {
    _id: "mahbubur-rahman",
    name: "Md. Mahbubur Rahman",
    title: "Sr. Faculty (Asp.Net MVC)",
    des: `I am an ICT Specialist, specially Solution Architect and
     Software Engineer in the Institute of Water Modelling (IWM). 
     I have experience in software project management, enterprise
     solution architecting, system analysis, system design, data 
     modelling, and database design and enterprise software development.
     I am also experienced in managing software quality assurance and 
     quality control, testing, configuration management, implementation 
     of enterprise solution for client/server, Intranet/Internet/web based 
     software application and mobile apps. I am also an experienced Trainer
     of leading and reputed training organizations in Bangladesh.`,
    Skills: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "MYSQL",
      },
      {
        name: "SQL Server",
      },
      {
        name: "Oracle",
      },
      {
        name: "java",
      },
      {
        name: "C#",
      },
      {
        name: ".Net",
      },
    ],
    email: "emahbub@gmail.com",
    phone: "01799446655",
    certificate: [
      {
        name: "fdafaf",
        title: "ddd",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
    ],
    education: [
      {
        name: "MSC",
        university: "",
        title: "",
      },
      {
        name: "BSC",
        university: "",
        title: "",
      },
    ],
    image: MahbuburRahmanImage,
  },
  {
    _id: "amjadul-alam",
    name: "Amjadul Alam",
    title: "Senior Faculty, Database Management",
    des: `9+ years experience in Banking & IT sector completed MSC in 
    Computer Science & Engineering And MBA in Management Information 
    System.-Achieved Oracle Cloud Infrastructure Associate certification.
    OCP in 10g,11g,12c & 19c.Also certified in Detective Control 
    (Audit Vault & Database Firewall) ®-Expertise & practical knowledge 
    in Oracle Databases, Real Application Cluster configuration & 
    maintenance, Oracle Active Data Guard, Snapshot Database, 
    Switchover & failover in real time.-Expertise in RMAN backup Restore
    & Recovery, Export & Import Backup, RMAN catalog. -Practical 
    experience in Oracle Database performance tuning related various 
    activities in Installation configuration, and clustering Oracle 
    Database in AIX IBM power server. Practical knowledge in 
    configuration, and maintenance of MS SQL server, and Mysql Database.
   -Practical experience in PL SQL query & Crystals report customized 
   related tasks. -Experience in Shell script & API configuration etc 
   related activists.`,
    Skills: [
      {
        name: "Database Architect",
      },
      {
        name: "Oracle Real Application Cluster",
      },
      {
        name: "Physical Standby",
      },
      {
        name: "Oracle Performance Tuning",
      },
      {
        name: "troubleshoots",
      },
      {
        name: "SQL Server administration",
      },
      {
        name: "Oracle 19c",
      },
    ],
    email: " info@peoplentech.com.bd",
    phone: "01611446699",
    education: [
      {
        name: "MSC IN CSE",
        university: "United International University ",
        title: "(UIU)",
      },
      {
        name: "MBA in MIS",
        university: "Southern University",
        title: "Bangladesh",
      },
    ],
    certificate: [
      {
        name: `Oracle Cloud Infrastructure 2021 Certified Associate`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Oracle Database 19c Administrator Certified Professional`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Database Administration 12c Certified Professional`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Oracle Database 12c: Data Guard Administrator / Oracle Database Security-Detective Control`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Oracle Cloud Infrastructure 2021 certified Associate`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Database Administration 2019 Certified Professional`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Database Administration 12c Certified Professional`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Administration 11g Certified Professional`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Oracle Database 11g`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Microsoft .Net Framework-Application Development Foundation`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Microsoft .Net Framework 2.0 Web-Based Client Development`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
      {
        name: `Performance Tuning exam 1Z0-054/Oracle Database Security-Detective Control`,
        title: "Oracle University",
        link: "https://www.io4pm.org/badges/25672905972227",
      },
    ],
    image: AmjadulAlamImage,
  },
];

export const contactArray = {
  course: {
    title: "Course Inquiry",
    role: [
      {
        name: "Ashraful Haque",
        number: "01844944569 (Ext:2017)",
      },
      {
        name: "Yousuf Ali",
        number: "01844944572 (Ext:2030)",
      },
      {
        name: "Md Monjurul Alam ",
        number: "01844944566 (Ext:2026)",
      },
      {
        name: "Tahseen Ahmed Tanha",
        number: "01885981250 (Ext:2019)",
      },
    ],
  },
  inquire: {
    title: "Course Inquire",
    role: [
      {
        name: "Nurunnabi Sarker",
        number: "01929554499 (Ext:2022)",
      },
      {
        name: "Rifa Tasnia",
        number: "01929554499 (Ext:2022)",
      },
      {
        name: "Sajib Mia",
        number: "01929445599 (Ext:2031)",
      },
      {
        name: "Foysal Mahmud Shaun",
        number: "01324763591 (Ext:2036)",
      },
    ],
  },
  class: {
    title: "Class Inquire",
    role: [
      {
        name: "Fatema Tuj Johora",
        number: "01929449911 (Ext:2015)",
      },
      {
        name: "Sheikh Ahmed",
        number: "01885981257 (Ext:2032)",
      },
      {
        name: "Esmat Jahan Eati",
        number: "01929440099 (Ext:2000)",
      },
      {
        name: "Amdadul Hasan",
        number: "01324763589 (Ext:2033)",
      },
    ],
  },
  Corporate: {
    title: "Corporate Inquiry",
    role: [
      {
        name: "Sheikh Ahmed",
        number: "01611446699 (Ext:2032)",
      },
      {
        name: "Ashraful Haque",
        number: "01799446655 (Ext:2017)",
      },
      {
        name: "Nurunnabi Sarker",
        number: "01929554499 (Ext:2022)",
      },
    ],
  },
  GovtProject: {
    title: "Govt.Project",
    role: [
      {
        name: "Selim Reza",
        number: "01885981259 (Ext:2028)",
      },
    ],
  },
  Bitm: {
    title: "BITM",
    role: [
      {
        name: "Tasnim Khan Mim",
        number: "01885981258 (Ext:)",
      },
    ],
  },
  IDB: {
    title: "IDB Inquire",
    role: [
      {
        name: "Kazi Farjana Duti",
        number: "01929449900 (Ext:2026)",
      },
    ],
  },
  Software: {
    title: "Software Development",
    role: [
      {
        name: "Sheikh Ahamed",
        number: "01611446699 (Ext:2032)",
      },
    ],
  },
  Recruitment: {
    title: "Recruitment & Job Placement ",
    role: [{ name: "Nazmul Hasan", number: "01929559900 (Ext:2035)" }],
  },
  Complain: {
    title: "Complain (Quality Management)",
    role: [
      {
        name: "Sheikh Ahamed",
        number: "01611446699 (Ext:2032)",
      },
    ],
  },
};
export const footerArray = {
  webBio: {
    images: FooterLogo,
    des: "Established with the goal of fostering success, PeopleNTech Institute of IT is a trusted institution. Over the past enduring nine years since its establishment, it has contributed to the development of Digital Bangladesh and achieved multifaceted success through trans-formative changes.",
  },
  quickLinks: {
    title: "Quick Links",
    role: [
      {
        name: "Join Free Seminars",
        href: "/",
      },
      {
        name: "Success Story",
        href: "/",
      },
      {
        name: "Privacy Policy",
        href: "/",
      },
      {
        name: "Refund Policy",
        href: "/",
      },
      {
        name: "Terms and Conditions",
        href: "/",
      },
      {
        name: "Blog",
        href: "/",
      },
    ],
  },
  aboutUs: {
    title: "About Us",
    role: [
      {
        name: "About Us",
        href: "/",
      },
      {
        name: "Our Team",
        href: "/",
      },
      {
        name: "Our Mentors",
        href: "/",
      },
      {
        name: "Apply for Trainer",
        href: "/",
      },
    ],
  },
  contactUs: {
    title: "Contact Us",
  },
};
