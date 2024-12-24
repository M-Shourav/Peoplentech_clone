import {
  assignment,
  certificate02,
  customer_services,
  feedback,
  freelanceImg,
  interview,
  jobs,
  live,
  logo,
  recorded,
  requirement,
  speech_bubble,
  supportImg,
} from "@/public/assets";

export const NavArray = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Courses",
    href: "/",
  },
  {
    name: "Upcoming Batch",
    href: "/",
  },
  {
    name: "Join Seminars",
    href: "/",
  },
  {
    name: "Success Stories",
    href: "/success",
  },
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
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

export const footerArray = {
  webBio: {
    images: logo,
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
