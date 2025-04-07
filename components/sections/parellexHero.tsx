// components/ParallaxHero.tsx
'use client';

import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ParallaxHeroProps {
  title: string;
  description: ReactNode;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage: string;
  backgroundAlt: string;
  backgroundSpeed?: number;
  contentSpeed?: number;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const ParallaxHero = ({
  title,
  description,
  ctaText = 'Get in Touch',
  ctaHref = '#contact',
  backgroundImage,
  backgroundAlt,
  backgroundSpeed = 0.15,
  contentSpeed = -0.1,
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}: ParallaxHeroProps) => {
  return (
    <ParallaxProvider>
      <section className={`relative overflow-hidden bg-white ${className}`}>
        <ParallaxBanner
          layers={[
            {
              children: (
                <Image
                  src={backgroundImage}
                  alt={backgroundAlt}
                  width={1440}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              ),
              speed: backgroundSpeed,
              expanded: false,
              className: 'absolute inset-0 z-0'
            },
          ]}
          className="absolute inset-0"
        />

        <div className="max-w-[1300px] mx-auto px-6 pt-28 pb-56 relative z-10">
          <Parallax speed={contentSpeed}>
            <div 
              data-aos="fade-up" 
              data-aos-delay="100" 
              className="max-w-[700px]"
            >
              <h1 className={`text-[80px] font-bold leading-[1.1] tracking-[-0.02em] ${titleClassName}`}>
                {title}
              </h1>
              <p className={`mt-6 text-3xl font-light text-gray-600 max-w-[600px] ${descriptionClassName}`}>
                {description}
              </p>
              {ctaHref && (
                <Link
                  href={ctaHref}
                  className="mt-8 inline-flex h-12 items-center justify-center bg-primary text-white px-6 rounded-md text-sm font-medium"
                >
                  {ctaText}
                </Link>
              )}
            </div>
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default ParallaxHero;