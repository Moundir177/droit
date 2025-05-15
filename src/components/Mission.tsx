'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTina } from 'tinacms/dist/react';
import { useState, useEffect } from 'react';

interface MissionProps {
  data: {
    title_fr: string;
    title_ar: string;
    description_fr: string;
    description_ar: string;
    points: {
      text_fr: string;
      text_ar: string;
    }[];
    image: string;
    image_title_fr: string;
    image_title_ar: string;
    image_description_fr: string;
    image_description_ar: string;
  } | null;
}

export default function Mission({ data }: MissionProps) {
  const { language } = useLanguage();
  const [missionData, setMissionData] = useState(data);
  
  // Fallback data in case CMS data is not available
  const fallbackData = {
    title_fr: "Notre Mission",
    title_ar: "مهمتنا",
    description_fr: "La Fondation pour la Promotion des Droits œuvre pour renforcer une culture des droits et autonomiser les groupes vulnérables. À travers nos programmes et initiatives, nous visons à créer un monde où chaque personne peut pleinement jouir de ses droits fondamentaux.",
    description_ar: "تعمل مؤسسة تعزيز الحقوق على تقوية ثقافة الحقوق وتمكين الفئات الضعيفة. من خلال برامجنا ومبادراتنا، نهدف إلى خلق عالم يمكن فيه لكل شخص أن يتمتع بشكل كامل بحقوقه الأساسية.",
    points: [
      {
        text_fr: "Promotion des principes démocratiques et de l'état de droit",
        text_ar: "تعزيز المبادئ الديمقراطية وسيادة القانون"
      },
      {
        text_fr: "Protection des droits des populations vulnérables",
        text_ar: "حماية حقوق الفئات الضعيفة"
      },
      {
        text_fr: "Éducation et sensibilisation aux droits",
        text_ar: "التعليم والتوعية بالحقوق"
      },
      {
        text_fr: "Renforcement des capacités de la société civile",
        text_ar: "تعزيز قدرات المجتمع المدني"
      }
    ],
    image: "/images/droits-egaux.jpg",
    image_title_fr: "Droits Égaux",
    image_title_ar: "حقوق متساوية",
    image_description_fr: "Nous croyons que le respect des droits humains est essentiel au développement de sociétés justes et pacifiques. Notre travail se concentre sur la garantie que ces droits soient connus, reconnus et défendus.",
    image_description_ar: "نؤمن بأن احترام حقوق الإنسان أمر ضروري لتطوير مجتمعات عادلة وسلمية. يركز عملنا على ضمان أن تكون هذه الحقوق معروفة ومعترف بها ومدافع عنها."
  };
  
  useEffect(() => {
    if (!data) {
      setMissionData(fallbackData);
    }
  }, [data]);
  
  if (!missionData) {
    return null;
  }
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {language === 'fr' ? missionData.title_fr : missionData.title_ar}
            </h2>
            <p className="text-gray-700 mb-6">
              {language === 'fr' ? missionData.description_fr : missionData.description_ar}
            </p>
            <ul className="space-y-4 mb-8">
              {missionData.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#3cb496] flex items-center justify-center text-white font-bold mr-3">✓</div>
                  <div>
                    <span className="font-medium">
                      {language === 'fr' ? point.text_fr : point.text_ar}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/about/mission" className="btn-primary">
              {language === 'fr' ? 'En Savoir Plus' : 'معرفة المزيد'}
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 rounded-lg mb-6 overflow-hidden">
              <div className="relative w-full h-64">
                <Image 
                  src={missionData.image}
                  alt={language === 'fr' ? missionData.image_title_fr : missionData.image_title_ar}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {language === 'fr' ? missionData.image_title_fr : missionData.image_title_ar}
            </h3>
            <p className="text-gray-600">
              {language === 'fr' ? missionData.image_description_fr : missionData.image_description_ar}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 