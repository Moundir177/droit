'use client';

import { FaGraduationCap, FaBullhorn, FaBalanceScale } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Objectives() {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'fr' ? 'Nos Objectifs' : 'أهدافنا'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3cb496]/20 text-[#3cb496] mb-6">
              <FaGraduationCap size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {language === 'fr' ? 'Formation et Recherche' : 'التدريب والبحث'}
            </h3>
            <p className="text-gray-600">
              {language === 'fr'
                ? 'Organiser des formations continues et des forums, et mener des recherches et des études dans le domaine de la promotion des droits.'
                : 'تنظيم التدريب المستمر والمنتديات وإجراء البحوث والدراسات في مجال تعزيز الحقوق.'}
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f39207]/20 text-[#f39207] mb-6">
              <FaBullhorn size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {language === 'fr' ? 'Sensibilisation et Médias' : 'التوعية والإعلام'}
            </h3>
            <p className="text-gray-600">
              {language === 'fr'
                ? 'Mener des activités de sensibilisation et médiatiques liées à la promotion des droits pour informer et éduquer le public.'
                : 'إجراء أنشطة توعوية وإعلامية متعلقة بتعزيز الحقوق لإعلام وتثقيف الجمهور.'}
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3cb496]/20 text-[#3cb496] mb-6">
              <FaBalanceScale size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {language === 'fr' ? 'Construire un État de Droit' : 'بناء دولة القانون'}
            </h3>
            <p className="text-gray-600">
              {language === 'fr'
                ? 'Contribuer et travailler à construire un État de droit en encourageant les citoyens à s\'engager à faire respecter et à respecter la loi et à promouvoir les droits.'
                : 'المساهمة والعمل على بناء دولة القانون من خلال تشجيع المواطنين على الالتزام بإنفاذ واحترام القانون وتعزيز الحقوق.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 