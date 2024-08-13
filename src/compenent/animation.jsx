import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styled, { keyframes } from 'styled-components';
import ParticlesComponent from '../compenent/partiucle';
import "./animation.css";

const backgroundAnimation = keyframes`
  0% { background-color: #000000; }
  33% { background-color: #1a1a2e; }
  66% { background-color: #16213e; }
  100% { background-color: #000000; }
`;

const AnimationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  animation: ${backgroundAnimation} 10s infinite;
  perspective: 1000px;
`;

const ContentWrapper = styled.div`
  transform-style: preserve-3d;
  width: 100%;
`;

const textColorAnimation = keyframes`
  0% { color: gold;}
  50% { color: #ff6b6b;}
  100% { color: gold; }
`;

const Text = styled.h1`
  font-size: 5rem;
  opacity: 0;
  z-index: 1;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;
  font-family: 'Arial', sans-serif;
  animation: ${textColorAnimation} 5s infinite;
  width: 100%;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const Instruction = styled.p`
  font-size: 1.4rem;
  color: #ffffff;
  opacity: 0;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
`;

const ChouaibAnimation = ({ onAnimationComplete }) => {
  const contentRef = useRef(null);
  const textRef = useRef(null);
  const instructionRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true);
      }
    });

    tl.to(textRef.current, {
      duration: 3,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      width: '100%'
    })
    .to(textRef.current.children, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power3.out"
    })
    .to(textRef.current, {
      duration: 1,
      scale: 1.1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1
    })
    .to(instructionRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      width: '100%'
    });
  }, []);

  const handleClick = () => {
    if (animationComplete) {
      gsap.to(contentRef.current, {
        duration: 1.5,
        rotationY: 360,
        opacity: 0,
        z: -500,
        ease: "power3.inOut",
        onComplete: onAnimationComplete
      });
    }
  };

  return (
    <AnimationContainer>
      <ParticlesComponent />
      <ContentWrapper ref={contentRef}>
        <Text ref={textRef} onClick={handleClick}>
          {"Chouaib Elhaddad".split("").map((letter, index) => (
            <span key={index} style={{ opacity: 0, display: 'inline-block', transform: 'translateY(50px)' }}>
              {letter}
            </span>
          ))}
        </Text>
        <Instruction ref={instructionRef}>
          Cliquez sur le texte pour continuer
          <h2>Front-end devloper...</h2>
        </Instruction>
      </ContentWrapper>
    </AnimationContainer>
  );
};

export default ChouaibAnimation;