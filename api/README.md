# تشغيل المساعد الذكي على الدومين بتاعك

المزايا دي محتاجة الخطوة دي عشان تشتغل: المساعد الذكي (الشات)، وتصحيح الكتابة والكلام في الامتحانات، وترجمة الصور، والبحث الذكي في القاموس.
من غيرها الموقع كله شغال عادي، والمزايا دي بس بتظهر إنها "لسه مش متفعّلة".

## ليه محتاجين Worker؟
مفتاح Claude API سري. لو حطيناه جوه الموقع أي حد يقدر يسرقه ويصرف على حسابك.
الـ Worker سيرفر صغير مجاني على Cloudflare، شايل المفتاح وبيوصّل طلبات الطلاب لـ Claude.

## الخطوات
1. اعمل حساب على console.anthropic.com، واشحن رصيد، وطلّع API key.
2. اعمل حساب مجاني على cloudflare.com، وروح Workers & Pages ← Create ← Worker.
3. امسح الكود الموجود وحط مكانه محتوى ملف worker.js، ودوس Deploy.
4. من Settings ← Variables:
   - أضف Secret اسمه ANTHROPIC_API_KEY وحط فيه المفتاح.
   - أضف Variable اسمه ALLOWED_ORIGIN وحط فيه رابط موقعك بالظبط، مثلًا https://almani.com (من غير / في الآخر).
5. انسخ رابط الـ Worker (شكله https://اسم-الworker.اسمك.workers.dev).
6. افتح ملف config.js في الموقع، وحط الرابط بين علامتي التنصيص:
   const AI_ENDPOINT="https://اسم-الworker.اسمك.workers.dev";
7. ارفع config.js تاني على الاستضافة.

## التكلفة والحماية
- Cloudflare Workers مجاني لحد 100,000 طلب في اليوم.
- Claude API بيتحاسب على الاستخدام. حط حد شهري للصرف من console.anthropic.com ← Limits.
- الـ Worker بيرفض أي طلب مش جاي من موقعك، وبيحدد 20 طلب في الدقيقة لكل طالب، و1500 token لكل رد.
- لحماية أقوى: فعّل Rate Limiting Rules من لوحة Cloudflare على رابط الـ Worker.
