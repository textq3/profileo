/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "textq3",
  title: "Hey 👋 Its Usama Gul",
  subTitle: emoji(
    "🚀 A Guy in Cyber Security.Guardian of Code, Sentinel of Security: Crafting robust solutions, breaking vulnerabilities, and securing the digital frontier. {/**/}."
  ),
  resumeLink:
 	"empty" , // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/textq3",
  linkedin: "https://www.linkedin.com/in/usama-gul/",
  gmail: "gul645690@gmail.com",
  gitlab: false,
  facebook: false,
  medium: "",
  instagram: "https://www.instagram.com/usamagul3238/",
  stackoverflow: false,
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Coding and Security enthusiast who loves building, breaking, and the delightful loop in between. Check out my tech stack below ",
  skills: [
    emoji(
      "⚡ Deliver high-end quality solutions as per your requirements (API, Web, Desktop, Linux, Windows, Cyber Security, Cloud)"
    ),
    emoji("⚡ Deliver and manage cloud applications & services on AWS, Azure, GCP & DigitalOcean"),
    emoji(
      "⚡Safeguarding digital landscapes through Penetration Testing, Vulnerability Assessment, Network Security, Application Security, Incident Response, Security Assessment & Testing, Information Security, and Malware Analysis for resilient cybersecurity )"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python-3/2",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "javascript/typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "c/c++",
      fontAwesomeClassname: "fas fa-keyboard"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fas fa-bars"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3/sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "cloud",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "ansible",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cubes"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Air University",
      logo: require("./assets/images/airunilogo.png"),
      subHeader: "Bachelors of Science in Cyber Security",
      duration: "2019 - 2023",
      desc: "Completed 4 years of the program. Took courses about Network Security, Cryptography, Web Security, Operating Systems, Programming Practices & Principles, ...",
      descBullets: [
        "Acted as Blue-Team Lead of Air University Cyber Security Society",
        "Organizated National level CTF Hackathon",
        "Qualified for the Region  level CTF Hackathon by Ignite and Ministry of IT (2021-2022)",
        "Held various Cyber Security workshops and seminars for students."
      ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CYBER SECURITY",
      progressPercentage: "70%"
    },
    {
      Stack: "DEVOPS | CLOUD",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cyber Security Consultant (Cryptography || AWS Security || Python)",
      company: "Spectiv labs",
      companylogo: require("./assets/images/trustlinelogo.jpeg"),
      date: "October 2023 – Present",
      desc: "Full Time Based in USA (Remote)",
    },
    {
      role: "Cyber Security Specialist",
      company: "Prismware Technologies",
      companylogo: require("./assets/images/cozmlogo.jpeg"),
      date: "July 2023 – Sept 2023",
      desc: "Contract Based in Canada (Remote)",
    },
    {
      role: "Digital Forensics Consultant",
      company: "Filmon ltd",
      companylogo: require("./assets/images/horizonlogo.png"),
      date: "December 2020 – Present",
      desc: "Part time",
    },
    {
      role: "Cyber Security Consultant(Digital and Network Security) ",
      company: "AirOverflow",
      companylogo: require("./assets/images/contractlogo.png"),
      date: "2022 – 2023",
      desc: "Contract (Remote)",
    },
    {
      role: "Freelance Development & Pentest",
      company: "Upwork/Fiverr",
      companylogo: require("./assets/images/upworklogo.png"),
      date: "2020 - Present",
      desc: "Freelance | Based on Upwork And Fiverr",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Startup / Projects",
  subtitle: "SOME STARTUPS AND AMAZING TECH THAT I WORKED ON!",
  projects: [
    {
      image: require("./assets/images/airoverflowlogo.png"),
      projectName: "AirOverflow",
      projectDesc: "Worked on the platforms for CTF challenges and real time cyber simulations",
      footerLink: [
        //  you can add extra buttons here.
        {
          name: "Startup Website",
          url: "https://airoverflow.com/"
        }
      ]
    },
    {
      image: require("./assets/images/subrake.png"),
      projectName: "Pakistan Cyber Security Challenge Development",
      projectDesc: "I deveolped Digital forensics and Network Security Challenges in Pakistan First Ever Cyber Security Hackathon",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://airoverflow.com/portfolio/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Developer of Pakistan First Cyber Security Hackathon",
      subtitle:
        "I was part of Development team of Pakistan First Cyber Security Hackathon",
      image: require("./assets/images/hackathon23.jpeg"),
      imageAlt: "Hackathon'22",
      footerLink: [
        {
          name: "Ceremory at Air university, Islamabad",
          url: "#"
        },
      ]
    },
    {
      title: "Blue Team Lead in AUCSS",
      subtitle:
        "I was awareded this Cert of Appreciation for Leading the Blue team",
      image: require("./assets/images/pucon.jpeg"),
      imageAlt: "BlueTeam Lead",
      footerLink: [
        {
          name: "Award received from Dean of Cyber Department ",
          url: "#"
        },
      ]
    },
    {
      title: "",
      subtitle:
        "Appreciation from DEAN of Cyber Security Dept for my services in past 4 years",
      image: require("./assets/images/hackathon.jpeg"),
      imageAlt: "Ignite hackathon",
      footerLink: [
        {
          name: "HOD and DEAN handing  the award",
          url: "https://ignite.org.pk/digital-pakistan-grand-finale-awards-ceremony/"
        },
      ]
    },
    {
      title: "Regional Runner Up for Hackathon 2022)",
      subtitle:
	     "I Qualified for the regional CTF after competing teams all over Pakistan",
      image: require("./assets/images/hackathon2.png"),
      imageAlt: "Ignite Hackathon",
      footerLink: [
        {
          name: "we busy in finding flags",
          url: "https://ignite.org.pk/digital-pakistan-grand-finale-awards-ceremony/"
        },
      ]
    },
   ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://web.archive.org/web/20201203033133/https:/www.shellvoide.com/wifi/how-to-crack-wifi-password-using-pmkid-new-method-wifibroot/",
      title: "Capturing the PMKID of WPA2 and performing brute force against it",
      description:
        "This guide covers attacking the weakness discovered by Jens Steube the writer of Hashcat in the specification of WPA2. This allows an attacker to capture a hash without establishing the 4 way handshake with the targetted wireless System. We here are going to see a customized tool developed by me for the purpose."
    },
    {
      url: "https://web.archive.org/web/20210614222116/https://www.shellvoide.com/wifi/setting-up-fake-access-point-or-evil-twin-to-hack-wifi-rogue-ap/",
      title: "How to Setup Fake (Rogue) Access Point on Linux | hostapd",
      description:
        "how one can use Fake (Rogue) Access Point to sneak passphrases and other important target details over the air by showing targets a fabricated document. We will do hell of this task using hostapd, a well-written ad-hoc software."
    },
    {
      url: "https://web.archive.org/web/20210119000817/https:/www.shellvoide.com/wifi/how-to-setup-captive-portal-login-with-rogue-ap-nginx/",
      title: "Captive Portal Guide: Setup Your Fake Access Point",
      description:
        "A comprehensive guide published on Captive Portals in the wild. A Captive portal is an advanced level technique used by attackers to harvest WiFi Credentials. It involves various steps and configuration and is one of the most advanced methodologies used in the realm of WiFi Hacking."
    },
    {
      url: "https://web.archive.org/web/20210118223148/https://www.shellvoide.com/python/scraping-and-download-all-images-from-a-web-page-python/",
      title: "Scraping and Download All Images from a Web Page",
      description:
        "Here's a small guide to help you downloading images from website and web pages in a bulk amount through python. This guide will help you through the basics of downloading images from a web source in a bulk by extractin"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3045435429",
  email_address: "gul645690@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hash3liZer", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
