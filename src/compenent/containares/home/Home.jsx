import React, { useState } from 'react';
import './Home.css';
import ReactPaginate from 'react-paginate';
import backgroundVideo from '../../Assiete/video/bb.mp4';
import image1 from '../../Assiete/image/cv.jpg';
import image2 from '../../Assiete/image/cv.jpg';
import image3 from '../../Assiete/image/cv.jpg';
import cv from '../../Assiete/image/civi.pdf';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const contents = [
    {
      title: "Transformez Vos Idées en Réalité Numérique",
      description: "Bienvenue dans mon univers créatif ! Je suis Chouaib Elhaddad, développeur web passionné, prêt à donner vie à vos projets les plus ambitieux. Explorez mon portfolio et découvrez comment nous pouvons collaborer pour créer des expériences web exceptionnelles.",
      image: image1
    },
    {
      title: "Solutions Web Innovantes et Sur-Mesure",
      description: "De la conception à la réalisation, chaque projet est une opportunité de repousser les limites du possible. Parcourez mes réalisations et laissez-vous inspirer par des interfaces intuitives, des fonctionnalités avancées et des designs captivants.",
      image: image2
    },
    {
      title: "Expertise Technique & Créativité Sans Limite",
      description: "Fort d'une maîtrise approfondie des dernières technologies web, je combine compétences techniques et vision créative pour donner naissance à des solutions uniques. Ensemble, transformons vos défis en succès numériques !",
      image: image3
    }
  ];

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const currentContent = contents[currentPage];

  return (
    <div id="home">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
      
      <div className="content">
        <h1>{currentContent.title}</h1>
        <p>{currentContent.description}</p>
        <div className="cta-container">
          <a href={cv} className="cta-button primary" download>Télécharger Mon CV</a>
          <a href="#contact" className="cta-button secondary">Parlons de Votre Projet</a>
        </div>
      </div>
      
      <div className='image-container'>
        <img src={currentContent.image} alt="Projet" className='project-image' />
      </div>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={contents.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Home;
