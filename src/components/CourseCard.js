import React from 'react';

const CourseCard = ({ title, instructor, rating, image, badge }) => {
  return (
    <div className="course-card fade-in">
      {badge && <span className="course-badge">{badge}</span>}
      <img 
        src={image} 
        alt={title}
        className="course-image"
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/400x220/6366f1/ffffff?text=${encodeURIComponent(title)}`;
        }}
      />
      <div className="course-content">
        <h3>{title}</h3>
        {/* <p className="instructor">{instructor}</p> */}
        <p className="rating">⭐ {rating} Stars</p>
      </div>
    </div>
  );
};

export default CourseCard;
