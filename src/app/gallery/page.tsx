'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';

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
  },
  {
    id: 7,
    title: {
      fr: 'Sensibilisation Communautaire',
      ar: 'التوعية المجتمعية'
    },
    description: {
      fr: 'Engagement avec les communautés locales pour sensibiliser aux droits',
      ar: 'التواصل مع المجتمعات المحلية للتوعية بالحقوق'
    },
    category: {
      fr: 'Sensibilisation',
      ar: 'توعية'
    },
    image: '/images/gallery/community.jpg'
  },
  {
    id: 8,
    title: {
      fr: 'Conférence Internationale',
      ar: 'مؤتمر دولي'
    },
    description: {
      fr: 'Participation à une conférence internationale sur les droits humains',
      ar: 'المشاركة في مؤتمر دولي حول حقوق الإنسان'
    },
    category: {
      fr: 'Événements',
      ar: 'فعاليات'
    },
    image: '/images/gallery/conference.jpg'
  },
  {
    id: 9,
    title: {
      fr: 'Leadership des Jeunes',
      ar: 'قيادة الشباب'
    },
    description: {
      fr: 'Formation de jeunes leaders pour devenir des défenseurs des droits dans leurs communautés',
      ar: 'تدريب القادة الشباب ليصبحوا مدافعين عن الحقوق في مجتمعاتهم'
    },
    category: {
      fr: 'Formation',
      ar: 'تدريب'
    },
    image: '/images/gallery/leadership.jpg'
  },
  {
    id: 10,
    title: {
      fr: 'Atelier de Recherche',
      ar: 'ورشة بحثية'
    },
    description: {
      fr: 'Atelier de recherche collaborative sur la documentation des violations des droits',
      ar: 'ورشة عمل بحثية تعاونية حول توثيق انتهاكات الحقوق'
    },
    category: {
      fr: 'Recherche',
      ar: 'بحث'
    },
    image: '/images/gallery/research.jpg'
  },
  {
    id: 11,
    title: {
      fr: 'Formation Médias',
      ar: 'تدريب إعلامي'
    },
    description: {
      fr: 'Formation des journalistes sur le reportage basé sur les droits',
      ar: 'تدريب الصحفيين على التقارير القائمة على الحقوق'
    },
    category: {
      fr: 'Formation',
      ar: 'تدريب'
    },
    image: '/images/gallery/media.jpg'
  },
  {
    id: 12,
    title: {
      fr: 'Réunion Annuelle',
      ar: 'الاجتماع السنوي'
    },
    description: {
      fr: 'Assemblée générale annuelle avec les partenaires et les parties prenantes',
      ar: 'الجمعية العامة السنوية مع الشركاء وأصحاب المصلحة'
    },
    category: {
      fr: 'Événements',
      ar: 'فعاليات'
    },
    image: '/images/gallery/annual.jpg'
  }
];

const categories = [
  { id: 'Tous', fr: 'Tous', ar: 'الكل' },
  { id: 'Formation', fr: 'Formation', ar: 'تدريب' },
  { id: 'Événements', fr: 'Événements', ar: 'فعاليات' },
  { id: 'Équipe', fr: 'Équipe', ar: 'فريق' },
  { id: 'Droits des Femmes', fr: 'Droits des Femmes', ar: 'حقوق المرأة' },
  { id: 'Plaidoyer', fr: 'Plaidoyer', ar: 'مناصرة' },
  { id: 'Sensibilisation', fr: 'Sensibilisation', ar: 'توعية' },
  { id: 'Recherche', fr: 'Recherche', ar: 'بحث' }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { language } = useLanguage();
  
  const filteredGallery = activeCategory === 'Tous' || activeCategory === 'الكل'
    ? galleryItems 
    : galleryItems.filter(item => item.category.fr === activeCategory || item.category.ar === activeCategory);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title={language === 'fr' ? 'Galerie' : 'معرض الصور'}
        subtitle={language === 'fr' 
          ? 'Découvrez les moments clés des activités et projets réalisés par la Fondation à travers notre galerie de photos.' 
          : 'اكتشف اللحظات الرئيسية للأنشطة والمشاريع التي نفذتها المؤسسة من خلال معرض الصور.'}
        language={language as 'fr' | 'ar'}
      />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeCategory === category.id
                    ? 'bg-[#8FD694] text-[#171717]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {language === 'fr' ? category.fr : category.ar}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map(item => (
              <div 
                key={item.id} 
                className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer"
                onClick={() => openModal(item.id)}
              >
                <div className="h-64 bg-gradient-to-r from-[#171717]/80 to-[#8FD694]/60 flex items-center justify-center">
                  {/* Image placeholder */}
                </div>
                <div className="p-4">
                  <span className="inline-block bg-[#8FD694]/10 text-[#171717] px-3 py-1 text-xs font-semibold rounded-full mb-2">
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
          
          {/* Modal */}
          {selectedImage !== null && selectedItem && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-4 flex justify-between items-center border-b">
                  <h3 className="text-xl font-semibold">
                    {language === 'fr' ? selectedItem.title.fr : selectedItem.title.ar}
                  </h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <div className="h-96 bg-gradient-to-r from-[#171717]/80 to-[#8FD694]/60 rounded-lg mb-4 flex items-center justify-center">
                    {/* Image placeholder */}
                    <span className="text-white">
                      {language === 'fr' ? "L'image sera affichée ici" : "سيتم عرض الصورة هنا"}
                    </span>
                  </div>
                  <div>
                    <span className="inline-block bg-[#8FD694]/10 text-[#171717] px-3 py-1 text-xs font-semibold rounded-full mb-2">
                      {language === 'fr' ? selectedItem.category.fr : selectedItem.category.ar}
                    </span>
                    <p className="text-gray-600">
                      {language === 'fr' ? selectedItem.description.fr : selectedItem.description.ar}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex">
              <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                {language === 'fr' ? 'Précédent' : 'السابق'}
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 bg-[#8FD694] text-[#171717]">
                1
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                {language === 'fr' ? 'Suivant' : 'التالي'}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
} 