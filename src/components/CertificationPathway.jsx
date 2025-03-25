import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CertificationPathway.css';

gsap.registerPlugin(ScrollTrigger);

const CertificationPathway = ({ certifications }) => {
  const containerRef = useRef(null);
  const [selectedCertification, setSelectedCertification] = useState(null);

  useEffect(() => {
    const certificationsElements = gsap.utils.toArray('.certification-card');

    certificationsElements.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, [certifications]);

  const handleCertificationClick = (certification) => {
    setSelectedCertification(certification);
  };

  const handleCloseModal = () => {
    setSelectedCertification(null);
  };

  return (
    <div className="certification-pathway-container" ref={containerRef}>
      <h2>Certification Timeline</h2>
      <div className="timeline">
        <div className="road"></div>
        {certifications.map((certification, index) => (
          <div
            key={certification.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-marker"></div>
            <div
              className="certification-card"
              onClick={() => handleCertificationClick(certification)}
            >
              <h3>{certification.name}</h3>
              <p>{certification.organization}</p>
              <p>{certification.date}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCertification && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedCertification.name}</h2>
            <p>Organization: {selectedCertification.organization}</p>
            <p>Date: {selectedCertification.date}</p>
            <p>Details: {selectedCertification.details}</p>
            {selectedCertification.verificationLink && (
              <a
                href={selectedCertification.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Verification Link</button>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationPathway;
