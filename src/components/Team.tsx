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
      className="bg-gray-200 rounded-lg overflow-hidden group"
    >
      <div 
        className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-1">{name}</h3>
        <p className="text-gray-800 mb-4">{role}</p>
        <div className="flex space-x-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#ed502e] hover:text-[#ed502e]/80">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${email}`} className="text-[#ed502e] hover:text-[#ed502e]/80">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#ed502e] mb-4">Our Team</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Meet the dedicated professionals working to support and nurture innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember
             name="SAGAR KUMAR"
             role="Team Member"
             image="https://media.licdn.com/dms/image/v2/D5603AQEYq_rI7IwS1g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730663264467?e=1746662400&v=beta&t=-tCRferOBozTPvag2ZTKdHnr7pKrZEnerIru52-P_dU"
             linkedin="https://www.linkedin.com/in/sagar-kumar-ab5041224/"
             email="sagar.kumar@iic.edu"
                    
          />
          <TeamMember
            name="TANISHQ PRATAP SINGH"
            role="Team Member"
            image="https://media.licdn.com/dms/image/v2/D4E03AQG2DANUU0kx_w/profile-displayphoto-shrink_400_400/B4EZS2mX32G0Ag-/0/1738230302979?e=1746662400&v=beta&t=XrPbPqLiho07Ir911vJza6J0OvvjF3pe-e1xzifue5I"
            linkedin="https://www.linkedin.com/in/tanishq-pratap-singh-a16268216/"
            email="tanishq.singh@iic.edu"
            
          />
          <TeamMember
            name="BANOTH ESHWAR NAIK"
            role="Team Member"
            image="https://media.licdn.com/dms/image/v2/D5603AQFk2R7FtuyvNQ/profile-displayphoto-shrink_400_400/B56ZPRElI6GQAg-/0/1734379463208?e=1746662400&v=beta&t=cQyjmvtB8FbWi34ALlX3sMrAbjcog1DGwVU2_8L8r3g"
            linkedin="https://www.linkedin.com/in/eshwarnaikb/"
            email="eshwar.naik@iic.edu"
          />
          <TeamMember
            name="EKANSHA HARWANI"
            role="Team Member"
            image="https://media.licdn.com/dms/image/v2/D5603AQFlXsG8G86Jzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704871618848?e=1746662400&v=beta&t=lJMU-wKeIWq6oQI-nA096Mxj8eyN3Bk1qJhwaoiIfYA"
            linkedin="https://www.linkedin.com/in/ekansha-harwani-0706b2259/"
            email="ekansha.harwani@iic.edu"
          />
          <TeamMember
            name="SWARAJ YADAV"
            role="Team Member"
            image="https://media.licdn.com/dms/image/v2/D5603AQFY6fWdgIOP1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706184690330?e=1746662400&v=beta&t=sydQisPwBP486fQ_H9Nj7io_KBkQVC--AWfKX8cndrQ"
            linkedin="https://www.linkedin.com/in/swaraj-vs-yadav/"
            email="swaraj.yadav@iic.edu"
          />
          <TeamMember
            name="HARMIK DOSHI"
            role="Team Member"
            image="https://media.licdn.com/dms/image/v2/D4D03AQFdNxTdRO2Dbw/profile-displayphoto-shrink_400_400/B4DZQv5bxoGgAg-/0/1735970373521?e=1746662400&v=beta&t=VFMWMFLEA5UzaO4EZNo5ATjUhR15h9on69OSRTnt8fc"
            linkedin="https://www.linkedin.com/in/harmik-doshi-b94470252/"
            email="harmik.doshi@iic.edu"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;