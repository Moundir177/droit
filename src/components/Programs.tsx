'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Programs() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {language === 'ar' ? 'برامجنا' : 'Nos Programmes'}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {language === 'ar' 
            ? 'اكتشف البرامج المختلفة التي نعمل من خلالها على تعزيز وحماية الحقوق الأساسية.'
            : 'Découvrez les différents programmes à travers lesquels nous travaillons pour promouvoir et protéger les droits fondamentaux.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rights Education */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <div className="relative h-48">
              <Image 
                src="/images/programs/rights-education.jpg" 
                alt={language === 'ar' ? 'التثقيف في مجال الحقوق' : 'Éducation aux droits'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 to-transparent flex items-end">
                <h3 className="text-xl font-semibold text-white p-4">
                  {language === 'ar' ? 'التثقيف في مجال الحقوق' : 'Éducation aux droits'}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                {language === 'ar'
                  ? 'التوعية والتدريب على مبادئ الحقوق الأساسية لمختلف الفئات.'
                  : 'Sensibilisation et formation aux principes des droits fondamentaux pour différents publics.'}
              </p>
              <Link href="/training/programs" className="text-[#8FD694] hover:underline font-medium inline-flex items-center">
                {language === 'ar' ? 'اكتشف' : 'Découvrir'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Legal Assistance */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <div className="relative h-48">
              <Image 
                src="/images/programs/legal-assistance.jpg" 
                alt={language === 'ar' ? 'المساعدة القانونية' : 'Assistance juridique'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 to-transparent flex items-end">
                <h3 className="text-xl font-semibold text-white p-4">
                  {language === 'ar' ? 'المساعدة القانونية' : 'Assistance juridique'}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                {language === 'ar'
                  ? 'الدعم القانوني للأفراد والمنظمات في الدفاع عن حقوقهم.'
                  : 'Soutien juridique aux individus et organisations dans la défense de leurs droits.'}
              </p>
              <Link href="/resources/guides" className="text-[#8FD694] hover:underline font-medium inline-flex items-center">
                {language === 'ar' ? 'اكتشف' : 'Découvrir'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Advocacy */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <div className="relative h-48">
              <Image 
                src="/images/programs/advocacy.jpg" 
                alt={language === 'ar' ? 'المناصرة' : 'Plaidoyer'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 to-transparent flex items-end">
                <h3 className="text-xl font-semibold text-white p-4">
                  {language === 'ar' ? 'المناصرة' : 'Plaidoyer'}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                {language === 'ar'
                  ? 'أنشطة المناصرة مع صناع القرار لتحسين السياسات المتعلقة بالحقوق.'
                  : 'Actions de plaidoyer auprès des décideurs pour l\'amélioration des politiques liées aux droits.'}
              </p>
              <Link href="/news/projects" className="text-[#8FD694] hover:underline font-medium inline-flex items-center">
                {language === 'ar' ? 'اكتشف' : 'Découvrir'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 