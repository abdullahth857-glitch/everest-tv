import { Tv, Monitor, Smartphone, Tablet, Apple, Laptop } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const devices = {
  ar: [
    { icon: Tv, name: 'Smart TV', desc: 'تطبيق مخصص' },
    { icon: Monitor, name: 'Android TV', desc: 'متوافق تماماً' },
    { icon: Smartphone, name: 'هواتف Android', desc: 'تطبيق سلس' },
    { icon: Apple, name: 'iPhone و iPad', desc: 'تطبيق iOS' },
    { icon: Laptop, name: 'Windows PC', desc: 'تطبيق سطح المكتب' },
    { icon: Apple, name: 'Mac', desc: 'تطبيق macOS' }
  ],
  en: [
    { icon: Tv, name: 'Smart TV', desc: 'Dedicated app' },
    { icon: Monitor, name: 'Android TV', desc: 'Fully compatible' },
    { icon: Smartphone, name: 'Android Phones', desc: 'Smooth app' },
    { icon: Apple, name: 'iPhone & iPad', desc: 'iOS app' },
    { icon: Laptop, name: 'Windows PC', desc: 'Desktop app' },
    { icon: Apple, name: 'Mac', desc: 'macOS app' }
  ]
};

const labels = {
  ar: {
    title: 'متوافق مع جميع الأجهزة',
    subtitle: 'اختر جهازك المفضل واستمتع بالبث المباشر'
  },
  en: {
    title: 'Works on All Devices',
    subtitle: 'Choose your favorite device and enjoy streaming'
  }
};

export default function DevicesSection() {
  const { language, isArabic } = useLanguage();
  const deviceList = devices[language];
  const t = labels[language];

  return (
    <section id="devices" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663785056289/FZ5YPTFTNxwkbNdbv6HUro/devices-section-bg-AjSuVAZybuPse2GDc9zz5n.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t.title}</h2>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {deviceList.map((device: any, index: number) => {
            const Icon = device.icon;
            return (
              <div
                key={index}
                className="glass-effect-strong p-6 rounded-2xl text-center hover:glow-blue transition-all duration-300 hover:scale-110 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{device.name}</h3>
                <p className="text-sm text-gray-400">{device.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Download Section */}
        <div className="mt-20 glass-effect-strong p-12 rounded-2xl glow-blue-lg max-w-4xl mx-auto text-center animate-slide-in-up">
          <h3 className="text-3xl font-bold text-white mb-4">
            {isArabic ? 'ابدأ الآن' : 'Get Started Now'}
          </h3>
          <p className="text-gray-300 mb-8">
            {isArabic
              ? 'حمّل التطبيق على جهازك واستمتع بأكثر من 10,000 قناة مباشرة'
              : 'Download the app on your device and enjoy over 10,000 live channels'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium">
              {isArabic ? 'حمّل من App Store' : 'Download from App Store'}
            </button>
            <button className="btn-outline-premium">
              {isArabic ? 'حمّل من Google Play' : 'Download from Google Play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
