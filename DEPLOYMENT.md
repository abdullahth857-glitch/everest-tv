# دليل النشر | Deployment Guide

## 🚀 خيارات النشر | Deployment Options

### 1. نشر على Manus (موصى به) | Deploy on Manus (Recommended)

Manus توفر نشراً مدمجاً وسهلاً مع دعم كامل للمشروع:

**الخطوات:**
1. انتقل إلى لوحة تحكم Manus
2. اضغط على زر "Publish" في الزاوية العلوية اليمنى
3. اختر نطاقاً مخصصاً أو استخدم النطاق الافتراضي
4. اضغط "Publish" وانتظر النشر

**المميزات:**
- ✅ نشر فوري بدون تكوين معقد
- ✅ دعم النطاقات المخصصة
- ✅ SSL/HTTPS مدمج
- ✅ CDN عالمي
- ✅ دعم فني 24/7

---

### 2. نشر على Vercel

**المتطلبات:**
- حساب Vercel (مجاني)
- GitHub متصل

**الخطوات:**
1. انتقل إلى [vercel.com](https://vercel.com)
2. اضغط "New Project"
3. اختر مستودع GitHub الخاص بك
4. اضغط "Import"
5. انتظر النشر الآلي

**التكوين:**
```
Build Command: pnpm build
Output Directory: dist
Install Command: pnpm install
```

---

### 3. نشر على Netlify

**المتطلبات:**
- حساب Netlify (مجاني)
- GitHub متصل

**الخطوات:**
1. انتقل إلى [netlify.com](https://netlify.com)
2. اضغط "Add new site" > "Import an existing project"
3. اختر GitHub
4. اختر المستودع الخاص بك
5. انتظر النشر الآلي

**التكوين:**
```
Build command: pnpm build
Publish directory: dist
```

---

### 4. نشر على Railway

**المتطلبات:**
- حساب Railway
- GitHub متصل

**الخطوات:**
1. انتقل إلى [railway.app](https://railway.app)
2. اضغط "New Project"
3. اختر "Deploy from GitHub repo"
4. اختر المستودع الخاص بك
5. انتظر النشر

---

### 5. نشر على خادم خاص (VPS)

**المتطلبات:**
- خادم Linux (Ubuntu 20.04+)
- Node.js 22.x
- pnpm
- Nginx أو Apache
- PM2 (للعمليات الخلفية)

**خطوات التثبيت:**

```bash
# 1. تحديث النظام
sudo apt update && sudo apt upgrade -y

# 2. تثبيت Node.js
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# 3. تثبيت pnpm
npm install -g pnpm

# 4. استنساخ المستودع
cd /var/www
git clone https://github.com/abdullahth857-glitch/everest-tv.git
cd everest-tv

# 5. تثبيت المتطلبات
pnpm install

# 6. البناء
pnpm build

# 7. تثبيت PM2
npm install -g pm2

# 8. بدء التطبيق
pm2 start "pnpm preview" --name "everest-tv"
pm2 startup
pm2 save

# 9. تكوين Nginx
sudo nano /etc/nginx/sites-available/everest-tv
```

**تكوين Nginx:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:4173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# تفعيل الموقع
sudo ln -s /etc/nginx/sites-available/everest-tv /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# إضافة SSL مع Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔄 النشر المستمر | Continuous Deployment

### GitHub Actions

تم تكوين GitHub Actions للنشر الآلي:

```yaml
# .github/workflows/deploy.yml
- يتم تشغيل الفحوصات تلقائياً عند كل push
- يتم بناء المشروع تلقائياً
- يتم التحقق من الأخطاء تلقائياً
```

---

## ✅ قائمة التحقق قبل النشر | Pre-Deployment Checklist

- [ ] جميع الاختبارات تمر بنجاح
- [ ] لا توجد أخطاء TypeScript
- [ ] الأداء محسّن (Lighthouse 90+)
- [ ] جميع الروابط تعمل بشكل صحيح
- [ ] اللغات (العربية والإنجليزية) تعمل بشكل صحيح
- [ ] الموقع يعمل على جميع الأجهزة
- [ ] الصور محملة بشكل صحيح
- [ ] لا توجد أخطاء في وحدة التحكم
- [ ] البيانات الحساسة لم تُكشف
- [ ] ملف robots.txt موجود
- [ ] Sitemap موجود

---

## 🔍 اختبار ما بعد النشر | Post-Deployment Testing

```bash
# 1. اختبار الأداء
curl -I https://your-domain.com

# 2. اختبار SSL
openssl s_client -connect your-domain.com:443

# 3. اختبار الاستجابة
curl https://your-domain.com | grep "EVEREST TV"

# 4. اختبار الأجهزة المختلفة
# استخدم Chrome DevTools للاختبار على أجهزة مختلفة
```

---

## 🚨 استكشاف الأخطاء | Troubleshooting

### المشكلة: الموقع لا يحمل
**الحل:**
```bash
# تحقق من حالة الخادم
pm2 status

# عرض السجلات
pm2 logs everest-tv

# أعد تشغيل الخادم
pm2 restart everest-tv
```

### المشكلة: الصور لا تظهر
**الحل:**
- تحقق من روابط الصور في الكود
- تأكد من أن CDN يعمل بشكل صحيح
- تحقق من سياسة CORS

### المشكلة: الموقع بطيء
**الحل:**
```bash
# تحقق من استخدام الموارد
top

# قم بتحسين الأداء
pnpm build --report

# استخدم CDN للملفات الثابتة
```

---

## 📊 المراقبة | Monitoring

### أدوات المراقبة الموصى بها:
1. **Uptime Robot**: مراقبة توفر الموقع
2. **Google Analytics**: تحليل الزوار
3. **Sentry**: تتبع الأخطاء
4. **New Relic**: مراقبة الأداء

### إضافة Google Analytics:
```html
<!-- في client/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🔐 الأمان | Security

### نصائح الأمان:
1. ✅ استخدم HTTPS دائماً
2. ✅ قم بتحديث المتطلبات بانتظام
3. ✅ استخدم متغيرات البيئة للبيانات الحساسة
4. ✅ فعّل CORS بشكل صحيح
5. ✅ استخدم CSP (Content Security Policy)
6. ✅ قم بنسخ احتياطية منتظمة

### ملف .env:
```
# لا تضع بيانات حساسة في الكود
# استخدم متغيرات البيئة بدلاً من ذلك
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-key-here
```

---

## 📞 الدعم | Support

للمساعدة في النشر:
- 📧 البريد الإلكتروني: support@everesttv.com
- 💬 WhatsApp: https://wa.me/966580928565
- 📖 الوثائق: [Manus Docs](https://docs.manus.im)

---

**آخر تحديث**: 2026-06-22
