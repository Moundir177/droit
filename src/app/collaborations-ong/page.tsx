'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaHandshake, FaGlobeAfrica, FaUsers, FaUniversity } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function CollaborationsONGPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('current');

  // Classes for RTL/LTR layout
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'flex-row-reverse' : 'flex-row';

  // Sample NGO partners data
  const partners = [
    {
      id: 1,
      name: language === 'fr' ? 'Association pour les Droits Humains' : 'جمعية حقوق الإنسان',
      logo: '/images/partner1.jpg',
      description: language === 'fr' 
        ? 'Organisation dédiée à la défense des droits humains et à la promotion de la justice sociale à travers des programmes de sensibilisation et de plaidoyer.' 
        : 'منظمة مكرسة للدفاع عن حقوق الإنسان وتعزيز العدالة الاجتماعية من خلال برامج التوعية والمناصرة.',
      country: language === 'fr' ? 'Maroc' : 'المغرب',
      type: 'current'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Fondation Méditerranée pour le Développement' : 'مؤسسة المتوسط للتنمية',
      logo: '/images/partner2.jpg',
      description: language === 'fr' 
        ? 'Fondation travaillant sur des projets de développement durable et de renforcement des capacités des communautés locales dans la région méditerranéenne.' 
        : 'مؤسسة تعمل على مشاريع التنمية المستدامة وبناء قدرات المجتمعات المحلية في منطقة البحر المتوسط.',
      country: language === 'fr' ? 'Tunisie' : 'تونس',
      type: 'current'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Centre d\'Études Juridiques' : 'مركز الدراسات القانونية',
      logo: '/images/partner3.jpg',
      description: language === 'fr' 
        ? 'Centre de recherche spécialisé dans l\'analyse des cadres juridiques et la promotion de réformes législatives pour renforcer l\'état de droit.' 
        : 'مركز بحثي متخصص في تحليل الأطر القانونية وتعزيز الإصلاحات التشريعية لتعزيز سيادة القانون.',
      country: language === 'fr' ? 'Algérie' : 'الجزائر',
      type: 'current'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Alliance pour l\'Éducation' : 'تحالف من أجل التعليم',
      logo: '/images/partner4.jpg',
      description: language === 'fr' 
        ? 'Organisation œuvrant pour l\'accès à l\'éducation de qualité pour tous, avec un focus particulier sur les populations marginalisées.' 
        : 'منظمة تعمل من أجل الوصول إلى تعليم جيد للجميع، مع تركيز خاص على الفئات المهمشة.',
      country: language === 'fr' ? 'Sénégal' : 'السنغال',
      type: 'past'
    },
    {
      id: 5,
      name: language === 'fr' ? 'Institut de Recherche sur les Politiques Publiques' : 'معهد أبحاث السياسات العامة',
      logo: '/images/partner5.jpg',
      description: language === 'fr' 
        ? 'Institut dédié à l\'analyse des politiques publiques et à la formulation de recommandations pour améliorer la gouvernance et les services publics.' 
        : 'معهد مخصص لتحليل السياسات العامة وصياغة توصيات لتحسين الحوكمة والخدمات العامة.',
      country: language === 'fr' ? 'Égypte' : 'مصر',
      type: 'potential'
    },
  ];

  const filteredPartners = partners.filter(partner => partner.type === activeTab);

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title={language === 'fr' ? 'Collaborations ONG' : 'تعاون مع المنظمات'}
        subtitle={language === 'fr' 
                ? 'Découvrez nos partenariats avec des organisations non gouvernementales pour promouvoir et défendre les droits.' 
                : 'اكتشف شراكاتنا مع المنظمات غير الحكومية لتعزيز وحماية الحقوق.'}
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
              {language === 'fr' ? 'Collaborations ONG' : 'تعاون مع المنظمات'}
            </span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                {language === 'fr' ? 'Notre réseau de partenaires' : 'شبكة شركائنا'}
              </h2>
              <div className="flex justify-center mb-8">
                <div className="h-1 w-16 bg-[#8FD694]"></div>
                <div className="h-1 w-16 bg-[#171717] ml-1"></div>
              </div>
              <p className="text-lg text-gray-700">
                {language === 'fr'
                  ? 'La Fondation pour la promotion des droits travaille en étroite collaboration avec un réseau d\'organisations non gouvernementales partageant nos valeurs et notre engagement pour la défense des droits.'
                  : 'تعمل مؤسسة تعزيز الحقوق بشكل وثيق مع شبكة من المنظمات غير الحكومية التي تشاركنا قيمنا والتزامنا بالدفاع عن الحقوق.'}
              </p>
            </div>

            {/* Partnership Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className={textAlign}>
                <div className="flex mb-6">
                  <div className="w-12 h-12 bg-[#8FD694]/10 rounded-full flex items-center justify-center">
                    <FaHandshake className="text-[#8FD694] text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">
                      {language === 'fr' ? 'Collaboration stratégique' : 'التعاون الاستراتيجي'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'fr'
                        ? 'Nous établissons des partenariats stratégiques pour maximiser notre impact et atteindre des objectifs communs.'
                        : 'نقيم شراكات استراتيجية لتعظيم تأثيرنا وتحقيق أهداف مشتركة.'}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-12 h-12 bg-[#8FD694]/10 rounded-full flex items-center justify-center">
                    <FaGlobeAfrica className="text-[#8FD694] text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">
                      {language === 'fr' ? 'Portée internationale' : 'النطاق الدولي'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'fr'
                        ? 'Notre réseau s\'étend à travers différentes régions, nous permettant d\'avoir un impact global.'
                        : 'تمتد شبكتنا عبر مناطق مختلفة، مما يسمح لنا بإحداث تأثير عالمي.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className={textAlign}>
                <div className="flex mb-6">
                  <div className="w-12 h-12 bg-[#171717]/10 rounded-full flex items-center justify-center">
                    <FaUsers className="text-[#171717] text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">
                      {language === 'fr' ? 'Renforcement mutuel' : 'التعزيز المتبادل'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'fr'
                        ? 'Nous partageons ressources, expertise et bonnes pratiques pour renforcer nos capacités mutuelles.'
                        : 'نتشارك الموارد والخبرات وأفضل الممارسات لتعزيز قدراتنا المتبادلة.'}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-12 h-12 bg-[#171717]/10 rounded-full flex items-center justify-center">
                    <FaUniversity className="text-[#171717] text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">
                      {language === 'fr' ? 'Échange de connaissances' : 'تبادل المعرفة'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'fr'
                        ? 'Nous facilitons l\'échange de connaissances et d\'expériences entre nos partenaires.'
                        : 'نسهل تبادل المعرفة والخبرات بين شركائنا.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              {language === 'fr' ? 'Nos partenaires' : 'شركاؤنا'}
            </h2>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-16 bg-[#8FD694]"></div>
              <div className="h-1 w-16 bg-[#171717] ml-1"></div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium border ${
                  activeTab === 'current'
                    ? 'bg-[#8FD694] text-[#171717] border-[#8FD694]'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                } rounded-l-lg`}
                onClick={() => setActiveTab('current')}
              >
                {language === 'fr' ? 'Partenaires actuels' : 'الشركاء الحاليون'}
              </button>
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium border ${
                  activeTab === 'past'
                    ? 'bg-[#8FD694] text-[#171717] border-[#8FD694]'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('past')}
              >
                {language === 'fr' ? 'Anciens partenaires' : 'الشركاء السابقون'}
              </button>
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium border ${
                  activeTab === 'potential'
                    ? 'bg-[#8FD694] text-[#171717] border-[#8FD694]'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                } rounded-r-lg`}
                onClick={() => setActiveTab('potential')}
              >
                {language === 'fr' ? 'Partenaires potentiels' : 'الشركاء المحتملون'}
              </button>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map(partner => (
              <div key={partner.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-[#171717]/80 to-[#8FD694]/60">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Logo';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className={`flex items-center justify-between mb-4 ${flexDirection}`}>
                    <h3 className="text-xl font-bold">{partner.name}</h3>
                    <span className="px-3 py-1 bg-[#8FD694]/10 text-[#171717] text-xs rounded-full">
                      {partner.country}
                    </span>
                  </div>
                  <p className={`text-gray-700 mb-4 ${textAlign}`}>
                    {partner.description}
                  </p>
                  <a
                    href="#"
                    className={`text-[#8FD694] hover:text-[#8FD694]/80 font-medium inline-flex items-center ${
                      language === 'ar' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {language === 'fr' ? 'En savoir plus' : 'معرفة المزيد'}
                    <svg
                      className={`w-4 h-4 ml-2 ${language === 'ar' ? 'mr-2 ml-0 transform rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === 'fr'
                  ? 'Aucun partenaire à afficher dans cette catégorie.'
                  : 'لا يوجد شركاء للعرض في هذه الفئة.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#171717] to-[#8FD694] rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {language === 'fr' ? 'Devenez notre partenaire' : 'كن شريكنا'}
              </h2>
              <p className="text-white/90 mb-8">
                {language === 'fr'
                  ? 'Vous êtes une ONG partageant nos valeurs et notre vision ? Rejoignez notre réseau de partenaires et travaillons ensemble pour un impact plus grand.'
                  : 'هل أنت منظمة غير حكومية تشاركنا قيمنا ورؤيتنا؟ انضم إلى شبكة شركائنا ولنعمل معًا من أجل تأثير أكبر.'}
              </p>
              <div className="flex justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#171717] bg-white hover:bg-gray-50"
                >
                  {language === 'fr' ? 'Contactez-nous' : 'اتصل بنا'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 