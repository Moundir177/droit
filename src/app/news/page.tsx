'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { getNewsItems } from '@/lib/tina';
import Image from 'next/image';

type Language = 'fr' | 'ar';

interface NewsItem {
  _sys: {
    filename: string;
  };
  title_fr: string;
  title_ar: string;
  date: string;
  author_fr: string;
  author_ar: string;
  category_fr: string;
  category_ar: string;
  excerpt_fr: string;
  excerpt_ar: string;
  image: string;
}

interface Category {
  id: string;
  fr: string;
  ar: string;
}

export default function NewsPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  
  const categories: Category[] = [
    { id: 'all', fr: 'Tous', ar: 'الكل' },
    { id: 'formation', fr: 'Formation', ar: 'تدريب' },
    { id: 'rapports', fr: 'Rapports', ar: 'تقارير' },
    { id: 'partenariats', fr: 'Partenariats', ar: 'شراكات' },
    { id: 'evenements', fr: 'Événements', ar: 'فعاليات' },
    { id: 'programmes', fr: 'Programmes', ar: 'برامج' }
  ];

  const getCategoryName = (category: Category): string => {
    return language === 'fr' ? category.fr : category.ar;
  };
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await getNewsItems();
        if (fetchedNews && Array.isArray(fetchedNews)) {
          setNewsItems(fetchedNews as NewsItem[]);
        }
      } catch (error) {
        console.error('Error fetching news items:', error);
      }
    };
    
    fetchNews();
  }, []);
  
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      (item.title_fr?.toLowerCase().includes(searchTerm.toLowerCase()) || 
       item.excerpt_fr?.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || 
      item.category_fr?.toLowerCase() === getCategoryName(categories.find(cat => cat.id === activeCategory) || categories[0]).toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  // Classes for RTL/LTR layout
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'flex-row-reverse' : 'flex-row';

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title={language === 'fr' ? 'Actualités' : 'الأخبار'}
        subtitle={language === 'fr' 
          ? 'Restez informé des dernières activités, publications et événements de la Fondation.' 
          : 'ابق على اطلاع بآخر أنشطة ومنشورات وفعاليات المؤسسة.'}
        language={language as 'fr' | 'ar'}
      />

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className={`flex items-center text-gray-500 text-sm ${language === 'ar' ? 'justify-end' : ''}`}>
            <Link href="/" className="hover:text-[#8FD694]">
              {language === 'fr' ? 'Accueil' : 'الرئيسية'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">
              {language === 'fr' ? 'Actualités' : 'الأخبار'}
            </span>
          </div>
        </div>
      </div>
        
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className={`flex flex-col md:flex-row ${language === 'ar' ? 'md:flex-row-reverse' : ''} justify-between items-center gap-4`}>
              {/* Categories */}
              <div className={`flex flex-wrap gap-2 ${language === 'ar' ? 'justify-end' : ''}`}>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[#8FD694] text-[#171717]'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {language === 'fr' ? category.fr : category.ar}
                  </button>
                ))}
              </div>
              
              {/* Search */}
              <div className="w-full md:w-64">
                <div className={`relative flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <input
                    type="text"
                    placeholder={language === 'fr' ? "Rechercher..." : "بحث..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8FD694] ${language === 'ar' ? 'text-right pr-4 pl-10' : 'pl-4 pr-10'}`}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  <div className={`absolute ${language === 'ar' ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 text-gray-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {filteredNews.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500">
                {language === 'fr' 
                  ? 'Aucune actualité ne correspond à vos critères de recherche.' 
                  : 'لا توجد أخبار تطابق معايير البحث الخاصة بك.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <div key={item._sys.filename} className={`bg-white rounded-lg shadow-md overflow-hidden ${textAlign}`}>
                  {item.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.title_fr}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="inline-block bg-[#8FD694] text-black px-3 py-1 text-sm font-semibold rounded-full mb-3">
                      {item.category_fr}
                    </span>
                    <h2 className="text-xl font-bold mb-2">{item.title_fr}</h2>
                    <p className="text-gray-600 mb-4">{item.excerpt_fr}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(item.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                      <span className="mx-2">•</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {item.author_fr}
                    </div>
                    <Link 
                      href={`/news/${item._sys.filename}`}
                      className="text-[#171717] font-medium hover:text-[#8FD694] transition-colors flex items-center"
                    >
                      Lire la suite
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm">
              <button className={`px-3 py-2 ${language === 'ar' ? 'rounded-r-md' : 'rounded-l-md'} border border-gray-300 bg-white text-gray-500 hover:bg-gray-50`}>
                {language === 'fr' ? 'Précédent' : 'السابق'}
              </button>
              <button className="px-3 py-2 border-t border-b border-gray-300 bg-[#8FD694] text-[#171717]">
                1
              </button>
              <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className={`px-3 py-2 ${language === 'ar' ? 'rounded-l-md' : 'rounded-r-md'} border border-gray-300 bg-white text-gray-700 hover:bg-gray-50`}>
                {language === 'fr' ? 'Suivant' : 'التالي'}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
} 