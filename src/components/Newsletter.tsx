'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Newsletter() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    news: true,
    events: false,
    publications: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError(language === 'fr' ? 'Veuillez entrer votre adresse e-mail' : 'الرجاء إدخال عنوان بريدك الإلكتروني');
      return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError(language === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'الرجاء إدخال عنوان بريد إلكتروني صالح');
      return;
    }
    
    // In a real application, you would send this data to your backend
    console.log('Subscription data:', { email, preferences: selectedOptions });
    
    setSubscribed(true);
    setError('');
  };

  const handleOptionChange = (option: keyof typeof selectedOptions) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#8FD694] to-[#6ab77f] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-10 -left-10"></div>
        <div className="absolute w-60 h-60 bg-white/10 rounded-full -bottom-20 -right-20"></div>
        <div className="absolute w-20 h-20 bg-white/10 rounded-full top-1/4 right-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl font-bold text-[#171717] mb-4"
            >
              {language === 'fr' ? 'Restez Informé' : 'ابق على اطلاع'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#171717]/80 text-lg mb-8 max-w-xl mx-auto"
            >
              {language === 'fr' 
                ? 'Recevez nos derniers articles et événements directement dans votre boîte mail' 
                : 'احصل على آخر مقالاتنا وفعالياتنا مباشرة في بريدك الإلكتروني'}
            </motion.p>
          </div>
          
          {subscribed ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#8FD694]"
            >
              <div className="text-[#8FD694] text-6xl mb-6">✓</div>
              <h3 className="text-2xl font-semibold mb-3 text-[#171717]">
                {language === 'fr' ? 'Merci de vous être abonné !' : 'شكرا لاشتراكك!'}
              </h3>
              <p className="text-gray-600 text-lg">
                {language === 'fr' 
                  ? 'Vous recevrez désormais des mises à jour selon vos préférences.' 
                  : 'ستتلقى الآن تحديثات بناءً على تفضيلاتك.'}
              </p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#8FD694]"
            >
              <div className="mb-6">
                <label htmlFor="email" className="block text-left text-[#171717] text-base font-medium mb-2">
                  {language === 'fr' ? 'Adresse E-mail' : 'عنوان البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8FD694] focus:border-transparent transition-all"
                  placeholder={language === 'fr' ? 'Votre adresse e-mail' : 'عنوان بريدك الإلكتروني'}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
                {error && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-2 text-left"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
              
              <div className="mb-8">
                <p className="text-left text-[#171717] text-base font-medium mb-3">
                  {language === 'fr' 
                    ? 'Je souhaite recevoir :' 
                    : 'أرغب في استلام:'}
                </p>
                <div className="flex flex-wrap gap-6">
                  <label className="inline-flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedOptions.news}
                      onChange={() => handleOptionChange('news')}
                      className="form-checkbox h-5 w-5 text-[#8FD694] border-2 border-gray-300 rounded focus:ring-[#8FD694]"
                    />
                    <span className="ml-2 text-gray-700 group-hover:text-[#171717] transition-colors">
                      {language === 'fr' ? 'Actualités' : 'أخبار'}
                    </span>
                  </label>
                  <label className="inline-flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedOptions.events}
                      onChange={() => handleOptionChange('events')}
                      className="form-checkbox h-5 w-5 text-[#8FD694] border-2 border-gray-300 rounded focus:ring-[#8FD694]"
                    />
                    <span className="ml-2 text-gray-700 group-hover:text-[#171717] transition-colors">
                      {language === 'fr' ? 'Événements' : 'فعاليات'}
                    </span>
                  </label>
                  <label className="inline-flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedOptions.publications}
                      onChange={() => handleOptionChange('publications')}
                      className="form-checkbox h-5 w-5 text-[#8FD694] border-2 border-gray-300 rounded focus:ring-[#8FD694]"
                    />
                    <span className="ml-2 text-gray-700 group-hover:text-[#171717] transition-colors">
                      {language === 'fr' ? 'Publications' : 'منشورات'}
                    </span>
                  </label>
                </div>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#8FD694] text-[#171717] font-semibold py-3 px-4 rounded-lg hover:bg-[#7ac683] transition-all shadow-md"
              >
                {language === 'fr' ? 'S\'abonner' : 'اشترك'}
              </motion.button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                {language === 'fr'
                  ? 'En vous abonnant, vous acceptez de recevoir nos emails. Vous pouvez vous désabonner à tout moment.'
                  : 'بالاشتراك، أنت توافق على تلقي رسائلنا الإلكترونية. يمكنك إلغاء الاشتراك في أي وقت.'}
              </p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
} 