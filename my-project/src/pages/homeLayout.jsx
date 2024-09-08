import React from "react";

const HomeLayout = () => {
  return (
    <>
      <header className="bg-blue-800 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-slate-100 text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-4">
            Welcome to My Website
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We're here to provide amazing services just for you.
          </p>
          <button className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-blue-800 mb-6">
            About Us
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We are a company dedicated to delivering high-quality products and
            services. Our team is passionate about creating the best experience
            for our clients.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-blue-800 mb-6">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-bold mb-4">Service One</h4>
              <p className="text-gray-600">
                Description of the first service offered.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-bold mb-4">Service Two</h4>
              <p className="text-gray-600">
                Description of the second service offered.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-bold mb-4">Service Three</h4>
              <p className="text-gray-600">
                Description of the third service offered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-blue-800 mb-6">
            Contact Us
          </h3>
          <p className="text-gray-600 mb-4">
            Feel free to reach out if you have any questions.
          </p>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></textarea>
            <button className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomeLayout;
