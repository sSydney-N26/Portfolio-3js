import React from 'react';

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">CONTACT ME!</h2>
        <p className="text-gray-600">You might find these convenient!</p>
      </div>

      {/* Contact Platforms */}
      <div className="flex flex-col md:flex-row gap-6">
        <ContactCard
          icon="📧"
          label="E-mail"
          url="mailto:your-email@example.com"
          bgColor="bg-pink-500"
        />
        <ContactCard
          icon="🔗"
          label="LinkedIn"
          url="https://www.linkedin.com/in/your-profile"
          bgColor="bg-blue-600"
        />
        <ContactCard
          icon="🐱"
          label="Github"
          url="https://github.com/your-username"
          bgColor="bg-purple-600"
        />
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, url, bgColor }) => {
  return (
    <a
      href={url}
      className="flex items-center p-5 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${bgColor} mr-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{label}</h3>
      </div>
    </a>
  );
};

export default ContactSection;