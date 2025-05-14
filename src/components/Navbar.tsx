'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('programs'), href: '/programs' },
    { name: t('news'), href: '/news' },
    { name: t('review'), href: '/review' },
    { name: t('resources'), href: '/resources' },
    { name: t('testimonials'), href: '/testimonials' },
    { name: t('collaborations-ong'), href: '/collaborations-ong' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('contact'), href: '/contact' },
  ];

  // Classes to handle RTL/LTR layout
  const textAlignment = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'flex-row-reverse' : 'flex-row';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className={`flex justify-between items-center py-2 ${flexDirection}`}>
          {/* Logo */}
          <Link href="/" className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} space-x-2`}>
            <div className="relative h-10 w-10 flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="Foundation Logo" 
                width={80} 
                height={80} 
                className="object-contain absolute transform -translate-y-1"
              />
            </div>
            <div className={`font-poppins ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
              <div className="font-bold text-lg leading-tight">
                {language === 'fr' ? 'Fondation' : 'مؤسسة'}
              </div>
              <div className="text-sm leading-tight">
                {language === 'fr' ? 'Pour la Promotion des Droits' : 'لتعزيز الحقوق'}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Navigation Items */}
            <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="px-1 py-2 text-sm font-medium text-gray-700 hover:text-[#8FD694]"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Language Switcher */}
            <LanguageSwitcher 
              currentLanguage={language} 
              onChange={setLanguage} 
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <LanguageSwitcher 
              currentLanguage={language} 
              onChange={setLanguage} 
            />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#8FD694] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } lg:hidden bg-white shadow-md`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 ${textAlignment}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#8FD694]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 