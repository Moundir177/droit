'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ 
          backgroundImage: "url('/images/hero-background.jpg')", 
          backgroundPosition: 'center',
        }}
      >
        {/* Modern gradient overlay with light green and black */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-[#8FD694]/70"
          style={{
            backgroundPosition: `${mousePosition.x / 100}px ${mousePosition.y / 100}px`
          }}
        ></div>
        
        {/* Particle overlay */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#8FD694]/30"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: Math.random() * 0.5 + 0.3 
              }}
              animate={{ 
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%"
                ],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: Math.random() * 10 + 20,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              {language === 'fr' 
                ? 'Ensemble, pour des droits connus, reconnus et défendus.' 
                : 'معاً، من أجل حقوق معروفة ومعترف بها ومحمية.'}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr'
                ? 'Notre mission est de promouvoir et défendre les droits par la sensibilisation, la formation, la documentation des violations et le soutien aux acteurs de la société civile.'
                : 'مهمتنا هي تعزيز والدفاع عن الحقوق من خلال التوعية والتدريب وتوثيق الانتهاكات ودعم الفاعلين في المجتمع المدني.'}
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/about" 
                className="bg-[#8FD694] hover:bg-[#6DB772] text-black font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>{language === 'fr' ? 'Qui sommes-nous' : 'من نحن'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="bg-black/30 hover:bg-black/50 text-white border-2 border-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2"
              >
                <span>{language === 'fr' ? 'Nous contacter' : 'اتصل بنا'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/resources" 
                className="bg-transparent hover:bg-[#8FD694]/20 text-white border-2 border-[#8FD694] font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2"
              >
                <span>{language === 'fr' ? 'Nos publications' : 'منشوراتنا'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 1 },
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8FD694]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 