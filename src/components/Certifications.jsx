import React from 'react';
import SectionTitle from './SectionTitle';
import { certifications } from '../data/portfolioData.jsx';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="certifications-title">Certifications</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-secondary-bg rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-accent-1 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-accent-1 font-mono mb-2">
                {cert.title}
              </h3>
              <p className="text-text-secondary font-mono mb-1">
                {cert.issuer}
              </p>
              <p className="text-sm text-text-secondary mb-4 font-mono">
                {cert.date}
              </p>
              {cert.certificateLink && (
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-1 font-mono text-sm hover:underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
