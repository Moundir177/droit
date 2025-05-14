'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const galleryItems = [
  {
    id: 1,
    title: {
      fr: 'Engagement des Jeunes',
      ar: 'مشاركة الشباب'
    },
    description: {
      fr: 'Atelier de formation avec de jeunes militants sur les droits humains et la citoyenneté',
      ar: 'ورشة تدريبية مع نشطاء شباب حول حقوق الإنسان والمواطنة'
    },
    category: {
      fr: 'Formation',
      ar: 'تدريب'
    },
    image: '/images/gallery/youth.jpg'
  },
  {
    id: 2,
    title: {
      fr: 'Collaboration',
      ar: 'تعاون'
    },
    description: {
      fr: 'Notre équipe diverse collaborant sur de nouveaux projets et initiatives',
      ar: 'فريقنا المتنوع يتعاون على مشاريع ومبادرات جديدة'
    },
    category: {
      fr: 'Équipe',
      ar: 'فريق'
    },
    image: '/images/gallery/team.jpg'
  },
  {
    id: 3,
    title: {
      fr: 'Autonomisation des Femmes',
      ar: 'تمكين المرأة'
    },
    description: {
      fr: 'Atelier sur l\'autonomisation juridique et les droits des femmes',
      ar: 'ورشة عمل حول التمكين القانوني وحقوق المرأة'
    },
    category: {
      fr: 'Droits des Femmes',
      ar: 'حقوق المرأة'
    },
    image: '/images/gallery/women.jpg'
  },
  {
    id: 4,
    title: {
      fr: 'Campagne de Plaidoyer',
      ar: 'حملة مناصرة'
    },
    description: {
      fr: 'Actions de plaidoyer auprès des décideurs et des institutions',
      ar: 'أنشطة المناصرة مع صناع القرار والمؤسسات'
    },
    category: {
      fr: 'Plaidoyer',
      ar: 'مناصرة'
    },
    image: '/images/gallery/advocacy.jpg'
  },
  {
    id: 5,
    title: {
      fr: 'Atelier Juridique',
      ar: 'ورشة قانونية'
    },
    description: {
      fr: 'Séminaire de formation sur l\'accès à la justice et les procédures juridiques',
      ar: 'ندوة تدريبية حول الوصول إلى العدالة والإجراءات القانونية'
    },
    category: {
      fr: 'Événements',
      ar: 'فعاليات'
    },
    image: '/images/gallery/legal.jpg'
  },
  {
    id: 6,
    title: {
      fr: 'Planification de Projet',
      ar: 'تخطيط المشروع'
    },
    description: {
      fr: 'Réunion de planification stratégique avec l\'équipe de la Fondation',
      ar: 'اجتماع التخطيط الاستراتيجي مع فريق المؤسسة'
    },
    category: {
      fr: 'Équipe',
      ar: 'فريق'
    },
    image: '/images/gallery/planning.jpg'
  }
];

const categories = [
  { fr: 'Tous', ar: 'الكل' },
  { fr: 'Formation', ar: 'تدريب' },
  { fr: 'Événements', ar: 'فعاليات' },
  { fr: 'Équipe', ar: 'فريق' },
  { fr: 'Droits des Femmes', ar: 'حقوق المرأة' },
  { fr: 'Plaidoyer', ar: 'مناصرة' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const { language } = useLanguage();
  
  // Get active category in current language
  const getActiveCategoryInCurrentLanguage = () => {
    const categoryObj = categories.find(cat => 
      cat.fr === activeCategory || cat.ar === activeCategory
    );
    return categoryObj ? (language === 'fr' ? categoryObj.fr : categoryObj.ar) : (language === 'fr' ? 'Tous' : 'الكل');
  };
  
  // Filter gallery items based on active category
  const filteredGallery = activeCategory === 'Tous' || activeCategory === 'الكل'
    ? galleryItems 
    : galleryItems.filter(item => {
        const itemCategory = language === 'fr' ? item.category.fr : item.category.ar;
        const activeCurrentLang = getActiveCategoryInCurrentLanguage();
        return itemCategory === activeCurrentLang;
      });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {language === 'fr' ? 'Notre Travail en Images' : 'عملنا في صور'}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          {language === 'fr' 
            ? 'Découvrez les moments clés des activités et projets réalisés par la Fondation à travers notre galerie de photos.'
            : 'اكتشف اللحظات الرئيسية للأنشطة والمشاريع التي نفذتها المؤسسة من خلال معرض الصور.'}
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm ${
                (language === 'fr' && activeCategory === category.fr) || 
                (language === 'ar' && activeCategory === category.ar)
                  ? 'bg-[#3cb496] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(language === 'fr' ? category.fr : category.ar)}
            >
              {language === 'fr' ? category.fr : category.ar}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map(item => (
            <div key={item.id} className="overflow-hidden rounded-lg shadow-md bg-white">
              <div className="h-64 bg-gradient-to-r from-[#3cb496]/20 to-[#f39207]/20 flex items-center justify-center">
                {/* Image placeholder */}
              </div>
              <div className="p-4">
                <span className="inline-block bg-gray-100 text-[#3cb496] px-3 py-1 text-xs font-semibold rounded-full mb-2">
                  {language === 'fr' ? item.category.fr : item.category.ar}
                </span>
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'fr' ? item.title.fr : item.title.ar}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'fr' ? item.description.fr : item.description.ar}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/gallery" className="btn-outline">
            {language === 'fr' ? 'Explorer la galerie complète' : 'استكشاف المعرض الكامل'}
          </Link>
        </div>
      </div>
    </section>
  );
} 