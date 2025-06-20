/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-5NXB5SKC0N",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Harshil",
  logo_name: "harshil.s()",
  full_name: "Harshil Shah",
  subTitle:
    "Aspiring Full Stack Developer. I prefer to be the dumbest guy in the room to grow exponentially in a fast-paced environment.",
  resumeLink:
    "https://drive.google.com/file/d/1FSdstbbbdAzN1yURV8KOdouaCwmUe7bo/view?usp=share_link",
  mail: "mailto:harshil.cse@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sHarshil-Shah",
  linkedin: "https://www.linkedin.com/in/sharshil/",
  gmail: "harshil.cse@gmail.com",
  gitlab: "https://gitlab.com/sharshil",
  facebook: " ",
  twitter: "https://twitter.com/harshil_shah99",
  instagram: "https://www.instagram.com/s_harshil_99/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dalhousie University",
      subtitle: "Masters in Applied Computer Science",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Achieved AWS Cloud Practitioner Certificate",
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing, Advance Cloud Computing",
        "⚡ Upcoming courses: Advanced Topics in Web Development and Advance Cloud Architecture",
      ],
      website_link: "https://www.dal.ca/",
    },
    {
      title: "Charotar University of Science and Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "charusat.png",
      alt_name: "CHARUSAT",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ Got Merit based Scholarship in 1st, 2nd and 3rd year of Computer Engineering",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.charusat.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services (AWS)",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/961b498e-b76c-46a9-80ad-5be67d5cfecb/linked_in_profile",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed two internships and was employed full-time for almost 2 years. I'm actively seeking Co-Op opportunity.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Full-stack Software Engineer",
          company: "Manulife",
          company_url: "https://www.manulife.ca/personal.html",
          logo_path: "manulife.png",
          duration: "July 2024 - Present",
          location: "Waterloo, Ontario - Hybrid",
          description: [
            "– Develop and maintain full-stack business applications, managing the entire software development lifecycle from design to deployment and continuous improvement.",
            "– Design and implement robust end-user interfaces, databases, APIs, and server-side logic for both front-end and back-end web application components.",
            "– Apply disciplined coding practices, design patterns, and automation to ensure agility and deliver high-quality, maintainable code.",
            "– Leverage development frameworks and third-party libraries to accelerate development and enhance application functionality.",
            "– Conduct comprehensive testing and analysis to ensure software applications meet stringent quality standards and exceed end-user requirements.",
            "– Author detailed system design specifications, guiding effective system and program development.",
            "– Contribute to the development of automated test harnesses, ensuring the consistent delivery of high-quality code.",
            '– Perform investigative "Spikes" to proactively mitigate technical uncertainty and risk in projects.',
            "– Troubleshoot errors, resolve bugs, and optimize software efficiency and performance.",
            "– Participate in ideation and brainstorming sessions, contributing to the development of innovative digital solutions.",
            "– Create product prototypes using a variety of design techniques.",
            "– Prepare essential documentation, including deployment, maintenance, support, and business requirement specifications.",
            "– Demonstrate strong understanding and application of CI/CD methodologies, API development, DevSecOps principles, and database design.",
            "– Conduct peer reviews of code and deliverables, fostering continuous learning and improvement within the team.",
          ],
          color: "#00FF00",
        },
        {
          title: "Intern - Developer",
          company: "Dayforce",
          company_url: "https://www.dayforce.com/",
          logo_path: "dayforce.jpeg",
          duration: "September 2023 - June 2024",
          location: "Remote",
          description: [
            "– Develop and test robust, scalable, and reusable software services.",
            "– Create UI components using React, adhering to Micro-Frontend best practices.",
            "– Integrate system components using React Redux, Context API, and React Router to ensure optimal design and seamless application navigation.",
            "– Adhere to testing frameworks and best practices, achieving at least 80% code coverage to ensure high-quality code.",
            "– Document software designs and maintain the team's development wiki space.",
            "– Collaborate effectively within the Scrum team and with various stakeholders.",
          ],
          color: "blue",
        },
        {
          title: "Project Engineer",
          company: "Wipro",
          company_url: "https://www.wipro.com/",
          logo_path: "wipro.png",
          duration: "September 2020 - July 2022",
          location: "Remote",
          description: [
            "– Execute comprehensive testing for newly developed features while providing critical support for production events, ensuring the reliability and availability of production servers.",
            "– Engineered and deployed Java Spring Boot, Java REST APIs or Batch Scripts' automated solutions, significantly reducing manual effort for the support team.",
            "– Analyzed and resolved production incidents, concurrently validating new features to guarantee the stability and reliability of deployed systems.",
            "– Developed and maintained database migration scripts using SSMS for MSSQL, streamlining schema transitions.",
            "– Authored and integrated log parsing and system health monitoring scripts via CRON jobs, proactively identifying and mitigating production issues to ensure high system availability.",
            "– Collaborated cross-functionally with development teams to orchestrate end-to-end deployment processes, ensuring seamless integration of new software with minimal disruption.",
            "– Created and maintained clear technical documentation covering the development lifecycle, code modifications, and new features to facilitate ongoing maintenance.",
          ],
          color: "#2962FF",
        },
        {
          title: "Software Engineer Intern",
          company: "Capgemini",
          company_url: "https://www.capgemini.com/ca-en/",
          logo_path: "cap.png",
          duration: "December 2019 - April 2020",
          location: "Remote",
          description: [
            `– Represented a team of 4 interns to develop In-House Global Code Review Web Portal`,
            `– Implemented SVM classifier with accuracy of 87.65% for predicting any code as Good/Bad`,
            `– Participated in walkthrough reviews of technical specifications, programs, code, and unit test plans`,
            `– Classification Dataset was based on Halstead Matrix parameters and Cyclomatic Complexity of code`,
          ],
          color: "#ee3c26",
        },
        {
          title: "Python Backend Developer",
          company: "Sruta Technologies",
          company_url: "https://srutatech.com/",
          logo_path: "sruta.jpeg",
          duration: "April 2019 - June 2019",
          location: "Remote",
          description: [
            "– Developed analytics backend for Blood pressure data using Python",
            "– Historical data was fetched from MySQL database",
          ],
          color: "#61A4FE",
        },
        {
          title: "Research And Development Intern",
          company: "Ellipsis Infotech",
          company_url: "https://www.ellipsisinfotech.com/",
          logo_path: "e.png",
          duration: "May 2018 - June 2018",
          location: "Remote",
          description: [
            "– Research & learning about various Metallurgical terminologies while working closely with 1 client",
            "– Feature extraction from provided image dataset is done with 99% accuracy using OpenCV",
            "– Accomplished the successful delivery of a software resulting in a 100% reduction in costs",
            "– It was later integrated and deployed to the main product and now used by 3 of their customers",
            "– Developed Image Analysis application for windows platform using Visual Studio and OpenCV",
          ],
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harshil.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Giving Back to Community",
    subtitle:
      "I try to be active on platforms like StackOverflow to give back to developer community.",
    link: "https://stackoverflow.com/users/9528129/harshil-shah",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Studio7",
      url: "https://studio7.netlify.app/", //"https://github.com/sHarshil-Shah/Studio7_JAVA-FS.git",
      description:
        "A learning project to combine Angular and Spring Boot's knowledge to make a static Video Library",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos-angular",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos-spring",
        },
      ],
    },
    {
      name: "TrackTips",
      url: "https://github.com/sHarshil-Shah/TrackTips",
      description:
        "Track Stock Market tips from various sources at one location. Whole Cloud Architecture is formed by a AWS CloudFormation Script. Individual Cloud Project for 5409",
      languages: [
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "TripMate",
      url: "https://github.com/sHarshil-Shah/TripMate",
      description:
        "Using SOLID and Design Principles (e.g. Abstract Factory, Singleton, Adapter) build a TDD driven application that let's one choose  Group Project for 5308 ASDC",
      languages: [
        {
          name: "Spring Boot",
          iconifyClass: "logos-spring",
        },
      ],
    },
    {
      name: "Backup Folders Google Drive",
      url: "https://github.com/sHarshil-Shah/GoogleDriveAPI",
      description:
        "Using Google Drive API, backup your folders to get in sync with",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "GoogleDrive",
          iconifyClass: "logos-google-drive",
        },
      ],
    },
    {
      name: "CodeBuddy",
      url: "https://github.com/sHarshil-Shah/Code-Review-System",
      description:
        "Machine Learning based code review system that identifies code either good or bad based on previous data ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Python - Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
