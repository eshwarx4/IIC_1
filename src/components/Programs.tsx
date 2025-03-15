import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Zap, Users } from 'lucide-react';

const ProgramCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  features: string[] 
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
      className="bg-gray-200 rounded-lg p-8 hover:bg-gray-300 transition-colors duration-300"
    >
      <Icon className="w-12 h-12 text-[#ed502e] mb-6" />
      <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
      <p className="text-gray-800 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-900">
            <span className="w-2 h-2 bg-[#ed502e] rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#ed502e] mb-4">Our Programs</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Comprehensive support programs designed to nurture and accelerate innovative startups
            at every stage of their journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProgramCard
            icon={Rocket}
            title="Incubation Program"
            description="A 12-month program providing comprehensive support to early-stage startups."
            features={[
              "Dedicated workspace",
              "Seed funding support",
              "Technical mentorship",
              "Business development",
              "Legal & IP support"
            ]}
          />

          <ProgramCard
            icon={Zap}
            title="Acceleration Program"
            description="Intensive 6-month program to scale up existing startups."
            features={[
              "Growth strategy",
              "Market access",
              "Investor connect",
              "Scale-up support",
              "Global networking"
            ]}
          />

          <ProgramCard
            icon={Users}
            title="Mentorship Program"
            description="Connect with industry experts and successful entrepreneurs."
            features={[
              "One-on-one mentoring",
              "Industry expertise",
              "Network building",
              "Strategic guidance",
              "Regular workshops"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Programs