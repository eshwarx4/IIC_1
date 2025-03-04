import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const TeamMember = ({ 
  name, 
  role, 
  image, 
  linkedin, 
  email 
}: { 
  name: string; 
  role: string; 
  image: string; 
  linkedin: string; 
  email: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`team-member-${name.replace(/\s+/g, '-')}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isInView = rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
        
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      id={`team-member-${name.replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg overflow-hidden group"
    >
      <div 
        className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-gray-400 mb-4">{role}</p>
        <div className="flex space-x-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${email}`} className="text-blue-500 hover:text-blue-400">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the dedicated professionals working to support and nurture innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember
            name="SAGAR KUMAR"
            role="Team Member"
            image="./Team Photos/Sagar.jpg"
            linkedin="https://www.linkedin.com/in/sagar-kumar-ab5041224/"
            email="sagar.kumar@iic.edu"
          />
          <TeamMember
            name="TANISHQ PRATAP SINGH"
            role="Team Member"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
            linkedin="https://www.linkedin.com/in/tanishq-pratap-singh"
            email="tanishq.singh@iic.edu"
          />
          <TeamMember
            name="BANOTH ESHWAR NAIK"
            role="Team Member"
            image="https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80"
            linkedin="https://www.linkedin.com/in/banoth-eshwar-naik"
            email="eshwar.naik@iic.edu"
          />
          <TeamMember
            name="SWARAJ YADAV"
            role="Team Member"
            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
            linkedin="https://www.linkedin.com/in/swaraj-yadav"
            email="swaraj.yadav@iic.edu"
          />
          <TeamMember
            name="HARMIK DOSHI"
            role="Team Member"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
            linkedin="https://www.linkedin.com/in/harmik-doshi"
            email="harmik.doshi@iic.edu"
          />
          <TeamMember
            name="EKANSHA HARWANI"
            role="Team Member"
            image="https://images.unsplash.com/photo-1517841905240-472988babdf7?auto=format&fit=crop&q=80"
            linkedin="https://www.linkedin.com/in/ekansha-harwani"
            email="ekansha.harwani@iic.edu"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;