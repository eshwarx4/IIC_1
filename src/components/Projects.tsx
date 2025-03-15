import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, GraduationCap, BookOpen, Users, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  professor_name: string;
  professor_department: string;
  professor_image: string;
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
      className="bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <img
            src={project.professor_image}
            alt={project.professor_name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-balck mb-1">{project.title}</h3>
            <p className="text-black font-medium">{project.professor_name}</p>
            <p className="text-gray-700 text-sm">{project.professor_department}</p>
          </div>
        </div>

        <p className="text-gray-800 mb-4">{project.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-800">
            <BookOpen className="w-4 h-4 mr-2" />
            Research Area: {project.area}
          </div>
          <div className="flex items-center text-gray-800">
            <Users className="w-4 h-4 mr-2" />
            Positions: {project.positions}
          </div>
          <div className="flex items-center text-gray-800">
            <GraduationCap className="w-4 h-4 mr-2" />
            Duration: {project.duration}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-white font-medium mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {project.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-[#ed502e]/80 text-white py-2 rounded-lg hover:bg-[#ed502e] transition-colors">
          Express Interest
        </button>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data);
    }
      catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to load projects. Please try again.');
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length === 0) return; // Prevent filtering before data is loaded
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.professor_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All' || project.professor_department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
    setFilteredProjects(filtered);
  }, [searchTerm, selectedDepartment, projects]);
  

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#ed502e] mb-4">Research Projects</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Explore research opportunities with our distinguished faculty members.
          </p>
          {error && <p className="text-red-600">{error}</p>}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by project or professor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-200 border border-gray-300 rounded-lg text-black focus:outline focus:border-gary-00"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-[#ed502e]" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-gray-200 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
            >
              {['All', 'Computer Science', 'Electrical Engineering', 'Physics'].map((dept) => (
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