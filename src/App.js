import React, { useEffect, useRef,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';



const projects = [
  {
    title: "LinkedIn AI Reply",
    description: "This Chrome extension is built using the REACT, TPYESCRIPT, TAILWINDCSS & WXT framework and helps automate message responses on LinkedIn.",
    image: "/images/16.png",
    github: "https://github.com/vishalok/LinkedIn-AI-Reply",
    demo: "https://github.com/vishalok/LinkedIn-AI-Reply"
  },
  {
    title: "Deepgram Audio Transcriber",
    description: "React-based web application that allows users to record audio and receive real-time transcriptions using the Deepgram API. This project demonstrates the integration of audio recording capabilities with advanced speech-to-text technology.",
    image: "/images/dat.jpg",
    github: "https://github.com/vishalok/Deepgram-Audio-Transcriber",
    demo: "https://deepgram-audio-transcriber.onrender.com"
  },
  {
    title: "1-1 Video Call App",
    description: "A fully functional Fullstack site using node & react",
    image: "/images/video-call.jpg",
    github: "https://github.com/vishalok/1-1_video_call",
    demo: "https://video-call-vdpf.onrender.com/"
  },
  {
    title: "E-commerce Platform",
    description: "A fully functional backend e-commerce site",
    image: "/images/e.jpg",
    github: "https://github.com/vishalok/ecommerce",
    demo: "#"
  },
  {
    title: "web scraping",
    description: "web-scraper using node js",
    image: "/images/w.JPG",
    github: "https://github.com/vishalok/web-scraper",
    demo: "#"
  },
  {
    title: "dashboard analysis",
    description: "React static site with login,signup,dashboard //note:- login with any credentials then you will reach the dashboard.",
    image: "/images/d.JPG",
    github: "https://github.com/vishalok/React-frontend",
    demo: "https://react-frontend-p037.onrender.com/"
  },
  {
    title: "Cybersecurity Dashboard",
    description: "Upcoming - A real-time cybersecurity dashboard for monitoring network traffic and threats.",
    image: "/images/csd.JPG",
    github: "https://github.com/vishalok/cybersecurity-dashboard",
    demo: "#"
  },


];

const App = () => {
  const [skills] = useState([
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Ethical Hacking", level: "Intermediate" },
    { name: "Cybersecurity", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Kubernetes", level: "Basic" },
    { name: "AWS", level: "Basic" }

  ]);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 4; // Speed of scrolling
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scrollSkills = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0; // Reset scroll to the start when reaching the end
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    };

    const scrollInterval = setInterval(scrollSkills, 30); // Adjust the speed here

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
         {/* Navigation */}
      <nav className="flex justify-between items-center p-1 shadow-lg fixed w-full z-50">
 
 <ul className="flex space-x-4">
   <li><Link to="about" smooth={true} duration={500} className="cursor-pointer">About Me</Link></li>
   <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link></li>
   <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
   <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
 </ul>
</nav>
      {/* Header with Profile Image and Social Icons */}
      <header className="text-center py-10 relative">
        <div id="about" className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
          <img src="/images/img.jpg" alt="Profile" className="object-cover w-full h-full"/>
        </div>
        {/* <h1 className="text-5xl font-bold" >Vishal Rathod - Full Stack Developer & Cybersecurity Enthusiast</h1>
        <p className="mt-4 text-lg text-gray-400">Crafting scalable, secure solutions with a modern touch</p>
         */}
         <h1 className="text-5xl font-bold transform transition-transform duration-500 hover:scale-110 hover:text-teal-400 animate-bounce bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent shadow-lg hover:shadow-2xl">
  Vishal Rathod - Full Stack Developer & Cybersecurity Enthusiast
</h1>

<p className="mt-4 text-lg text-gray-400 animate-fadeInUp transform hover:translate-x-2 transition duration-500">
  Crafting scalable, secure solutions with a modern touch
</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/vishalok" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/vishal-rathod-a81726209/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaLinkedin size={30} />
          </a>
        </div>
      </header>

      {/* Skills Section */}
      {/* <section className="mt-10 w-10/12" id="skills">
        <h2 className="text-3xl text-center mb-6">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.name} className="p-4 bg-gray-800 rounded-lg text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
              <p className="mt-2 text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </section> */}

<section className="mt-10 w-10/12 mx-auto" id="skills">
        <h2 className="text-3xl text-center mb-6">My Skills</h2>
        
        {/* Horizontal Scrollable Skills Section with Auto-Scroll */}
        <div 
          className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide"
          ref={scrollContainerRef}
        >
          {skills.map(skill => (
            <div 
              key={skill.name} 
              className="min-w-[200px] bg-gray-800 rounded-lg text-center p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
              <p className="mt-2 text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section
      <section className="mt-20 w-10/12" id="projects">
        <h2 className="text-3xl text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.title} className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4"/>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
                  View Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Projects Section */}
<section className="mt-20 w-10/12 mx-auto" id="projects">
  <h2 className="text-3xl text-center mb-6">My Projects</h2>

  {/* Horizontal Scrollable Projects Section */}
  <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide" ref={scrollContainerRef}>
    {projects.map((project) => (
      <div
        key={project.title}
        className="inline-block min-w-[300px] md:min-w-[350px] bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
      >
        <img src={project.image} alt={project.title}   className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-gray-400">{project.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:underline"
          >
            View Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* 3D Sphere Section */}
      <section className="mt-20">
        <h2 className="text-3xl text-center mb-6" id="contact">3D Creativity</h2>
        <Canvas className="h-80 w-full">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Sphere visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#00bfae"
              attach="material"
              distort={0.3}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </section >

      {/* Contact Form Section */}
      <section className="mt-20 w-full max-w-lg bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <h2 className="text-3xl text-center mb-6">Get in Touch</h2>

        <form className="space-y-4" action="https://formspree.io/f/xgeqzonz" method="POST" >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="phone" className="text-sm font-semibold">Phone</label>
              <input
                type="tel"
                 id="phone"
                 name="phone"
                className="mt-1 p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your phone number"
              />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <textarea
              id="message"
              name="massage"
              rows="4"
              className="mt-1 p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500">
        <p>&copy; 2024 Vishal Rathod. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
