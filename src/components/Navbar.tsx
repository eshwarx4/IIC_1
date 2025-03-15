import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../Team Photos/IIC Logo/Side - Transparent.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { 
      name: 'Programs', 
      href: '#programs',
      submenu: [
        { name: 'Incubation', href: '#incubation' },
        { name: 'Acceleration', href: '#acceleration' },
        { name: 'Mentorship', href: '#mentorship' },
      ]
    },
    { 
      name: 'Opportunities', 
      href: '#opportunities',
      submenu: [
        { name: 'Wall of Ideas', href: '#ideas' },
        { name: 'Internships', href: '#internships' },
        { name: 'Research Projects', href: '#projects' },
      ]
    },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-gray-100/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <span className="text-2xl font-bold text-[#ed502e]">IIC</span> */}
              <img
              src= {logo} // Replace with your logo's path
              alt="IIC Logo"
              className="h-40 w-40 object-cover rounded-full" // Adjust classes as needed
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-[#ed502e] px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  {item.submenu && (
                    <div className="absolute hidden group-hover:block w-48 bg-gray-200 rounded-md shadow-lg py-1">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:text-[#ed502e] hover:bg-gray-300"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;