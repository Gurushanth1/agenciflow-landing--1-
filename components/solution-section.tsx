'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      image: '/images.png',
      title: 'Feature 1',
      description: 'Description for feature 1...'
    },
    {
      image: '/images.png',
      title: 'Feature 2',
      description: 'Description for feature 2...'
    },
    {
        image: '/images.png',
        title: 'Feature 2',
        description: 'Description for feature 2...'
      },
    // Add more features as needed
  ];

  // Calculate active index based on scroll progress
  const activeFeature = useTransform(scrollYProgress, [0, 1], [0, features.length - 1]);
  
  // Update active index when scroll changes
  activeFeature.onChange((latest) => {
    const index = Math.round(latest);
    if (index >= 0 && index < features.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section ref={sectionRef} className="feature-section">
      <div className="container">
        <div className="feature-content">
          <h2>Our Features</h2>
          
          <div className="feature-grid">
            <div className="feature-image">
              <motion.img 
                key={activeIndex}
                src={features[activeIndex].image} 
                alt={features[activeIndex].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="feature-items">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`feature-item ${index === activeIndex ? 'active' : ''}`}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0.6,
                    scale: index === activeIndex ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;