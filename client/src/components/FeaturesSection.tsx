import { Tv, Zap, Smartphone, Wifi, Headphones, Gauge } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = {
  ar: [
    { icon: Tv, title: '+10,000 قناة مباشرة', desc: 'أكثر من 10,000 قناة عربية وعالمية' },
    { icon: Zap, title: 'جودة عالية', desc: 'HD / FHD / 4K / HDR' },
    { icon: Smartphone, title: 'قنوات رياضية', desc: 'جميع البطولات والمباريات المهمة' },
    { icon: Wifi, title: 'أفلام وسلاسل', desc: 'مكتبة ضخمة من الأفلام والمسلسلات' },
    { icon: Headphones, title: 'محتوى عربي وعالمي', desc: 'تنوع كبير في المحتوى' },
    { icon: Gauge, title: 'دعم فني متواصل', desc: 'فريق دعم متاح 24/7' }
  ],
  en: [
    { icon: Tv, title: '+10,000 Live Channels', desc: 'Arabic and international channels' },
    { icon: Zap, title: 'Premium Quality', desc: 'HD / FHD / 4K / HDR' },
    { icon: Smartphone, title: 'Sports Channels', desc: 'All major tournaments and matches' },
    { icon: Wifi, title: 'Movies & Series', desc: 'Huge library of content' },
    { icon: Headphones, title: 'Global Content', desc: 'Arabic and international variety' },
    { icon: Gauge, title: 'Technical Support', desc: '24/7 support team available' }
  ]
};

const deviceFeatures = {
  ar: [
    'يعمل على جميع الأجهزة الذكية',
    'دعم Android',
    'دعم iPhone',
    'دعم Tablet',
    'دعم PC',
    'تفعيل سريع'
  ],
  en: [
    'Works on Smart TV',
    'Android Support',
    'iPhone Support',
    'Tablet Support',
    'PC Support',
    'Fast Activation'
  ]
};

export default function FeaturesSection() {
  const { language, isArabic } = useLanguage();
  const featureList = features[language];
  const devices = deviceFeatures[language];

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663785056289/FZ5YPTFTNxwkbNdbv6HUro/features-section-bg-BvftsaNNkK6xWNbZeGP5qm.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {isArabic ? 'المميزات الرئيسية' : 'Key Features'}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {isArabic
              ? 'استمتع بمجموعة شاملة من المميزات التي تجعل تجربتك مميزة'
              : 'Enjoy a comprehensive set of features that make your experience exceptional'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featureList.map((feature: any, index: number) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-effect-strong p-8 rounded-2xl hover:glow-blue transition-all duration-300 hover:scale-105 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Device Compatibility */}
        <div className="glass-effect-strong p-12 rounded-2xl glow-blue-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {isArabic ? 'متوافق مع جميع الأجهزة' : 'Compatible with All Devices'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {devices.map((device, index) => (
              <div
                key={index}
                className="glass-effect p-4 rounded-lg text-center hover:bg-cyan-500/10 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-sm font-medium text-cyan-400">{device}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
