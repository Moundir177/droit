'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  // Classes for RTL/LTR layout
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'flex-row-reverse' : 'flex-row';
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className={`space-y-4 ${textAlign}`}>
            <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse justify-end' : 'flex-row'} space-x-2`}>
              <div className="relative h-10 w-10 flex items-center justify-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Foundation Logo" 
                  width={80} 
                  height={80} 
                  className="object-contain absolute"
                />
              </div>
              <div className={language === 'ar' ? 'mr-2' : 'ml-2'}>
                <div className="font-bold text-lg leading-tight">
                  {language === 'fr' ? 'Fondation' : 'مؤسسة'}
                </div>
                <div className="text-sm leading-tight">
                  {language === 'fr' ? 'Pour la Promotion des Droits' : 'لتعزيز الحقوق'}
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              {language === 'fr' 
                ? 'Ensemble, pour des droits connus, reconnus et défendus.' 
                : 'معاً، من أجل حقوق معروفة، معترف بها ومدافع عنها.'}
            </p>
            <div className="pt-2">
              <p className="text-gray-300 text-sm">
                {language === 'fr' ? 'Alger, Algérie' : 'الجزائر العاصمة، الجزائر'}
              </p>
              <p className="text-gray-300 text-sm">info@fpra-droits.org</p>
              <p className="text-gray-300 text-sm">+213 21 00 00 00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={textAlign}>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'fr' ? 'Liens Rapides' : 'روابط سريعة'}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('home')}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('about')}</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('programs')}</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('news')}</Link></li>
              <li><Link href="/review" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('review')}</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className={textAlign}>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'fr' ? 'Informations' : 'معلومات'}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/resources" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('resources')}</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('testimonials')}</Link></li>
              <li><Link href="/civil-society" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('civil-society')}</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('gallery')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#8FD694] text-sm">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={textAlign}>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'fr' 
                ? 'Abonnez-vous à notre newsletter' 
                : 'اشترك في نشرتنا الإخبارية'}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {language === 'fr'
                ? 'Recevez les dernières actualités, publications et événements directement dans votre boîte mail.'
                : 'احصل على آخر الأخبار والمنشورات والفعاليات مباشرة في بريدك الإلكتروني.'}
            </p>
            <form className="space-y-2">
              <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <input
                  type="email"
                  placeholder={language === 'fr' ? 'Votre email' : 'بريدك الإلكتروني'}
                  className={`px-4 py-2 w-full text-gray-900 focus:outline-none text-sm ${language === 'ar' ? 'rounded-r-full text-right' : 'rounded-l-full'}`}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
                <button
                  type="submit"
                  className={`bg-[#8FD694] px-4 py-2 hover:bg-opacity-90 transition-all ${language === 'ar' ? 'rounded-l-full' : 'rounded-r-full'}`}
                >
                  {language === 'fr' ? 'S\'abonner' : 'اشترك'}
                </button>
              </div>
              <p className="text-xs text-gray-400">
                {language === 'fr'
                  ? 'En vous abonnant, vous acceptez de recevoir nos emails. Vous pouvez vous désabonner à tout moment.'
                  : 'بالاشتراك، أنت توافق على تلقي رسائلنا الإلكترونية. يمكنك إلغاء الاشتراك في أي وقت.'}
              </p>
            </form>
          </div>
        </div>

        {/* Social media and copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className={`flex flex-col md:flex-row ${language === 'ar' ? 'md:flex-row-reverse' : ''} justify-between items-center`}>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-[#8FD694]">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8FD694]">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8FD694]">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8FD694]">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8FD694]">
                <FaYoutube size={20} />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {language === 'fr' ? 'Fondation pour la Promotion des Droits' : 'مؤسسة تعزيز الحقوق'}. 
              {language === 'fr' ? ' Tous droits réservés.' : ' جميع الحقوق محفوظة.'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 