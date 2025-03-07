import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, X, MessageCircle, Heart, Tag } from 'lucide-react';

interface Idea {
  id: number;
  title: string;
  description: string;
  owner: {
    name: string;
    email: string;
    avatar: string;
    role: string;
  };
  category: string;
  likes: number;
  tags: string[];
}

interface ContactModalProps {
  idea: Idea | null;
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ idea, isOpen, onClose }) => {
  const [message, setMessage] = useState('');

  if (!idea) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the message to a backend
    console.log('Message sent:', message);
    setMessage('');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${
        !isOpen && 'pointer-events-none'
      }`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-800 p-6 rounded-lg w-full max-w-md m-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Contact Innovator</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={idea.owner.avatar}
              alt={idea.owner.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-white font-medium">{idea.owner.name}</h4>
              <p className="text-gray-400 text-sm">{idea.owner.role}</p>
            </div>
          </div>
          <p className="text-gray-300 mb-2">Regarding: {idea.title}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Write your message here..."
              required
            />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const IdeaCard: React.FC<{ idea: Idea; onContact: (idea: Idea) => void }> = ({
  idea,
  onContact,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(idea.likes);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={idea.owner.avatar}
            alt={idea.owner.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-white font-medium">{idea.owner.name}</h3>
            <p className="text-gray-400 text-sm">{idea.owner.role}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
          {idea.category}
        </span>
      </div>

      <h2 className="text-xl font-bold text-white mb-2">{idea.title}</h2>
      <p className="text-gray-400 mb-4">{idea.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {idea.tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-1 px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 transition-colors ${
              isLiked ? 'text-pink-500' : 'text-gray-400 hover:text-pink-500'
            }`}
          >
            <Heart className="w-5 h-5" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-400 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
        </div>
        <button
          onClick={() => onContact(idea)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Contact
        </button>
      </div>
    </motion.div>
  );
};

const WallOfIdeas: React.FC = () => {
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ideas: Idea[] = [
    {
      id: 1,
      title: "AI-Powered Healthcare Assistant",
      description: "A revolutionary AI system that helps doctors diagnose diseases more accurately using machine learning and patient history analysis.",
      owner: {
        name: "Dr. Sarah Chen",
        email: "sarah.chen@example.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        role: "Healthcare Innovator"
      },
      category: "Healthcare",
      likes: 156,
      tags: ["AI", "Healthcare", "Machine Learning"]
    },
    {
      id: 2,
      title: "Sustainable Smart Cities Platform",
      description: "An integrated platform that helps cities reduce their carbon footprint through IoT sensors and real-time data analytics.",
      owner: {
        name: "Michael Park",
        email: "michael.park@example.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        role: "Urban Tech Specialist"
      },
      category: "Sustainability",
      likes: 142,
      tags: ["Smart Cities", "IoT", "Sustainability"]
    },
    {
      id: 3,
      title: "Decentralized Education Platform",
      description: "A blockchain-based platform connecting students with expert educators worldwide, featuring verified credentials and micropayments.",
      owner: {
        name: "Emma Rodriguez",
        email: "emma.rodriguez@example.com",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        role: "EdTech Pioneer"
      },
      category: "Education",
      likes: 98,
      tags: ["Blockchain", "Education", "Technology"]
    },
    {
      id: 4,
      title: "AR Fitness Coach",
      description: "An augmented reality fitness coach that provides real-time form correction and personalized workout plans.",
      owner: {
        name: "James Wilson",
        email: "james.wilson@example.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
        role: "Fitness Tech Innovator"
      },
      category: "Fitness",
      likes: 87,
      tags: ["AR", "Fitness", "Health"]
    }
  ];

  const handleContact = (idea: Idea) => {
    setSelectedIdea(idea);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Wall of Ideas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore innovative ideas from our community and connect with fellow entrepreneurs
            to bring these visions to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} onContact={handleContact} />
          ))}
        </div>

        <ContactModal
          idea={selectedIdea}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default WallOfIdeas;