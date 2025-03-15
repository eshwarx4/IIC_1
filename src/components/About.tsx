import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Target, History } from 'lucide-react';

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex gap-4 mb-8"
    >
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-[#ed502e] rounded-full"></div>
        <div className="w-0.5 h-full bg-[#ed502e]/30"></div>
      </div>
      <div>
        <span className="text-black font-bold">{year}</span>
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-900">{description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#ed502e] mb-4">About Us</h2>
          <p className="text-black max-w-2xl mx-auto">
            Empowering innovators and entrepreneurs to transform their ideas into successful ventures
            through world-class mentorship, resources, and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-200 p-6 rounded-lg"
            >
              <Lightbulb className="w-12 h-12 text-[#ed502e] mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Our Mission</h3>
              <p className="text-gray-900">
                To foster innovation and entrepreneurship by providing a nurturing ecosystem that
                transforms ideas into successful ventures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-200 p-6 rounded-lg"
            >
              <Target className="w-12 h-12 text-[#ed502e] mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Our Vision</h3>
              <p className="text-gray-900">
                To become a leading innovation hub that catalyzes technological advancement and
                economic growth through successful startups.
              </p>
            </motion.div>
          </div>

          <div className="bg-gray-200 p-8 rounded-lg">
            <div className="flex items-center mb-8">
              <History className="w-8 h-8 text-[#ed502e] mr-3" />
              <h3 className="text-2xl font-bold text-black">Our Journey</h3>
            </div>
            <div className="space-y-8">
              <TimelineItem
                year="2018"
                title="Foundation"
                description="Established as the primary innovation hub at IIT Kharagpur."
              />
              <TimelineItem
                year="2020"
                title="Expansion"
                description="Launched accelerator program and expanded mentorship network."
              />
              <TimelineItem
                year="2022"
                title="Growth"
                description="Achieved milestone of supporting 100+ startups."
              />
              <TimelineItem
                year="2024"
                title="Innovation Hub"
                description="Recognized as one of India's leading incubation centers."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About