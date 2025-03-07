import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, GraduationCap, BookOpen, Users, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  professor: {
    name: string;
    department: string;
    image: string;
  };
  description: string;
  requirements: string[];
  area: string;
  duration: string;
  positions: number;
}

const ProjectCard = ({ project }: { project: Project }) => {
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
      className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <img
            src={project.professor.image}
            alt={project.professor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-blue-500 font-medium">{project.professor.name}</p>
            <p className="text-gray-400 text-sm">{project.professor.department}</p>
          </div>
        </div>

        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-400">
            <BookOpen className="w-4 h-4 mr-2" />
            Research Area: {project.area}
          </div>
          <div className="flex items-center text-gray-400">
            <Users className="w-4 h-4 mr-2" />
            Positions: {project.positions}
          </div>
          <div className="flex items-center text-gray-400">
            <GraduationCap className="w-4 h-4 mr-2" />
            Duration: {project.duration}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-white font-medium mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {project.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Express Interest
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "AI for Healthcare Diagnostics",
      professor: {
        name: "Dr. Rajesh Kumar",
        department: "Computer Science",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
      },
      description: "Development of AI models for early disease detection using medical imaging data.",
      requirements: [
        "Strong background in Machine Learning",
        "Experience with Python and PyTorch",
        "Knowledge of medical imaging"
      ],
      area: "Healthcare AI",
      duration: "6 months",
      positions: 2
    },
    {
      id: 2,
      title: "Sustainable Energy Systems",
      professor: {
        name: "Dr. Priya Singh",
        department: "Electrical Engineering",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
      },
      description: "Research on smart grid technologies and renewable energy integration.",
      requirements: [
        "Knowledge of power systems",
        "Programming skills",
        "Understanding of renewable energy"
      ],
      area: "Renewable Energy",
      duration: "12 months",
      positions: 3
    },
    {
      id: 3,
      title: "Quantum Computing Algorithms",
      professor: {
        name: "Dr. Amit Patel",
        department: "Physics",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
      },
      description: "Development of novel quantum algorithms for optimization problems.",
      requirements: [
        "Strong mathematics background",
        "Quantum mechanics knowledge",
        "Programming experience"
      ],
      area: "Quantum Computing",
      duration: "8 months",
      positions: 1
    }
  ];

  const departments = ['All', 'Computer Science', 'Electrical Engineering', 'Physics'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.professor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || project.professor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Research Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore research opportunities with our distinguished faculty members.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by project or professor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-blue-500" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;