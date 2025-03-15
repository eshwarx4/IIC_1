import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  image: string;
  category: 'workshop' | 'hackathon' | 'seminar' | 'networking';
}

const EventCard = ({ event }: { event: Event }) => {
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
      className="bg-gray-200 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="h-48 relative">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-gray-200 text-[#ed502e] px-3 py-1 rounded-full text-sm">
          {event.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-3">{event.title}</h3>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="h-4 w-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Users className="h-4 w-4 mr-2" />
            <span>{event.attendees} Attendees</span>
          </div>
        </div>
        <button className="mt-6 w-full bg-[#ed502e]/80 hover:bg-[#ed502e] text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
          Register Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const upcomingEvents: Event[] = [
    {
      title: "Startup Weekend 2025",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium, IIT Kharagpur",
      description: "54-hour weekend event where entrepreneurs pitch ideas, form teams, and launch startups.",
      attendees: 250,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
      category: "hackathon"
    },
    {
      title: "AI Innovation Workshop",
      date: "March 25, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Hub, Technology Park",
      description: "Hands-on workshop on implementing AI solutions in startups.",
      attendees: 100,
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80",
      category: "workshop"
    },
    {
      title: "Venture Capital Summit",
      date: "April 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Center",
      description: "Connect with leading VCs and learn about funding opportunities.",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
      category: "networking"
    }
  ];

  const pastEvents: Event[] = [
    {
      title: "Tech Startup Showcase",
      date: "February 28, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Innovation Center",
      description: "Annual showcase of innovative tech startups from our incubation program.",
      attendees: 300,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
      category: "seminar"
    },
    {
      title: "Entrepreneurship Bootcamp",
      date: "February 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Startup Hub",
      description: "Intensive bootcamp covering all aspects of startup development.",
      attendees: 80,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      category: "workshop"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#ed502e] mb-4">Events & Programs</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Join our community events and programs designed to support and accelerate your entrepreneurial journey.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black mb-8">Past Events</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;