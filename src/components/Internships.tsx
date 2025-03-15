import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, MapPin, DollarSign, Briefcase, Filter, Plus } from 'lucide-react';

interface Internship {
  id: number;
  role: string;
  company: string;
  location: string;
  stipend: string;
  type: string;
  requirements: string[];
  posted: string;
}

const InternshipCard = ({ internship }: { internship: Internship }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-black mb-2">{internship.role}</h3>
          <p className="text-gray-700 font-medium">{internship.company}</p>
        </div>
        <span className="text-gray-700 text-sm">{internship.posted}</span>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-800">
          <MapPin className="w-4 h-4 mr-2" />
          {internship.location}
        </div>
        <div className="flex items-center text-gray-800">
          <DollarSign className="w-4 h-4 mr-2" />
          {internship.stipend}
        </div>
        <div className="flex items-center text-gray-800">
          <Briefcase className="w-4 h-4 mr-2" />
          {internship.type}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-black font-medium mb-2">Requirements:</h4>
        <ul className="list-disc list-inside text-gray-8700 space-y-1">
          {internship.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <button className="w-full bg-[#ed502e]/80 text-white py-2 rounded-lg hover:bg-[#ed502e] transition-colors">
        Apply Now
      </button>
    </motion.div>
  );
};

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const internships: Internship[] = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "TechVision AI",
      location: "Remote",
      stipend: "₹20,000/month",
      type: "Full-time",
      requirements: [
        "Proficiency in React.js",
        "Understanding of modern CSS",
        "Basic knowledge of UI/UX principles"
      ],
      posted: "2 days ago"
    },
    {
      id: 2,
      role: "Machine Learning Intern",
      company: "DataSense Analytics",
      location: "Hybrid",
      stipend: "₹25,000/month",
      type: "Part-time",
      requirements: [
        "Strong Python skills",
        "Knowledge of ML frameworks",
        "Statistics background"
      ],
      posted: "1 week ago"
    },
    {
      id: 3,
      role: "Product Management Intern",
      company: "InnovateTech",
      location: "On-site",
      stipend: "₹30,000/month",
      type: "Full-time",
      requirements: [
        "Strong analytical skills",
        "Excellent communication",
        "Basic technical knowledge"
      ],
      posted: "3 days ago"
    }
  ];

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || internship.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <section id="internships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#ed502e] mb-4">Internship Opportunities</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Find exciting internship opportunities with our partner startups and companies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 placeholder-gray-800 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by role or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-200 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-[#ed502e]" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-gray-200 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-200"
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>

            <button className="flex items-center px-4 py-2 bg-[#ed502e]/80 text-white rounded-lg hover:bg-[#ed502e] transition-colors">
              <Plus className="w-5 h-5 mr-2" />
              Post Internship
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInternships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;