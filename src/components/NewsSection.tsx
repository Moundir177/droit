'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const newsItems = [
  {
    id: 1,
    title: {
      fr: 'Publication du Rapport Annuel 2023',
      ar: 'نشر التقرير السنوي 2023'
    },
    date: {
      fr: '18 août 2023',
      ar: '18 أغسطس 2023'
    },
    author: {
      fr: 'Équipe de Recherche',
      ar: 'فريق البحث'
    },
    category: {
      fr: 'Rapports',
      ar: 'تقارير'
    },
    excerpt: {
      fr: 'Notre rapport annuel sur l\'état des droits en Algérie est maintenant disponible. Ce document de référence présente une analyse détaillée des avancées et des défis en matière de droits humains au cours de l\'année écoulée.',
      ar: 'تقريرنا السنوي عن حالة الحقوق في الجزائر متاح الآن. تقدم هذه الوثيقة المرجعية تحليلاً مفصلاً للتقدم والتحديات في مجال حقوق الإنسان خلال العام الماضي.'
    },
    image: '/images/report.jpg',
    slug: '/news/rapport-annuel-2023'
  },
  {
    id: 2,
    title: {
      fr: 'Formation sur les Droits Fondamentaux',
      ar: 'تدريب على الحقوق الأساسية'
    },
    date: {
      fr: '25 août 2023',
      ar: '25 أغسطس 2023'
    },
    author: {
      fr: 'Équipe de Formation',
      ar: 'فريق التدريب'
    },
    category: {
      fr: 'Formation',
      ar: 'تدريب'
    },
    excerpt: {
      fr: 'Nouvelle session de formation prévue à Alger pour les défenseurs des droits, axée sur les mécanismes de protection internationale.',
      ar: 'دورة تدريبية جديدة مخططة في الجزائر العاصمة للمدافعين عن الحقوق، تركز على آليات الحماية الدولية.'
    },
    image: '/images/training.jpg',
    slug: '/news/formation-droits-fondamentaux'
  },
  {
    id: 3,
    title: {
      fr: 'Collaboration avec des ONG Internationales',
      ar: 'التعاون مع المنظمات غير الحكومية الدولية'
    },
    date: {
      fr: '10 août 2023',
      ar: '10 أغسطس 2023'
    },
    author: {
      fr: 'Équipe des Partenariats',
      ar: 'فريق الشراكات'
    },
    category: {
      fr: 'Partenariats',
      ar: 'شراكات'
    },
    excerpt: {
      fr: 'Un nouveau partenariat stratégique avec des organisations internationales pour renforcer la promotion des droits.',
      ar: 'شراكة استراتيجية جديدة مع منظمات دولية لتعزيز تعزيز الحقوق.'
    },
    image: '/images/partnership.jpg',
    slug: '/news/collaboration-ong-internationales'
  },
  {
    id: 4,
    title: {
      fr: 'Table Ronde sur les Réformes Juridiques',
      ar: 'طاولة مستديرة حول الإصلاحات القانونية'
    },
    date: {
      fr: '5 août 2023',
      ar: '5 أغسطس 2023'
    },
    author: {
      fr: 'Équipe des Événements',
      ar: 'فريق الفعاليات'
    },
    category: {
      fr: 'Événements',
      ar: 'فعاليات'
    },
    excerpt: {
      fr: 'Une journée d\'étude consacrée aux récentes réformes juridiques et à leur impact sur les droits des citoyens.',
      ar: 'يوم دراسي مخصص للإصلاحات القانونية الأخيرة وتأثيرها على حقوق المواطنين.'
    },
    image: '/images/event.jpg',
    slug: '/news/table-ronde-reformes-juridiques'
  }
];

const categories = [
  { fr: 'Tous', ar: 'الكل' },
  { fr: 'Formation', ar: 'تدريب' },
  { fr: 'Rapports', ar: 'تقارير' },
  { fr: 'Partenariats', ar: 'شراكات' },
  { fr: 'Événements', ar: 'فعاليات' }
];

