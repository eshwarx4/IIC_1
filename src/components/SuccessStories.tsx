import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const SuccessCard = ({ 
  name, 
  description, 
  image, 
  funding, 
  sector 
}: { 
  name: string; 
  description: string; 
  image: string; 
  funding: string; 
  sector: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="h-48 relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-500">{sector}</span>
          <span className="text-green-500">{funding}</span>
        </div>
        <a href="#" className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-400">
          Learn More <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      name: "TechVision AI",
      description: "AI-powered healthcare diagnostics platform revolutionizing early disease detection.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
      funding: "$2.5M Raised",
      sector: "Healthcare Tech"
    },
    {
      name: "GreenEnergy Solutions",
      description: "Innovative renewable energy storage solutions for sustainable power.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80",
      funding: "$1.8M Raised",
      sector: "Clean Tech"
    },
    {
      name: "EduTech Pioneers",
      description: "Personalized learning platform using adaptive AI technology.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      funding: "$3.2M Raised",
      sector: "EdTech"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the innovative startups that have grown and flourished with our support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <SuccessCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;