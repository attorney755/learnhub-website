import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "LearnHub has been a game-changer for my career. The courses are practical, well-structured, and taught by industry experts. I landed a new job thanks to the skills I gained here!",
      author: "Attorney Vance",
      role: "Web Developer"
    },
    {
      text: "The flexibility to learn at my own pace was perfect for my busy schedule. The community forums are also incredibly helpful. Highly recommended for anyone looking to upskill.",
      author: "Eslie Johnson",
      role: "Marketing Manager"
    },
    {
      text: "The quality of instruction on LearnHub is exceptional. I've taken multiple courses and each one has exceeded my expectations. The hands-on projects were particularly valuable.",
      author: "Sarah Johnson",
      role: "Data Scientist"
    },
    {
      text: "As a working professional, LearnHub's flexible learning model allowed me to balance my job while acquiring new skills. The certificate helped me get a promotion!",
      author: "Michael Chen",
      role: "Product Manager"
    },
    {
      text: "The instructors are truly experts in their fields. The course content is always up-to-date with industry trends and best practices.",
      author: "Emily Carter",
      role: "UX Designer"
    },
    {
      text: "LearnHub's community support is amazing. I've connected with fellow learners and even found mentorship opportunities through the platform.",
      author: "David Kim",
      role: "Software Engineer"
    }
  ];

  return (
    <div className="page">
      <div className="page-content">
        <h1>What Our Students Say</h1>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
