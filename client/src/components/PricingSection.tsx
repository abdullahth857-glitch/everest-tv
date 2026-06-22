import { Check, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const whatsappLink = 'https://wa.me/966580928565';

const pricingPlans = {
  ar: [
    {
      duration: '3 أشهر',
      price: '100',
      currency: 'ر.س',
      popular: false,
      features: [
        '10,000+ قناة',
        'جودة 4K و HDR',
        'أفلام وسلاسل',
        'قنوات رياضية',
        'دعم فني',
        'تفعيل سريع'
      ]
    },
    {
      duration: '6 أشهر',
      price: '150',
      currency: 'ر.س',
      popular: true,
      features: [
        '10,000+ قناة',
        'جودة 4K و HDR',
        'أفلام وسلاسل',
        'قنوات رياضية',
        'دعم فني',
        'تفعيل سريع'
      ]
    },
    {
      duration: '12 شهر',
      price: '250',
      currency: 'ر.س',
      popular: false,
      features: [
        '10,000+ قناة',
        'جودة 4K و HDR',
        'أفلام وسلاسل',
        'قنوات رياضية',
        'دعم فني',
        'تفعيل سريع'
      ]
    }
  ],
  en: [
    {
      duration: '3 Months',
      price: '100',
      currency: 'SAR',
      popular: false,
      features: [
        '10,000+ Channels',
        '4K & HDR Quality',
        'Movies & Series',
        'Sports Channels',
        'Technical Support',
        'Fast Activation'
      ]
    },
    {
      duration: '6 Months',
      price: '150',
      currency: 'SAR',
      popular: true,
      features: [
        '10,000+ Channels',
        '4K & HDR Quality',
        'Movies & Series',
        'Sports Channels',
        'Technical Support',
        'Fast Activation'
      ]
    },
    {
      duration: '12 Months',
      price: '250',
      currency: 'SAR',
      popular: false,
      features: [
        '10,000+ Channels',
        '4K & HDR Quality',
        'Movies & Series',
        'Sports Channels',
        'Technical Support',
        'Fast Activation'
      ]
    }
  ]
};

const labels = {
  ar: {
    title: 'خطط الاشتراك',
    subtitle: 'اختر الخطة المناسبة لك',
    popular: 'الأكثر شيوعاً',
    subscribe: 'اشترك عبر واتساب'
  },
  en: {
    title: 'Subscription Plans',
    subtitle: 'Choose the perfect plan for you',
    popular: 'Most Popular',
    subscribe: 'Subscribe via WhatsApp'
  }
};

export default function PricingSection() {
  const { language, isArabic } = useLanguage();
  const plans = pricingPlans[language];
  const t = labels[language];

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663785056289/FZ5YPTFTNxwkbNdbv6HUro/pricing-section-bg-FLzLdZ5fBJygkbuKnpmS9W.webp)',
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan: any, index: number) => (
              <div
                key={index}
                className={`relative rounded-2xl transition-all duration-300 animate-slide-in-up interactive-card ${
                  plan.popular
                    ? 'glass-effect-strong glow-blue-lg scale-105 md:scale-110 border-2 border-cyan-500/50'
                    : 'glass-effect hover:glow-blue hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {t.popular}
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Duration */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.duration}</h3>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.currency}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check size={20} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  <MessageCircle size={18} />
                  {t.subscribe}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center glass-effect p-8 rounded-2xl max-w-2xl mx-auto animate-slide-in-up">
          <p className="text-gray-300">
            {isArabic
              ? '✓ جميع الخطط تشمل نفس المميزات والقنوات\n✓ يمكنك الإلغاء في أي وقت\n✓ تفعيل فوري بعد الدفع'
              : '✓ All plans include the same features and channels\n✓ Cancel anytime\n✓ Instant activation after payment'}
          </p>
        </div>
      </div>
    </section>
  );
}
