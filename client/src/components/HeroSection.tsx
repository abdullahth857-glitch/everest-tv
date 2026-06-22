import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const whatsappLink = 'https://wa.me/966580928565';

const content = {
  ar: {
    title: 'EVEREST TV',
    subtitle: 'ارتقِ بتجربة المشاهدة إلى القمة مع Everest TV واستمتع بأكثر من 10,000 قناة عربية وعالمية بجودة HD و FHD و 4K و HDR مع بث مستقر ودعم فني متواصل.',
    subscribe: 'اشترك الآن',
    whatsapp: 'واتساب'
  },
  en: {
    title: 'EVEREST TV',
    subtitle: 'Take your entertainment to the next level with Everest TV and enjoy over 10,000 live channels in HD, FHD, 4K and HDR quality with stable streaming and fast support.',
    subscribe: 'Subscribe Now',
    whatsapp: 'WhatsApp'
  }
};

export default function HeroSection() {
  const { language, isArabic } = useLanguage();
  const t = content[language];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663785056289/FZ5YPTFTNxwkbNdbv6HUro/hero-background-9DsVcVecrjBBvPL2xdjaGu.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663785056289/FZ5YPTFTNxwkbNdbv6HUro/everest-logo_f74f0409.jpg"
              alt="Everest TV Logo"
              className="h-32 md:h-40 object-contain animate-float"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-slide-in-up stagger-1">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-slide-in-up stagger-2">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-in-up stagger-3 ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
            {/* Subscribe Button */}
            <button className="btn-premium">
              {t.subscribe}
            </button>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-premium flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {t.whatsapp}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 animate-slide-in-up stagger-4">
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-gray-400 mt-2">{isArabic ? 'قناة مباشرة' : 'Live Channels'}</div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold gradient-text">4K</div>
              <div className="text-sm text-gray-400 mt-2">{isArabic ? 'جودة عالية' : 'Ultra HD'}</div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-gray-400 mt-2">{isArabic ? 'دعم فني' : 'Support'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-cyan-400">
          <span className="text-sm">{isArabic ? 'اسحب للأسفل' : 'Scroll Down'}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
