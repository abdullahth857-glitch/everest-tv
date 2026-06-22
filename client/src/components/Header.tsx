import { useState } from 'react';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Language {
  code: 'ar' | 'en';
  name: string;
}

const languages: Language[] = [
  { code: 'ar', name: 'العربية' },
  { code: 'en', name: 'English' }
];

const navItems = {
  ar: [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المميزات', href: '#features' },
    { label: 'الأسعار', href: '#pricing' },
    { label: 'الأجهزة', href: '#devices' },
    { label: 'الأسئلة الشائعة', href: '#faq' }
  ],
  en: [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Devices', href: '#devices' },
    { label: 'FAQ', href: '#faq' }
  ]
};

const whatsappLink = 'https://wa.me/966580928565';

export default function Header() {
  const { language, setLanguage, isArabic } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect-strong border-b border-cyan-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663785056289/FZ5YPTFTNxwkbNdbv6HUro/everest-logo-icon-RDhsrTk47w3tY9cdtNCgqw.webp"
            alt="Everest TV"
            className="h-10 w-10 glow-blue-sm"
          />
          <span className="text-xl font-bold gradient-text hidden sm:inline">Everest TV</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems[language].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 glass-effect px-3 py-2 rounded-lg">
            <Globe size={16} className="text-cyan-400" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'ar' | 'en')}
              className="bg-transparent text-sm font-medium text-gray-300 cursor-pointer focus:outline-none"
            >
              <option value="ar" className="bg-gray-900">العربية</option>
              <option value="en" className="bg-gray-900">English</option>
            </select>
          </div>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all duration-300"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">{isArabic ? 'واتساب' : 'WhatsApp'}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-cyan-500/20 animate-slide-in-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems[language].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.href);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all duration-300"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-medium">{isArabic ? 'واتساب' : 'WhatsApp'}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
