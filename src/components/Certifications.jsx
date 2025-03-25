import React, { useState } from 'react';
import { certifications } from '../certifications';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const openModal = (cert) => {
        setSelectedCert(cert);
    };

    const closeModal = () => {
        setSelectedCert(null);
    };

    const getVerificationUrl = (cert) => {
        const { issuer, credentialId } = cert;
        if (!credentialId) return null;

        switch (issuer) {
            case 'Forage':
                return `https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/${credentialId}.pdf`;
            case 'Simplilearn':
                return `https://simplilearn.com/verify-certificate/${credentialId}`;
            case 'Google Digital Academy (Skillshop)':
                return `https://skillshop.exceedlms.com/student/award/${credentialId}`;
            case 'International Business Management Institute (IBMI)':
                return `https://www.ibm-institute.com/verify-certificate/${credentialId}`;
            case 'Google Cloud Skills Boost':
                return credentialId ? `https://www.cloudskillsboost.google/public_profiles/${credentialId}` : null;
            case 'Unified Mentor':
                return `https://unifiedmentor.com/verify/${credentialId}`;
            default:
                return null;
        }
    };

    const renderTimeline = () => {
        return (
            <div className="certification-pathway-container">
                <h2>My Learning Journey</h2>
                <div className="timeline">
                    <div className="road"></div>
                    {certifications.map((cert, index) => (
                        <div 
                            key={cert.id} 
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            onClick={() => openModal(cert)}
                        >
                            <div className="timeline-content">
                                <h3>
                                    <i className={cert.icon}></i>
                                    {cert.title}
                                </h3>
                                <p><i className="fas fa-building"></i> {cert.issuer}</p>
                                <p><i className="fas fa-calendar-alt"></i> {cert.date}</p>
                                <p>{cert.description}</p>
                                {cert.skills.length > 0 && (
                                    <div className="cert-skills">
                                        {cert.skills.slice(0, 3).map((skill, idx) => (
                                            <span key={idx} className="skill-tag">
                                                <i className="fas fa-check"></i>
                                                {skill}
                                            </span>
                                        ))}
                                        {cert.skills.length > 3 && (
                                            <span className="skill-tag">
                                                +{cert.skills.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderCards = () => {
        return (
            <div className="certification-cards-container">
                {certifications.map((cert) => (
                    <div 
                        key={cert.id} 
                        className="certification-card mobile-card"
                        onClick={() => openModal(cert)}
                    >
                        <h3>
                            <i className={cert.icon}></i>
                            {cert.title}
                        </h3>
                        <p><i className="fas fa-building"></i> {cert.issuer}</p>
                        <p><i className="fas fa-calendar-alt"></i> {cert.date}</p>
                        <div className="cert-description">{cert.description}</div>
                        {cert.skills.length > 0 && (
                            <div className="cert-skills">
                                {cert.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">
                                        <i className="fas fa-check"></i>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const renderModal = () => {
        if (!selectedCert) return null;

        const verificationUrl = getVerificationUrl(selectedCert);

        return (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>
                            <i className={selectedCert.icon}></i>
                            {selectedCert.title}
                        </h2>
                        <button className="modal-close" onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><i className="fas fa-building"></i> <strong>Issuer:</strong> {selectedCert.issuer}</p>
                        <p><i className="fas fa-calendar-alt"></i> <strong>Date:</strong> {selectedCert.date}</p>
                        {selectedCert.credentialId && (
                            <p><i className="fas fa-id-badge"></i> <strong>Credential ID:</strong> {selectedCert.credentialId}</p>
                        )}
                        <p><i className="fas fa-info-circle"></i> <strong>Description:</strong></p>
                        <p>{selectedCert.description}</p>
                        {selectedCert.skills.length > 0 && (
                            <>
                                <p><i className="fas fa-tools"></i> <strong>Skills:</strong></p>
                                <ul>
                                    {selectedCert.skills.map((skill, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check"></i>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div> 
                    <div className="modal-footer">
                        {verificationUrl && (
                            <a 
                                href={verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn primary"
                            >
                                <i className="fas fa-certificate"></i>
                                Verify Certificate
                            </a>
                        )}
                        <button className="modal-btn" onClick={closeModal}>
                            <i className="fas fa-times"></i>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="certifications-container">
            <div className="certifications-content-box">
                <h1>Certifications & Achievements</h1>
                {renderTimeline()}
                {renderCards()}
                {renderModal()}
            </div>
        </div>
    );
};

export default Certifications; 