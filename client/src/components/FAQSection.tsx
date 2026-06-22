import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const faqData = {
  ar: [
    {
      question: 'هل يعمل الاشتراك على جميع الأجهزة؟',
      answer: 'نعم، يعمل على جميع الأجهزة الذكية بما فيها Smart TV و Android و iPhone و iPad و Windows و Mac'
    },
    {
      question: 'كم يستغرق التفعيل؟',
      answer: 'يتم التفعيل خلال وقت قصير جداً بعد الدفع، عادة ما يكون فوري خلال دقائق معدودة'
    },
    {
      question: 'هل تتوفر قنوات رياضية؟',
      answer: 'نعم، تتوفر مجموعة كبيرة جداً من القنوات الرياضية تغطي جميع البطولات والمباريات المهمة'
    },
    {
      question: 'هل يمكن الإلغاء في أي وقت؟',
      answer: 'نعم، يمكنك إلغاء الاشتراك في أي وقت بدون أي التزامات أو رسوم إضافية'
    },
    {
      question: 'هل الخدمة آمنة وموثوقة؟',
      answer: 'نعم، نستخدم أحدث تقنيات التشفير والأمان لحماية بيانات المستخدمين والخصوصية'
    },
    {
      question: 'هل هناك دعم فني متاح؟',
      answer: 'نعم، فريق الدعم الفني متاح 24/7 عبر WhatsApp والبريد الإلكتروني للإجابة على جميع استفساراتك'
    }
  ],
  en: [
    {
      question: 'Does the service work on all devices?',
      answer: 'Yes, it works on all major devices including Smart TV, Android, iPhone, iPad, Windows, and Mac'
    },
    {
      question: 'How long does activation take?',
      answer: 'Activation is completed shortly after payment, usually instantly within a few minutes'
    },
    {
      question: 'Are sports channels included?',
      answer: 'Yes, a large selection of sports channels is available covering all major tournaments and matches'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription anytime without any commitments or additional fees'
    },
    {
      question: 'Is the service safe and reliable?',
      answer: 'Yes, we use the latest encryption and security technologies to protect user data and privacy'
    },
    {
      question: 'Is technical support available?',
      answer: 'Yes, our technical support team is available 24/7 via WhatsApp and email to answer all your questions'
    }
  ]
};

const labels = {
  ar: {
    title: 'الأسئلة الشائعة',
    subtitle: 'إجابات على أسئلتك الشائعة'
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to your common questions'
  }
};

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { language, isArabic } = useLanguage();
  const faqList = faqData[language];
  const t = labels[language];

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t.title}</h2>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqList.map((item: any, index: number) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 animate-slide-in-up hover:glow-blue-sm"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white text-left">{item.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-cyan-500/20 bg-white/2 animate-slide-in-down">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 glass-effect-strong p-12 rounded-2xl glow-blue-lg max-w-2xl mx-auto text-center animate-slide-in-up">
          <h3 className="text-2xl font-bold text-white mb-4">
            {isArabic ? 'لم تجد إجابتك؟' : 'Didn\'t find your answer?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {isArabic
              ? 'تواصل معنا عبر WhatsApp وسيكون فريق الدعم الفني جاهز للمساعدة'
              : 'Contact us via WhatsApp and our support team will be ready to help'}
          </p>
          <a
            href="https://wa.me/966580928565"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.14l-.46.264-4.771-.79 1.546 4.35.34.531-.026.605A9.874 9.874 0 005.064 17.55a9.857 9.857 0 004.204.977h.005c5.487 0 9.963-4.476 9.963-9.963 0-2.65-.997-5.147-2.809-7.035A9.835 9.835 0 0012.052 2.002M2.354 1.6h19.236c.412 0 .75.338.75.75v19.236c0 .412-.338.75-.75.75H2.354c-.412 0-.75-.338-.75-.75V2.35c0-.412.338-.75.75-.75" />
            </svg>
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </a>
        </div>
      </div>
    </section>
  );
}
