'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Stats() {
  const [trainings, setTrainings] = useState(0);
  const [beneficiaries, setBeneficiaries] = useState(0);
  const [partners, setPartners] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setTrainings(prev => (prev < 38 ? prev + 1 : prev));
        setBeneficiaries(prev => (prev < 760 ? prev + 20 : prev));
        setPartners(prev => (prev < 25 ? prev + 1 : prev));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  const statItems = [
    {
      value: trainings,
      label: t('stats.trainings'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      value: beneficiaries,
      label: t('stats.beneficiaries'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      value: partners,
      label: t('stats.partners'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('our.impact')}</h2>
          <div className="w-20 h-1 bg-[#8FD694] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-[#8FD694]/10 text-[#8FD694]">
                  {item.icon}
                </div>
              </div>
              <div className="text-5xl font-bold text-[#8FD694] mb-2 flex items-center justify-center">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {item.value}
                </motion.span>
                <span className="text-3xl ml-1">+</span>
              </div>
              <div className="text-gray-800 font-medium text-lg">{item.label}</div>
              <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#8FD694] rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 + (0.2 * index) }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 