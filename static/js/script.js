    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const colors = ["#4feeff", "#8a4fff", "#5a189a", "#f2f2f2"];
setSearch
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 2;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 70; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

 function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const burger = document.querySelector(".wrapper-menu");
  menu.classList.toggle("active");
  burger.classList.toggle("open");
}


function setSearch(value) {
    document.getElementById("searchInput").value = value;
}

const careerData = {
    "blockchain": {
        roadmap: {
            title: "Blockchain Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/blockchain-roadmap"
        },
        resources: {
            title: "Blockchain Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/blockchain-resources"
        },
        projects: {
            title: "Blockchain Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/blockchain-project"
        }
    },
    "chatbot": {
        roadmap: {
            title: "Chatbot Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/chatbot-roadmap"
        },
        resources: {
            title: "Chatbot Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/chatbot-resources"
        },
        projects: {
            title: "Chatbot Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/chatbot-project"
        }
    },
    "cloud computing": {
        roadmap: {
            title: "Cloud Computing Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/cloud-computing-roadmap"
        },
        resources: {
            title: "Cloud Computing Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/cloud-computing-resources"
        },
        projects: {
            title: "Cloud Computing Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/cloud-computing-project"
        }
    },
    "computer vision": {
        roadmap: {
            title: "Computer Vision Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/computer-vision-roadmap"
        },
        resources: {
            title: "Computer Vision Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/computer-vision-resources"
        },
        projects: {
            title: "Computer Vision Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/computer-vision-project"
        }
    },
    "cyber security": {
        roadmap: {
            title: "Cyber Security Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/cyber-security-roadmap"
        },
        resources: {
            title: "Cyber Security Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/cyber-security-resources"
        },
        projects: {
            title: "Cyber Security Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/cyber-security-project"
        }
    },
    "agentic ai": {
        roadmap: {
            title: "Agentic Ai Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/agentic-ai-roadmap"
        },
        resources: {
            title: "Agentic Ai Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/agentic-ai-resources"
        },
        projects: {
            title: "Agentic Ai Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/agentic-ai-project"
        }
    },
    "ai": {
        roadmap: {
            title: "AI Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/ai-roadmap"
        },
        resources: {
            title: "AI Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/ai-resources"
        },
        projects: {
            title: "AI Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/ai-project"
        }
    },
    "api developer": {
        roadmap: {
            title: "API Developer Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/api-developer-roadmap"
        },
        resources: {
            title: "API Developer Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/api-developer-resources"
        },
        projects: {
            title: "API Developer Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/api-developer-project"
        }
    },
    "backend developer": {
        roadmap: {
            title: "Backend Developer Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/backend-developer-roadmap"
        },
        resources: {
            title: "Backend Developer Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/backend-developer-resources"
        },
        projects: {
            title: "Backend Developer Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/backend-developer-project"
        }
    },
    "big data": {
        roadmap: {
            title: "Big Data Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/big-data-roadmap"
        },
        resources: {
            title: "Big Data Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/big-data-resources"
        },
        projects: {
            title: "Big Data Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/big-data-project"
        }
    },
    "machine learning": {
        roadmap: {
            title: "Machine Learning Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/machine-learning-roadmap"
        },
        resources: {
            title: "Machine Learning Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/machine-learning-resources"
        },
        projects: {
            title: "Machine Learning Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/machine-learning-project"
        }
    },
    "mobile application": {
        roadmap: {
            title: "Mobile Application Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/mobile-application-roadmap"
        },
        resources: {
            title: "Mobile Application Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/mobile-application-resources"
        },
        projects: {
            title: "Mobile Application Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/mobile-application-project"
        }
    },
    "nlp": {
        roadmap: {
            title: "NLP Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/nlp-roadmap"
        },
        resources: {
            title: "NLP Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/nlp-resources"
        },
        projects: {
            title: "NLP Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/nlp-project"
        }
    },
    "robotics": {
        roadmap: {
            title: "Robotics Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/robotics-roadmap"
        },
        resources: {
            title: "Robotics Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/robotics-resources"
        },
        projects: {
            title: "Robotics Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/robotics-project"
        }
    },
    "web developer": {
        roadmap: {
            title: "Web Developer Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/web-developer-roadmap"
        },
        resources: {
            title: "Web Developer Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/web-developer-resources"
        },
        projects: {
            title: "Web Developer Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/web-developer-project"
        }
    },
    "data science": {
        roadmap: {
            title: "Data Science Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/data-science-roadmap"
        },
        resources: {
            title: "Data Science Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/data-science-resources"
        },
        projects: {
            title: "Data Science Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/data-science-project"
        }
    },
    "devops": {
        roadmap: {
            title: "DevOps Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/devops-roadmap"
        },
        resources: {
            title: "DevOps Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/devops-resources"
        },
        projects: {
            title: "DevOps Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/devops-project"
        }
    },
    "game developer": {
        roadmap: {
            title: "Game Developer Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/game-developer-roadmap"
        },
        resources: {
            title: "Game Developer Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/game-developer-resources"
        },
        projects: {
            title: "Game Developer Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/game-developer-project"
        }
    },
    "gen ai": {
        roadmap: {
            title: "Gen AI Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/gen-ai-roadmap"
        },
        resources: {
            title: "Gen AI Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/gen-ai-resources"
        },
        projects: {
            title: "Gen AI Project Ideas",
            img: "../static/assets/projects.jpg",
            link: "/page/gen-ai-project"
        }
    },
    "iot": {
        roadmap: {
            title: "IoT Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/iot-roadmap"
        },
        resources: {
            title: "IoT Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/iot-resources"
        },
        projects: {
            title: "IoT Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/iot-project"
        }
    },
    "anesthesiologist": {
        roadmap: {
            title: "Anesthesiologist Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/anesthesiologist-roadmap"
        },
        resources: {
            title: "Anesthesiologist Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/anesthesiologist-resources"
        },
        projects: {
            title: "Anesthesiologist Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/anesthesiologist-project"
        }
    },
    "cardiologist": {
        roadmap: {
            title: "Cardiologist Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/cardiologist-roadmap"
        },
        resources: {
            title: "Cardiologist Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/cardiologist-resources"
        },
        projects: {
            title: "Cardiologist Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/cardiologist-project"
        }
    },
    "dentist": {
        roadmap: {
            title: "Dentist Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/dentist-roadmap"
        },
        resources: {
            title: "Dentist Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/dentist-resources"
        },
        projects: {
            title: "Dentist Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/dentist-project"
        }
    },
    "doctor": {
        roadmap: {
            title: "Doctor Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/doctor-roadmap"
        },
        resources: {
            title: "Doctor Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/doctor-resources"
        },
        projects: {
            title: "Doctor Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/doctor-project"
        }
    },
    "eye specialist": {
        roadmap: {
            title: "Eye Specialist Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/eye-specialist-roadmap"
        },
        resources: {
            title: "Eye Specialist Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/eye-specialist-resources"
        },
        projects: {
            title: "Eye Specialist Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/eye-specialist-project"
        }
    },
    "gynecologist": {
        roadmap: {
            title: "Gynecologist Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/gynecologist-roadmap"
        },
        resources: {
            title: "Gynecologist Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/gynecologist-resources"
        },
        projects: {
            title: "Gynecologist Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/gynecologist-project"
        }
    },
    "nurse": {
        roadmap: {
            title: "Nurse Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/nurse-roadmap"
        },
        resources: {
            title: "Nurse Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/nurse-resources"
        },
        projects: {
            title: "Nurse Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/nurse-project"
        }
    },
    "pharmacist": {
        roadmap: {
            title: "Pharmacist Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/pharmacist-roadmap"
        },
        resources: {
            title: "Pharmacist Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/pharmacist-resources"
        },
        projects: {
            title: "Pharmacist Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/pharmacist-project"
        }
    },
    "physiotherapist": {
        roadmap: {
            title: "Physiotherapist Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/physiotherapist-roadmap"
        },
        resources: {
            title: "Physiotherapist Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/physiotherapist-resources"
        },
        projects: {
            title: "Physiotherapist Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/physiotherapist-project"
        }
    },
    "surgeon": {
        roadmap: {
            title: "Surgeon Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/surgeon-roadmap"
        },
        resources: {
            title: "Surgeon Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/surgeon-resources"
        },
        projects: {
            title: "Surgeon Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/surgeon-project"
        }
    },
    "content creator": {
        roadmap: {
            title: "Content Creator Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/content-creator-roadmap"
        },
        resources: {
            title: "Content Creator Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/content-creator-resources"
        },
        projects: {
            title: "Content Creator Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/content-creator-project"
        }
    },
    "digital marketing": {
        roadmap: {
            title: "Digital Marketing Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/digital-marketing-roadmap"
        },
        resources: {
            title: "Digital Marketing Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/digital-marketing-resources"
        },
        projects: {
            title: "Digital Marketing Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/digital-marketing-project"
        }
    },
    "motion graphics": {
        roadmap: {
            title: "Motion Graphics Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/motion-graphics-roadmap"
        },
        resources: {
            title: "Motion Graphics Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/motion-graphics-resources"
        },
        projects: {
            title: "Motion Graphics Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/motion-graphics-project"
        }
    },
    "seo": {
        roadmap: {
            title: "SEO Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/seo-roadmap"
        },
        resources: {
            title: "SEO Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/seo-resources"
        },
        projects: {
            title: "SEO Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/seo-project"
        }
    },
    "social media manager": {
        roadmap: {
            title: "Social Media Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/social-media-roadmap"
        },
        resources: {
            title: "Social Media Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/social-media-resources"
        },
        projects: {
            title: "Social Media Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/social-media-project"
        }
    },
    "ui/ux designer": {
        roadmap: {
            title: "UI/UX Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/ui-ux-roadmap"
        },
        resources: {
            title: "UI/UX Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/ui-ux-resources"
        },
        projects: {
            title: "UI/UX Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/ui-ux-project"
        }
    },
    "video editing": {
        roadmap: {
            title: "Video Editing Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/video-editing-roadmap"
        },
        resources: {
            title: "Video Editing Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/video-editing-resources"
        },
        projects: {
            title: "Video Editing Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/video-editing-project"
        }
    },
    "web designer": {
        roadmap: {
            title: "Web Designer Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/web-designer-roadmap"
        },
        resources: {
            title: "Web Designer Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/web-designer-resources"
        },
        projects: {
            title: "Web Designer Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/web-designer-project"
        }
    },
    "dropshipping": {
        roadmap: {
            title: "Dropshipping Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/dropshipping-roadmap"
        },
        resources: {
            title: "Dropshipping Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/dropshipping-resources"
        },
        projects: {
            title: "Dropshipping Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/dropshipping-project"
        }
    },
    "e-commerce store": {
        roadmap: {
            title: "E-commerce Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/ecommerce-roadmap"
        },
        resources: {
            title: "E-commerce Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/ecommerce-resources"
        },
        projects: {
            title: "E-commerce Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/ecommerce-project"
        }
    },
    "shopify": {
        roadmap: {
            title: "Shopify Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/shopify-roadmap"
        },
        resources: {
            title: "Shopify Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/shopify-resources"
        },
        projects: {
            title: "Shopify Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/shopify-project"
        }
    },
    "actor": {
        roadmap: {
            title: "Actor Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/actor-roadmap"
        },
        resources: {
            title: "Actor Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/actor-resources"
        },
        projects: {
            title: "Actor Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/actor-project"
        }
    },
    "comedian": {
        roadmap: {
            title: "Comedian Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/comedian-roadmap"
        },
        resources: {
            title: "Comedian Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/comedian-resources"
        },
        projects: {
            title: "Comedian Project Ideas",
            img: "../static/assets/projects.jpg",
            link: "/page/comedian-project"
        }
    },
    "dance": {
        roadmap: {
            title: "Dance Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/dance-roadmap"
        },
        resources: {
            title: "Dance Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/dance-resources"
        },
        projects: {
            title: "Dance Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/dance-project"
        }
    },
    "musician": {
        roadmap: {
            title: "Musician Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/musician-roadmap"
        },
        resources: {
            title: "Musician Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/musician-resources"
        },
        projects: {
            title: "Musician Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/musician-project"
        }
    },
    "singer": {
        roadmap: {
            title: "Singer Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/singer-roadmap"
        },
        resources: {
            title: "Singer Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/singer-resources"
        },
        projects: {
            title: "Singer Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/singer-project"
        }
    },
    "badminton": {
        roadmap: {
            title: "Badminton Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/badminton-roadmap"
        },
        resources: {
            title: "Badminton Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/badminton-resources"
        },
        projects: {
            title: "Badminton Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/badminton-project"
        }
    },
    "baseball": {
        roadmap: {
            title: "Baseball Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/baseball-roadmap"
        },
        resources: {
            title: "Baseball Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/baseball-resources"
        },
        projects: {
            title: "Baseball Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/baseball-project"
        }
    },
    "basketball": {
        roadmap: {
            title: "Basketball Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/basketball-roadmap"
        },
        resources: {
            title: "Basketball Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/basketball-resources"
        },
        projects: {
            title: "Basketball Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/basketball-project"
        }
    },
    "boxing": {
        roadmap: {
            title: "Boxing Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/boxing-roadmap"
        },
        resources: {
            title: "Boxing Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/boxing-resources"
        },
        projects: {
            title: "Boxing Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/boxing-project"
        }
    },
    "car race": {
        roadmap: {
            title: "Car Race Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/carrace-roadmap"
        },
        resources: {
            title: "Car Race Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/carrace-resources"
        },
        projects: {
            title: "Car Race Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/carrace-project"
        }
    },
    "cricket": {
        roadmap: {
            title: "Cricket Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/cricket-roadmap"
        },
        resources: {
            title: "Cricket Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/cricket-resources"
        },
        projects: {
            title: "Cricket Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/cricket-project"
        }
    },
    "cycling": {
        roadmap: {
            title: "Cycling Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/cycling-roadmap"
        },
        resources: {
            title: "Cycling Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/cycling-resources"
        },
        projects: {
            title: "Cycling Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/cycling-project"
        }
    },
    "football": {
        roadmap: {
            title: "Football Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/football-roadmap"
        },
        resources: {
            title: "Football Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/football-resources"
        },
        projects: {
            title: "Football Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/football-project"
        }
    },
    "golf": {
        roadmap: {
            title: "Golf Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/golf-roadmap"
        },
        resources: {
            title: "Golf Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/golf-resources"
        },
        projects: {
            title: "Golf Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/golf-project"
        }
    },
    "hockey": {
        roadmap: {
            title: "Hockey Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/hockey-roadmap"
        },
        resources: {
            title: "Hockey Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/hockey-resources"
        },
        projects: {
            title: "Hockey Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/hockey-project"
        }
    },
    "swimming": {
        roadmap: {
            title: "Swimming Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/swimming-roadmap"
        },
        resources: {
            title: "Swimming Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/swimming-resources"
        },
        projects: {
            title: "Swimming Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/swimming-project"
        }
    },
    "table tennis": {
        roadmap: {
            title: "Table Tennis Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/tabletennis-roadmap"
        },
        resources: {
            title: "Table Tennis Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/tabletennis-resources"
        },
        projects: {
            title: "Table Tennis Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/tabletennis-project"
        }
    },
    "tennis": {
        roadmap: {
            title: "Tennis Roadmap",
            img: "../static/assets/roadmap.jpg",
            link: "/page/tennis-roadmap"
        },
        resources: {
            title: "Tennis Resources",
            img: "../static/assets/resources.jpg",
            link: "/page/tennis-resources"
        },
        projects: {
            title: "Tennis Project Ideas",
            img: "../static/assets/project.jpg",
            link: "/page/tennis-project"
        }
    }
};


    function generateCards() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const container = document.getElementById("cardsContainer");

  container.innerHTML = "";
  const noDataDiv = document.querySelector(".no-data-fullscreen");
  if (noDataDiv) noDataDiv.remove();

  document.querySelector('.cards-wrapper').style.display = "grid";

  if (!input) {
    showValidationMessage("Please enter a career before generating 🚀");
    document.querySelector('.cards-wrapper').style.display = "none";
    return;
  }

  if (careerData[input]) {
    const field = careerData[input];
    const cardTitles = ["Roadmap", "Resources", "Projects"]; 
    let index = 0;

    Object.values(field).forEach(item => {
      const cardWrapper = document.createElement("div");
      cardWrapper.classList.add("card-wrapper");

      const cardHeading = document.createElement("h3");
      cardHeading.className = "card-top-heading";
      cardHeading.innerHTML = cardTitles[index] || item.title;
      index++;

      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <button onclick="window.open('${item.link}', '_blank')">View</button>
      `;
      cardWrapper.appendChild(cardHeading);
      cardWrapper.appendChild(card);

      container.appendChild(cardWrapper);
    });
  } else {
    document.querySelector('.cards-wrapper').style.display = "none";
    container.insertAdjacentHTML('afterend', `
      <div class="no-data-fullscreen">
        <div class="no-data-wrapper">
          <img src="../static/assets/bot.jpeg" alt="Nextora AI Bot" class="no-data-bot">
          <p class="no-data-text">
            Hmm… we’re still perfecting this career path 🤖<br>
            <span>Nextora.AI is crafting something amazing for you. Until it’s ready, explore these popular journeys.</span>
          </p>
        </div>
      </div>
    `);
  }
}

function showValidationMessage(message) {
    const oldMsg = document.querySelector(".validation-message");
    if (oldMsg) oldMsg.remove();

    const msgDiv = document.createElement("div");
    msgDiv.className = "validation-message";
    msgDiv.innerHTML = `<p>${message}</p>`;

    const searchWrapper = document.querySelector(".ai-search-wrapper");
    searchWrapper.insertAdjacentElement("afterend", msgDiv);

    setTimeout(() => {
        msgDiv.style.opacity = "0";
        setTimeout(() => msgDiv.remove(), 500);
    }, 3000);
}

//ABout Section
gsap.registerPlugin(ScrollTrigger);

if (gsap && ScrollTrigger) {
    gsap.to(".nextora-rotating-image", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
            trigger: ".nextora-image-wrapper",
            start: "left right", 
            end: "right left",
            scrub: true,
        }
    });
}


gsap.registerPlugin(ScrollTrigger);

gsap.from(".nextora-services-heading", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".nextora-services-section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1.2,
    toggleActions: "play reverse play reverse"
  }
});
gsap.from(".nextora-service-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".nextora-services-section",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 1.2,
    toggleActions: "play reverse play reverse"
  }
});


gsap.registerPlugin(ScrollTrigger);

const rocketTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".nextora-services-section",
    start: "top 80%",
    toggleActions: "play none none none",
  }
});

rocketTL.to(".nextora-rocket-icon", {
  x: window.innerWidth + 200,
  y: -(window.innerHeight + 200),
  duration: 5,
  ease: "power2.inOut",
});

rocketTL.to(".nextora-rocket-icon", {
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, "-=2");

// job page
gsap.registerPlugin(ScrollTrigger);

const jobHeroTL = gsap.timeline();

jobHeroTL.from(".nextora-job-hero-heading", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

jobHeroTL.from(".nextora-job-hero-container", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
}, "-=1.2");


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".job-card").forEach((card, i) => {
  gsap.fromTo(card, 
    {opacity: 0, y: 50}, 
    {
      opacity: 1, 
      y: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      }
    }
  );
});


// Rotating + moving image
gsap.registerPlugin(ScrollTrigger);

const zigzagTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".job-section",
        start: "top top", 
        end: "bottom top", 
        scrub: 1.5,
    }
});

gsap.set(".job-rotate-image", {
    x: "20vw",
    y: "10vh", 
    rotation: 0,
});

zigzagTL.to(".job-rotate-image", {
    x: "-20vw",
    y: "50vh", 
    rotation: 360,
    ease: "power1.inOut",
})

.to(".job-rotate-image", {
    x: "20vw", 
    y: "90vh",
    rotation: 720,
    ease: "power1.inOut",
});


const form = document.getElementById("nextoraContactForm");
const popup = document.getElementById("nextoraPopup");
const popupText = document.getElementById("nextoraPopupText");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = form.name.value.trim();
    let email = form.email.value.trim();
    let message = form.message.value.trim();

    if (!name || !email || !message) {
      showNextoraPopup("⚠️ Please fill in all fields (Nextora.ai Validation)");
      return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      showNextoraPopup("⚠️ Please enter a valid Email (Nextora.ai Validation)");
      return;
    }

    showNextoraPopup("✅ Message Sent Successfully via Nextora.ai!");
    form.reset();
  });
}

function showNextoraPopup(message) {
  popupText.innerHTML = message;
  popup.style.display = "block";
}

function closeNextoraPopup() {
  popup.style.display = "none";
}