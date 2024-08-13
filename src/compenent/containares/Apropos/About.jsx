import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const skillsRef = useRef([]);
  const titleRef = useRef(null);
  const [visibleSkills, setVisibleSkills] = useState(6);

  const skills = [
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Git', icon: '🔀' },
    { name: 'Algorithmes', icon: '🧮' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Bootstrap', icon: '🅱️' }
  ];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    skillsRef.current.forEach((skill, index) => {
      gsap.fromTo(
        skill,
        { y: 100, opacity: 0, rotation: -15 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skill,
            start: 'top center+=100',
            toggleActions: 'play none none none',
          },
          delay: index * 0.1,
        }
      );
    });
  }, [visibleSkills]);

  const handleShowMore = () => {
    setVisibleSkills(skills.length);
  };

  return (
    <section id='about'>
      <h1 ref={titleRef}>Mes Compétences</h1>
      <div className="skills-container">
        {skills.slice(0, visibleSkills).map((skill, index) => (
          <div 
            key={index} 
            className="skill-square"
            ref={el => skillsRef.current[index] = el}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      {visibleSkills < skills.length && (
        <button onClick={handleShowMore} className="show-more-btn">
          Voir plus
        </button>
      )}
    </section>
  );
};

export default About;