'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getNewsItems } from '@/lib/tina';

// Fallback data in case CMS data is not available
const fallbackNewsItems = [
  {
    _sys: { filename: 'rapport-annuel-2023' },
    title_fr: 'Publication du Rapport Annuel 2023',
    title_ar: 'نشر التقرير السنوي 2023',
    date: '2023-08-18T12:00:00Z',
    author_fr: 'Équipe de Recherche',
    author_ar: 'فريق البحث',
    category_fr: 'Rapports',
    category_ar: 'تقارير',
    excerpt_fr: 'Notre rapport annuel sur l\'état des droits en Algérie est maintenant disponible. Ce document de référence présente une analyse détaillée des avancées et des défis en matière de droits humains au cours de l\'année écoulée.',
    excerpt_ar: 'تقريرنا السنوي عن حالة الحقوق في الجزائر متاح الآن. تقدم هذه الوثيقة المرجعية تحليلاً مفصلاً للتقدم والتحديات في مجال حقوق الإنسان خلال العام الماضي.',
    image: '/images/report.jpg'
  },
  {
    _sys: { filename: 'formation-droits-fondamentaux' },
    title_fr: 'Formation sur les Droits Fondamentaux',
    title_ar: 'تدريب على الحقوق الأساسية',
    date: '2023-08-25T10:00:00Z',
    author_fr: 'Équipe de Formation',
    author_ar: 'فريق التدريب',
    category_fr: 'Formation',
    category_ar: 'تدريب',
    excerpt_fr: 'Nouvelle session de formation prévue à Alger pour les défenseurs des droits, axée sur les mécanismes de protection internationale.',
    excerpt_ar: 'دورة تدريبية جديدة مخططة في الجزائر العاصمة للمدافعين عن الحقوق، تركز على آليات الحماية الدولية.',
    image: '/images/training.jpg'
  },
  {
    _sys: { filename: 'collaboration-ong-internationales' },
    title_fr: 'Collaboration avec des ONG Internationales',
    title_ar: 'التعاون مع المنظمات غير الحكومية الدولية',
    date: '2023-08-10T09:00:00Z',
    author_fr: 'Équipe des Partenariats',
    author_ar: 'فريق الشراكات',
    category_fr: 'Partenariats',
    category_ar: 'شراكات',
    excerpt_fr: 'Un nouveau partenariat stratégique avec des organisations internationales pour renforcer la promotion des droits.',
    excerpt_ar: 'شراكة استراتيجية جديدة مع منظمات دولية لتعزيز تعزيز الحقوق.',
    image: '/images/partnership.jpg'
  },
  {
    _sys: { filename: 'table-ronde-reformes-juridiques' },
    title_fr: 'Table Ronde sur les Réformes Juridiques',
    title_ar: 'طاولة مستديرة حول الإصلاحات القانونية',
    date: '2023-08-05T14:00:00Z',
    author_fr: 'Équipe des Événements',
    author_ar: 'فريق الفعاليات',
    category_fr: 'Événements',
    category_ar: 'فعاليات',
    excerpt_fr: 'Une journée d\'étude consacrée aux récentes réformes juridiques et à leur impact sur les droits des citoyens.',
    excerpt_ar: 'يوم دراسي مخصص للإصلاحات القانونية الأخيرة وتأثيرها على حقوق المواطنين.',
    image: '/images/event.jpg'
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
  const [newsItems, setNewsItems] = useState(fallbackNewsItems);
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await getNewsItems();
        if (fetchedNews && fetchedNews.length > 0) {
          setNewsItems(fetchedNews);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    
    fetchNews();
  }, []);
  
  const filteredNews = activeCategory === categories[0].fr || activeCategory === categories[0].ar
    ? newsItems.slice(0, 4) // Show only 4 items on the homepage
    : newsItems.filter(item => 
        item.category_fr === activeCategory || 
        item.category_ar === activeCategory
      ).slice(0, 4);

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
        {newsItems.length > 0 && (
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
                    {language === 'ar' ? newsItems[0].category_ar : newsItems[0].category_fr}
                  </motion.span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {language === 'ar' ? newsItems[0].title_ar : newsItems[0].title_fr}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {language === 'ar' 
                      ? new Date(newsItems[0].date).toLocaleDateString('ar-SA')
                      : new Date(newsItems[0].date).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                    }
                    <span className="mx-2">•</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {language === 'ar' ? newsItems[0].author_ar : newsItems[0].author_fr}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {language === 'ar' ? newsItems[0].excerpt_ar : newsItems[0].excerpt_fr}
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link 
                      href={`/news/${newsItems[0]._sys.filename}`}
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
              
              <div className="space-y-8">
                {newsItems.slice(1, 3).map((item, index) => (
                  <motion.div 
                    key={item._sys.filename}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-6">
                      <span className="inline-block bg-[#8FD694]/10 text-[#171717] px-3 py-1 text-xs font-semibold rounded-full mb-3">
                        {language === 'ar' ? item.category_ar : item.category_fr}
                      </span>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        {language === 'ar' ? item.title_ar : item.title_fr}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {language === 'ar' 
                          ? new Date(item.date).toLocaleDateString('ar-SA')
                          : new Date(item.date).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })
                        }
                      </div>
                      <Link 
                        href={`/news/${item._sys.filename}`}
                        className="text-[#171717] text-sm font-medium hover:text-[#8FD694] transition-colors flex items-center mt-3"
                      >
                        {language === 'ar' ? 'قراءة المزيد' : 'Lire la suite'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        <div className="text-center mt-8">
          <Link 
            href="/news" 
            className="inline-block bg-[#171717] hover:bg-[#8FD694] hover:text-[#171717] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            {language === 'ar' ? 'عرض جميع الأخبار' : 'Voir toutes les actualités'}
          </Link>
        </div>
      </div>
    </section>
  );
} 