export default function NewsSection() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(categories[0].fr);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const filteredNews = activeCategory === categories[0].fr || activeCategory === categories[0].ar
    ? newsItems 
    : newsItems.filter(item => 
        item.category.fr === activeCategory || 
        item.category.ar === activeCategory
      );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3 text-gray-800">
            {language === 'ar' ? 'أخبار حديثة' : 'Actualités Récentes'}
          </h2>
          <div className="w-24 h-1 bg-[#8FD694] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'ar' 
              ? 'اكتشف أحدث المعلومات حول أنشطتنا ومشاريعنا والتزاماتنا.'
              : 'Découvrez les dernières informations sur nos activités, projets et engagements.'}
          </p>
        </motion.div>
        
        {/* Featured news */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <motion.span 
                  className="inline-block bg-[#8FD694] text-black px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {language === 'ar' ? newsItems[0].category.ar : newsItems[0].category.fr}
                </motion.span>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {language === 'ar' ? newsItems[0].title.ar : newsItems[0].title.fr}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {language === 'ar' ? newsItems[0].date.ar : newsItems[0].date.fr}
                  <span className="mx-2">•</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {language === 'ar' ? newsItems[0].author.ar : newsItems[0].author.fr}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {language === 'ar' ? newsItems[0].excerpt.ar : newsItems[0].excerpt.fr}
                </p>
                <div className="mb-8 bg-gray-50 p-5 rounded-xl">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    {language === 'ar' ? 'النقاط الرئيسية للتقرير:' : 'Points clés du rapport:'}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8FD694] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {language === 'ar' ? 'تحليل الإصلاحات التشريعية' : 'Analyse des réformes législatives'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8FD694] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {language === 'ar' ? 'تقييم حرية التعبير' : 'Évaluation de la liberté d\'expression'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8FD694] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        {language === 'ar' ? 'الوصول إلى العدالة والمحاكمات العادلة' : 'Accès à la justice et procès équitables'}
                      </span>
                    </li>
                  </ul>
                </div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link 
                    href={newsItems[0].slug} 
                    className="text-[#171717] font-medium hover:text-[#8FD694] transition-colors flex items-center"
                  >
                    {language === 'ar' ? 'قراءة التقرير كاملاً' : 'Lire le rapport complet'}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
                </motion.div>
              </div>
            </motion.div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  {language === 'ar' ? 'الفئات' : 'Catégories'}
                </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <motion.button
                      key={language === 'ar' ? category.ar : category.fr}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === (language === 'ar' ? category.ar : category.fr)
                          ? 'bg-[#8FD694] text-black shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                      onClick={() => setActiveCategory(language === 'ar' ? category.ar : category.fr)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {language === 'ar' ? category.ar : category.fr}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#171717] to-black p-6 rounded-2xl text-white shadow-lg">
                <h3 className="font-semibold text-lg mb-4">
                  {language === 'ar' ? 'اشترك في نشرتنا الإخبارية' : 'Abonnez-vous à notre newsletter'}
                </h3>
                <p className="text-white/90 mb-4 text-sm">
                  {language === 'ar' ? 'ابق على اطلاع بأحدث أخبارنا وفعالياتنا' : 'Restez informé de nos dernières actualités et événements'}
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Votre email'} 
                    className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none text-sm"
                  />
                  <motion.button 
                    className="bg-[#8FD694] hover:bg-[#6DB772] px-4 py-2 rounded-r-lg text-black"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* News grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {filteredNews.slice(1).map((newsItem, index) => (
            <motion.div 
              key={newsItem.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              variants={itemAnimation}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={
                    newsItem.category.fr === 'Formation' 
                      ? '/images/news/formation.jpg' 
                      : newsItem.category.fr === 'Partenariats' 
                        ? '/images/news/partenariats.jpg' 
                        : '/images/news/evenements.jpg'
                  }
                  alt={language === 'ar' ? newsItem.title.ar : newsItem.title.fr}
                  fill
                  style={{objectFit: "cover"}}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-white text-[#171717] px-3 py-1 text-xs font-semibold rounded-full">
                    {language === 'ar' ? newsItem.category.ar : newsItem.category.fr}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {language === 'ar' ? newsItem.title.ar : newsItem.title.fr}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {language === 'ar' ? newsItem.date.ar : newsItem.date.fr}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {language === 'ar' ? newsItem.excerpt.ar : newsItem.excerpt.fr}
                </p>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link 
                    href={newsItem.slug} 
                    className="text-[#171717] font-medium hover:text-[#8FD694] transition-colors flex items-center"
                  >
                    {language === 'ar' ? 'قراءة المزيد' : 'Lire la suite'}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 