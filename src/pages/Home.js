import React from 'react';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const courses = [
    {
      title: "ReactJS Development",
      instructor: "Dr. John Doe",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "Popular"
    },
    {
      title: "Digital Marketing",
      instructor: "Rob Percival",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "Trending"
    },
    {
      title: "Data Science Fundamentals",
      instructor: "Dr. Sarah Chen",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "New"
    },
    {
      title: "UX/UI Design Mastery",
      instructor: "Emily Rodriguez",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      badge: "Hot"
    }
  ];

  const testimonials = [
    {
      text: "LearnHub has been a game-changer for my career. The courses are practical, well-structured, and taught by industry experts. I landed a new job thanks to the skills I gained here!",
      author: "David Smith",
      role: "Web Developer"
    },
    {
      text: "The flexibility to learn at my own pace was perfect for my busy schedule. The community forums are also incredibly helpful. Highly recommended for anyone looking to upskill.",
      author: "Eslie Johnson",
      role: "Marketing Manager"
    },
    {
      text: "The quality of instruction on LearnHub is exceptional. The hands-on projects were particularly valuable and helped me build a strong portfolio that impressed employers.",
      author: "Sarah Johnson",
      role: "Data Scientist"
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in">Unlock Your Potential.<br />Master New Skills.</h1>
          <p className="fade-in">Access hundreds of expert-led courses anytime, anywhere. Start your learning journey with LearnHub today and transform your career.</p>
          <button className="cta-button fade-in">Explore Courses</button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2 className="fade-in">Explore Our Popular Courses</h2>
        <p className="courses-subtitle fade-in">Hand-picked by industry experts to boost your career</p>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              image={course.image}
              badge={course.badge}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="fade-in">What Our Students Say</h2>
        <p className="testimonials-subtitle fade-in">Join thousands of successful learners who transformed their careers</p>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
