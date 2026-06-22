import { MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const footerContent = {
  ar: {
    copyright: 'Everest TV © 2026 جميع الحقوق محفوظة',
    quickLinks: 'روابط سريعة',
    contact: 'تواصل معنا',
    legal: 'قانوني',
    home: 'الرئيسية',
    features: 'المميزات',
    pricing: 'الأسعار',
    devices: 'الأجهزة',
    faq: 'الأسئلة الشائعة',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    contact_us: 'اتصل بنا'
  },
  en: {
    copyright: 'Everest TV © 2026 All Rights Reserved',
    quickLinks: 'Quick Links',
    contact: 'Contact Us',
    legal: 'Legal',
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    devices: 'Devices',
    faq: 'FAQ',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact_us: 'Contact Us'
  }
};

const whatsappLink = 'https://wa.me/966580928565';

export default function Footer() {
  const { language, isArabic } = useLanguage();
  const t = footerContent[language];

  return (
    <footer className="relative bg-black/50 border-t border-cyan-500/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663785056289/FZ5YPTFTNxwkbNdbv6HUro/everest-logo-icon-RDhsrTk47w3tY9cdtNCgqw.webp"
                alt="Everest TV"
                className="h-8 w-8 glow-blue-sm"
              />
              <span className="text-xl font-bold gradient-text">Everest TV</span>
            </div>
            <p className="text-gray-400 text-sm">
              {isArabic
                ? 'منصة بث فاخرة توفر أكثر من 10,000 قناة مباشرة بجودة عالية'
                : 'Premium streaming platform offering over 10,000 live channels in high quality'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {['home', 'features', 'pricing', 'devices', 'faq'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {t[item as keyof typeof t]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {t.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {t.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">{t.contact}</h4>
            <div className="space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="mailto:support@everesttv.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">{t.copyright}</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all duration-300"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 glass-effect p-4 rounded-lg text-center text-sm text-gray-400">
          <p>
            {isArabic
              ? '⚠️ هذا الموقع للأغراض التعليمية فقط. جميع الحقوق محفوظة لأصحابها.'
              : '⚠️ This website is for educational purposes only. All rights reserved to their owners.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
