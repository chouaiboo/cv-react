import React from 'react';
import './Portfolio.css'; // N'oubliez pas de créer ce fichier CSS

const Portfolio = () => {
  const experiences = [
    {
      category: "Freelance",
      items: [
        { title: "Site web e-commerce", description: "Développement d'un site de vente en ligne pour une boutique locale" },
        { title: "Application mobile", description: "Création d'une app de suivi de fitness pour un coach sportif" }
      ]
    },
    {
      category: "Académique",
      items: [
        { title: "Projet de fin d'études", description: "Système de gestion de bibliothèque en Java" },
        { title: "Hackathon universitaire", description: "2ème place pour une app de covoiturage écologique" }
      ]
    },
    {
      category: "Travail",
      items: [
        { title: "Développeur junior chez TechCorp", description: "Maintenance et amélioration d'une plateforme CRM" },
        { title: "Stage chez WebInnovators", description: "Participation au développement d'une API RESTful" }
      ]
    },
    {
      category: "Projets personnels",
      items: [
        { title: "Blog tech personnel", description: "Blog WordPress sur les dernières tendances en développement web" },
        { title: "Application de budget open-source", description: "Outil de gestion de finances personnelles en React" }
      ]
    }
  ];

  return (
    <section id='portfolio'>
      <h2>Mon Portfolio</h2>
      <div className="portfolio-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="portfolio-category">
            <h3>{exp.category}</h3>
            <ul>
              {exp.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;