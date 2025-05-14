'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Mission() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {language === 'fr' ? 'Notre Mission' : 'مهمتنا'}
            </h2>
            <p className="text-gray-700 mb-6">
              {language === 'fr' 
                ? 'La Fondation pour la Promotion des Droits œuvre pour renforcer une culture des droits et autonomiser les groupes vulnérables. À travers nos programmes et initiatives, nous visons à créer un monde où chaque personne peut pleinement jouir de ses droits fondamentaux.'
                : 'تعمل مؤسسة تعزيز الحقوق على تقوية ثقافة الحقوق وتمكين الفئات الضعيفة. من خلال برامجنا ومبادراتنا، نهدف إلى خلق عالم يمكن فيه لكل شخص أن يتمتع بشكل كامل بحقوقه الأساسية.'}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#3cb496] flex items-center justify-center text-white font-bold mr-3">✓</div>
                <div>
                  <span className="font-medium">
                    {language === 'fr' 
                      ? 'Promotion des principes démocratiques et de l\'état de droit'
                      : 'تعزيز المبادئ الديمقراطية وسيادة القانون'}
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#3cb496] flex items-center justify-center text-white font-bold mr-3">✓</div>
                <div>
                  <span className="font-medium">
                    {language === 'fr' 
                      ? 'Protection des droits des populations vulnérables'
                      : 'حماية حقوق الفئات الضعيفة'}
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#3cb496] flex items-center justify-center text-white font-bold mr-3">✓</div>
                <div>
                  <span className="font-medium">
                    {language === 'fr' 
                      ? 'Éducation et sensibilisation aux droits'
                      : 'التعليم والتوعية بالحقوق'}
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#3cb496] flex items-center justify-center text-white font-bold mr-3">✓</div>
                <div>
                  <span className="font-medium">
                    {language === 'fr' 
                      ? 'Renforcement des capacités de la société civile'
                      : 'تعزيز قدرات المجتمع المدني'}
                  </span>
                </div>
              </li>
            </ul>
            <Link href="/about/mission" className="btn-primary">
              {language === 'fr' ? 'En Savoir Plus' : 'معرفة المزيد'}
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 rounded-lg mb-6 overflow-hidden">
              {/* Image instead of placeholder */}
              <div className="relative w-full h-64">
                <Image 
                  src="/images/droits-egaux.jpg"
                  alt={language === 'fr' ? "Droits Égaux" : "حقوق متساوية"}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {language === 'fr' ? 'Droits Égaux' : 'حقوق متساوية'}
            </h3>
            <p className="text-gray-600">
              {language === 'fr' 
                ? 'Nous croyons que le respect des droits humains est essentiel au développement de sociétés justes et pacifiques. Notre travail se concentre sur la garantie que ces droits soient connus, reconnus et défendus.'
                : 'نؤمن بأن احترام حقوق الإنسان أمر ضروري لتطوير مجتمعات عادلة وسلمية. يركز عملنا على ضمان أن تكون هذه الحقوق معروفة ومعترف بها ومدافع عنها.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 