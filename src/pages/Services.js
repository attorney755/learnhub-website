import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Online Courses",
      description: "Access hundreds of expert-led courses across various domains including technology, business, design, and more with lifetime access and regular updates."
    },
    {
      title: "Skill Assessments",
      description: "Test your knowledge and get certified with our comprehensive skill assessment tools that help you validate your expertise to employers."
    },
    {
      title: "Career Paths",
      description: "Follow structured learning paths designed by industry experts to help you achieve specific career goals and land your dream job."
    },
    {
      title: "Community Learning",
      description: "Join our vibrant community of learners, participate in discussions, group projects, and learn collaboratively with peers worldwide."
    },
    {
      title: "Corporate Training",
      description: "Custom learning solutions for businesses looking to upskill their workforce with tailored programs and progress tracking."
    },
    {
      title: "Mobile Learning",
      description: "Learn on the go with our mobile app available for iOS and Android devices with offline access and sync capabilities."
    }
  ];

  return (
    <div className="page">
      <div className="page-content">
        <h1>Our Services</h1>
        <p>
          LearnHub offers a comprehensive suite of learning services designed to meet 
          the diverse needs of modern learners. From individual skill development to 
          enterprise training solutions, we provide cutting-edge educational experiences.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
