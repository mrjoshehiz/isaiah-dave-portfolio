import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Copy, Twitter, Linkedin, Users, Target, Award, TrendingUp, Calendar, MessageCircle } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('sounique1213@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Work Experience Data
  const workExperience = [
    {
      id: 1,
      company: 'DIV Protocol',
      role: 'Moderator & Community Support',
      description: 'Engaged as a moderator and provided essential community support for the DIV Protocol, ensuring effective communication.',
      logo: 'https://i.postimg.cc/0yd9Vz1V/images-42.jpg'
    },
    {
      id: 2,
      company: 'Learn Campus',
      role: 'Moderator & Community Support',
      description: 'Moderated discussions and offered community support for Learn Campus, facilitating a productive learning environment.',
      logo: 'https://i.postimg.cc/8z8CK8Jz/images-41.jpg'
    },
    {
      id: 3,
      company: 'BNB Sign',
      role: 'Moderator & Community Support',
      description: 'Supported the BNB Sign community through moderation and direct assistance, contributing to user satisfaction.',
      logo: 'https://i.postimg.cc/HsFrqcKH/black-binance-bnb-coin-illustration-260nw-2579090127.jpg'
    },
    {
      id: 4,
      company: 'Wisdom #OwlMeme Token',
      role: 'Moderator & Community Support',
      description: 'Provided moderation and community support for the Wisdom #OwlMeme Token project, ensuring a vibrant and secure space.',
      logo: 'https://i.postimg.cc/PxKL96GF/images-40.jpg'
    },
    {
      id: 5,
      company: 'Aloege Community',
      role: 'Moderator & Community Support',
      description: 'Actively moderated and supported the Aloege Community, fostering positive engagement and addressing user queries.',
      logo: 'https://i.postimg.cc/s2dZhQ9K/images-39.jpg'
    },
    {
      id: 6,
      company: 'SoarFun',
      role: 'Moderator & Community Support',
      description: 'Managed community interactions and provided support for SoarFun users, enhancing their overall experience.',
      logo: 'https://i.postimg.cc/L69DJ76h/20250926-000341.jpg'
    },
    {
      id: 7,
      company: 'IoGPT',
      role: 'Moderator & Community Support',
      description: 'Engaged with the IoGPT community, offering moderation and support to maintain a healthy and informative environment.',
      logo: 'https://i.postimg.cc/fbmm2jT6/images-38.jpg'
    },
    {
      id: 8,
      company: 'Deesse AI NFT Market',
      role: 'Moderator & Community Support',
      description: 'Provided active moderation and comprehensive support for the Deesse AI NFT Market community, ensuring smooth operations.',
      logo: 'https://i.postimg.cc/289QVSKX/CZSo-Ej-V0-200x200.png'
    },
    {
      id: 9,
      company: 'Fraction AI',
      role: 'Growth Moderator',
      description: 'Implemented strategies that increased active user participation by 60%, fostering a more dynamic and interactive community.',
      logo: 'https://i.postimg.cc/gcDqbDqp/images-36.jpg'
    },
    {
      id: 10,
      company: 'CONTRACTUS',
      role: 'Community Manager',
      description: 'Managed community aspects for token launch campaigns, including Q&A sessions and user support, contributing to successful launches.',
      logo: 'https://i.postimg.cc/505505hw/images-4.png'
    },
    {
      id: 11,
      company: 'GPT360',
      role: 'Community Moderator',
      description: 'Maintained 24/7 chat health, removed spam, and managed member growth, ensuring a positive and active community environment.',
      logo: 'https://i.postimg.cc/RFxQ4pDS/images-35.jpg'
    },
    {
      id: 12,
      company: 'Xpad.pro',
      role: 'Event Host',
      description: 'Coordinated and hosted multiple Ask Me Anything (AMA) sessions, significantly improving community engagement by 50%.',
      logo: 'https://i.postimg.cc/Gm9jQyDC/Gebzn2-Oa-QAAhj-S.jpg'
    },
    {
      id: 13,
      company: 'LUMill',
      role: 'Chat Lead',
      description: 'Led chat moderation efforts, building and maintaining a safe, collaborative, and welcoming environment for all community members.',
      logo: 'https://i.postimg.cc/7LFXbZfy/images-34.jpg'
    },
    {
      id: 14,
      company: 'SWOT',
      role: 'Moderator',
      description: 'Provided multi-timezone support and facilitated seamless community onboarding for new members, ensuring global coverage.',
      logo: 'https://i.postimg.cc/zGfxcQ94/images-37.jpg'
    }
  ];

  // Testimonials Data with provided headshots
  const testimonials = [
    {
      id: 1,
      quote: "Isaiah Dave is one of the most reliable moderators I've ever worked with — quick, professional, and consistent.",
      name: "Alex Chen",
      title: "CTO, GPT360",
      avatar: "https://i.postimg.cc/XqzL8xXL/IMG-20250926-WA0029.jpg"
    },
    {
      id: 2,
      quote: "He coordinated our AMAs flawlessly and kept engagement high even during quiet times.",
      name: "Sarah Miller",
      title: "Founder, Xpad.pro",
      avatar: "https://i.postimg.cc/BQd41ZPs/IMG-20250926-WA0030-1.jpg"
    },
    {
      id: 3,
      quote: "We saw a 60% boost in active participation thanks to Isaiah Dave's community strategy.",
      name: "David Lee",
      title: "Team Lead, Fraction AI",
      avatar: "https://i.postimg.cc/1XtMwbR4/IMG-20250926-WA0031.jpg"
    }
  ];

  // Proof of Work Images
  const proofOfWorkImages = [
    {
      id: 1,
      src: 'https://i.postimg.cc/NMDjMfBk/IMG-20250919-WA0019-1.jpg',
      caption: 'Learn Campus Telegram Group'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/C5ypS3fs/IMG-20250919-WA0005.jpg',
      caption: 'IoGPT Telegram Group'
    },
    {
      id: 3,
      src: 'https://i.postimg.cc/SsYp0SjK/IMG-20250919-WA0006.jpg',
      caption: 'SoarFun Telegram Group'
    },
    {
      id: 4,
      src: 'https://i.postimg.cc/v89d3Zpq/IMG-20250919-WA0015-1.jpg',
      caption: 'Deesse AI NFT Market Telegram Group'
    },
    {
      id: 5,
      src: 'https://i.postimg.cc/8chQ5ZRQ/IMG-20250919-WA0016-1.jpg',
      caption: 'Xpad.pro Telegram Group'
    },
    {
      id: 6,
      src: 'https://i.postimg.cc/Qd6LH9Tt/IMG-20250919-WA0017-1.jpg',
      caption: 'BNB Sign Telegram Group'
    },
    {
      id: 7,
      src: 'https://i.postimg.cc/vHswjdyQ/IMG-20250919-WA0022-1.jpg',
      caption: 'GPT360 Telegram Group'
    },
    {
      id: 8,
      src: 'https://i.postimg.cc/rFN22Yy5/IMG-20250919-WA0023-1.jpg',
      caption: 'LUMill Telegram Group'
    },
    {
      id: 9,
      src: 'https://i.postimg.cc/4d9jLWF7/IMG-20250919-WA0024-1.jpg',
      caption: 'SWOT Telegram Group'
    },
    {
      id: 10,
      src: 'https://i.postimg.cc/VN68RB8n/IMG-20250920-WA0010.jpg',
      caption: 'DIV Protocol Telegram Group'
    }
  ];

  // Achievement Stats
  const achievements = [
    { id: 1, title: 'Total Projects', value: 14, icon: <Users size={24} /> },
    { id: 2, title: 'Total Achievements', value: 28, icon: <Award size={24} /> },
    { id: 3, title: 'Community Growth', value: '60%', icon: <Target size={24} /> }
  ];

  // Slideshow achievements
  const slideshowAchievements = [
    { id: 1, title: 'Total Partnerships', value: '14+', icon: <Users size={32} className="text-blue-400" /> },
    { id: 2, title: 'Community Growth', value: '60%+', icon: <TrendingUp size={32} className="text-green-400" /> },
    { id: 3, title: 'AMA Success Rate', value: '95%+', icon: <Calendar size={32} className="text-purple-400" /> },
    { id: 4, title: 'Active Communities', value: '10+', icon: <MessageCircle size={32} className="text-yellow-400" /> },
    { id: 5, title: 'Spam Reduction', value: '98%+', icon: <Target size={32} className="text-red-400" /> },
    { id: 6, title: 'User Retention', value: '75%+', icon: <Award size={32} className="text-pink-400" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % slideshowAchievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideshowAchievements.length]);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans relative overflow-x-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            [...Array(20)].map((_, j) => (
              <div 
                key={`dot-${i}-${j}`} 
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${j * 5}%`,
                  top: `${i * 10}%`
                }}
              />
            ))
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.postimg.cc/sXrJzKgZ/IMG-20250920-WA0009.jpg" 
              alt="Isaiah Dave" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-xl font-bold">Isaiah Dave</h1>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className={`hidden md:flex space-x-8 ${menuOpen ? 'block' : 'hidden'}`}>
            {['about', 'skills', 'experience', 'portfolio', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 py-4 px-4">
            <div className="flex flex-col space-y-4">
              {['about', 'skills', 'experience', 'portfolio', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="https://i.postimg.cc/sXrJzKgZ/IMG-20250920-WA0009.jpg" 
              alt="Isaiah Dave" 
              className="w-48 h-48 mx-auto rounded-xl object-cover shadow-2xl mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Isaiah Dave</h1>
            <p className="text-xl text-gray-300 mb-4">Web3 Community Manager | Moderator | Content Creator</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Hire Me
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={() => scrollToSection('about')}
                className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                About Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed text-center"
          >
            I have over four years of experience in Tech, Blockchain, and Web3 — building engaged online communities and driving adoption for projects. I'm skilled at 24/7 community moderation, AMA coordination, bot setup, and creating social content that keeps users active and excited.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Skills
          </motion.h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            {[
              '24/7 Moderation', 
              'Bot Setup & Config', 
              'AMA Planning & Coordination', 
              'Writing & Copy Creation', 
              'Animated Sticker Design', 
              'Social Media Content'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#4B5563",
                  transition: { duration: 0.2 }
                }}
                className="px-6 py-3 bg-gray-700 rounded-xl text-sm font-medium cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Slideshow Section */}
      <section id="achievements-slideshow" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Key Achievements
          </motion.h2>
          <div className="relative h-32 flex items-center justify-center">
            <motion.div
              key={currentAchievement}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {slideshowAchievements[currentAchievement].icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                {slideshowAchievements[currentAchievement].value}
              </div>
              <div className="text-gray-300 text-lg">
                {slideshowAchievements[currentAchievement].title}
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {slideshowAchievements.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentAchievement ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Static Achievements Section */}
      <section id="achievements" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Statistics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-blue-400 mb-4">{achievement.icon}</div>
                <div className="text-3xl font-bold mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-300">{achievement.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Work Experience
          </motion.h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={job.logo} 
                    alt={job.company} 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="text-blue-400 font-medium mb-2">{job.role}</p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Proof of Work Section */}
      <section id="portfolio" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Proof of Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofOfWorkImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={image.src} 
                  alt={image.caption} 
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Get In Touch
          </motion.h2>
          <div className="flex flex-col gap-4 justify-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={copyEmail}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Mail size={20} />
              <span>sounique1213@gmail.com</span>
              {copied ? (
                <span className="text-green-400 text-sm ml-2">Copied!</span>
              ) : (
                <Copy size={16} />
              )}
            </motion.button>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              href="https://t.me/IsaiahDave01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MessageSquare size={20} />
              <span>Telegram</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="https://twitter.com/sounique1213"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Twitter size={20} />
              <span>Twitter (X)</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="https://www.linkedin.com/in/isaiah-ehichoya-870183221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center text-sm text-gray-500">
          <p>© 2025 Isaiah Dave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;