const LEVELS=[
{id:"A1.1",title:"أول خطوة: التعارف والبيت والعيلة",
words:[
["m","Mann","رجل","مان","Der Mann ist groß.","الرجل طويل."],
["f","Frau","امرأة / سيدة","فراو","Die Frau heißt Anna.","السيدة اسمها آنا."],
["n","Kind","طفل","كيند","Das Kind spielt im Garten.","الطفل يلعب في الحديقة."],
["m","Vater","أب","فاتر","Mein Vater arbeitet viel.","أبي يعمل كثيرًا."],
["f","Mutter","أم","موتر","Meine Mutter kocht gern.","أمي تحب الطبخ."],
["m","Bruder","أخ","برودر","Ich habe einen Bruder.","عندي أخ."],
["f","Schwester","أخت","شفستر","Meine Schwester ist zehn Jahre alt.","أختي عمرها عشر سنوات."],
["n","Haus","بيت","هاوس","Das Haus ist neu.","البيت جديد."],
["f","Wohnung","شقة","فونونج","Die Wohnung hat drei Zimmer.","الشقة فيها ثلاث غرف."],
["n","Zimmer","غرفة","تسيمر","Das Zimmer ist klein.","الغرفة صغيرة."],
["m","Tisch","طاولة / ترابيزة","تيش","Der Tisch ist aus Holz.","الطاولة من الخشب."],
["m","Stuhl","كرسي","شتول","Der Stuhl ist bequem.","الكرسي مريح."],
["n","Buch","كتاب","بوخ","Ich lese ein Buch.","أنا أقرأ كتابًا."],
["f","Schule","مدرسة","شوله","Die Schule beginnt um acht.","المدرسة تبدأ الساعة الثامنة."],
["m","Lehrer","مدرّس","ليرر","Der Lehrer erklärt die Regel.","المدرس يشرح القاعدة."],
["n","Wasser","ماء / مية","فاسر","Ich trinke Wasser.","أنا أشرب ماء."],
["n","Brot","خبز / عيش","بروت","Das Brot ist frisch.","الخبز طازج."],
["m","Kaffee","قهوة","كافيه","Der Kaffee ist heiß.","القهوة ساخنة."],
["f","Milch","حليب / لبن","ميلش","Die Milch ist kalt.","الحليب بارد."],
["m","Name","اسم","نامه","Wie ist Ihr Name?","ما اسم حضرتك؟"],
["n","Land","بلد","لاند","Aus welchem Land kommst du?","من أي بلد أنت؟"],
["f","Stadt","مدينة","شتات","Kairo ist eine große Stadt.","القاهرة مدينة كبيرة."],
["","sein","يكون","زاين","Ich bin Student.","أنا طالب."],
["","haben","يملك / عنده","هابن","Ich habe Zeit.","عندي وقت."],
["","heißen","يُسمّى","هايسن","Ich heiße Omar.","اسمي عمر."],
["","kommen","يأتي","كومن","Ich komme aus Ägypten.","أنا من مصر."],
["","wohnen","يسكن","فونن","Wir wohnen in Berlin.","نحن نسكن في برلين."],
["","sprechen","يتكلم","شبريشن","Sprichst du Deutsch?","هل تتكلم الألمانية؟"],
["","lernen","يتعلم","ليرنن","Ich lerne Deutsch.","أنا أتعلم الألمانية."],
["","groß","كبير / طويل","جروس","Das Haus ist groß.","البيت كبير."],
["","klein","صغير","كلاين","Mein Bruder ist klein.","أخي صغير."]],
grammar:[
{t:"الضمائر الشخصية وفعل sein (يكون)",b:`<p>أهم فعل في الألماني. لازم تحفظه مع كل ضمير:</p>
<div class="tw"><table><tr><th>الضمير</th><th>المعنى</th><th>sein</th></tr>
<tr><td><i>ich</i></td><td>أنا</td><td><i>bin</i></td></tr><tr><td><i>du</i></td><td>أنتَ / أنتِ</td><td><i>bist</i></td></tr>
<tr><td><i>er / sie / es</i></td><td>هو / هي / هو لغير العاقل</td><td><i>ist</i></td></tr><tr><td><i>wir</i></td><td>نحن</td><td><i>sind</i></td></tr>
<tr><td><i>ihr</i></td><td>أنتم</td><td><i>seid</i></td></tr><tr><td><i>sie / Sie</i></td><td>هم / حضرتك (رسمي)</td><td><i>sind</i></td></tr></table></div>
<p class="tip"><i>Sie</i> بحرف كبير = حضرتك (للاحترام). <i>sie</i> بحرف صغير = هي أو هم، وتعرف الفرق من الفعل.</p>
<ul class="exl"><li><i>Ich bin Ahmed.</i> — أنا أحمد.</li><li><i>Wir sind müde.</i> — نحن متعبون.</li><li><i>Sind Sie Herr Müller?</i> — هل حضرتك السيد مولر؟</li></ul>`},
{t:"فعل haben (عنده / يملك)",b:`<div class="tw"><table><tr><th>الضمير</th><th>haben</th></tr>
<tr><td><i>ich</i></td><td><i>habe</i></td></tr><tr><td><i>du</i></td><td><i>hast</i></td></tr><tr><td><i>er / sie / es</i></td><td><i>hat</i></td></tr>
<tr><td><i>wir</i></td><td><i>haben</i></td></tr><tr><td><i>ihr</i></td><td><i>habt</i></td></tr><tr><td><i>sie / Sie</i></td><td><i>haben</i></td></tr></table></div>
<ul class="exl"><li><i>Ich habe zwei Kinder.</i> — عندي طفلان.</li><li><i>Hast du Zeit?</i> — عندك وقت؟</li></ul>`},
{t:"تصريف الأفعال في المضارع",b:`<p>تشيل <i>-en</i> من آخر الفعل فيفضل الجذر، وتضيف النهاية حسب الضمير. مثال <i>wohnen</i> ← الجذر <i>wohn</i>:</p>
<div class="tw"><table><tr><th>الضمير</th><th>النهاية</th><th>wohnen</th><th>lernen</th></tr>
<tr><td><i>ich</i></td><td><i>-e</i></td><td><i>wohne</i></td><td><i>lerne</i></td></tr><tr><td><i>du</i></td><td><i>-st</i></td><td><i>wohnst</i></td><td><i>lernst</i></td></tr>
<tr><td><i>er/sie/es</i></td><td><i>-t</i></td><td><i>wohnt</i></td><td><i>lernt</i></td></tr><tr><td><i>wir</i></td><td><i>-en</i></td><td><i>wohnen</i></td><td><i>lernen</i></td></tr>
<tr><td><i>ihr</i></td><td><i>-t</i></td><td><i>wohnt</i></td><td><i>lernt</i></td></tr><tr><td><i>sie/Sie</i></td><td><i>-en</i></td><td><i>wohnen</i></td><td><i>lernen</i></td></tr></table></div>
<p class="tip">لو الجذر بيخلص بـ <i>t</i> أو <i>d</i> بنزود <i>e</i>: <i>du arbeitest, er arbeitet</i>. ولو بيخلص بـ <i>s / ß / z</i> فـ <i>du</i> بتاخد <i>t</i> بس: <i>du heißt</i>.</p>
<p>أفعال بيتغير فيها الحرف المتحرك مع <i>du</i> و <i>er</i>: <i>sprechen → du sprichst, er spricht</i> — <i>essen → du isst</i> — <i>fahren → du fährst</i> — <i>lesen → du liest</i>.</p>`},
{t:"الأدوات: der / die / das و ein / eine",b:`<p>كل اسم في الألماني له جنس، والأداة بتوضحه. الأسماء دايمًا بتتكتب بحرف كبير.</p>
<div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>تعريف (الـ)</td><td><i>der</i></td><td><i>die</i></td><td><i>das</i></td><td><i>die</i></td></tr>
<tr><td>تنكير (واحد)</td><td><i>ein</i></td><td><i>eine</i></td><td><i>ein</i></td><td>—</td></tr>
<tr><td>نفي (مفيش)</td><td><i>kein</i></td><td><i>keine</i></td><td><i>kein</i></td><td><i>keine</i></td></tr></table></div>
<p>قواعد بتساعدك تخمّن الأداة:</p>
<ul class="exl"><li>كلمة بتخلص بـ <i>-ung, -heit, -keit, -schaft, -ion</i> ← غالبًا <i>die</i>: <i>die Wohnung</i></li>
<li>كلمة بتخلص بـ <i>-chen, -lein, -ment, -um</i> ← <i>das</i>: <i>das Mädchen</i></li>
<li>الأيام والشهور والفصول ← <i>der</i>: <i>der Montag, der Mai</i></li></ul>
<p class="tip">احفظ كل اسم مع أداته ولونها، زي ما هو مكتوب في خانة الكلمات.</p>`},
{t:"ترتيب الجملة والأسئلة",b:`<p>القاعدة الذهبية: الفعل دايمًا في المكان التاني في الجملة الخبرية.</p>
<ul class="exl"><li><i>Ich wohne in Kairo.</i> — أنا أسكن في القاهرة.</li><li><i>Heute wohne ich in Kairo.</i> — لما الزمن جه الأول، الفاعل اتأخر بعد الفعل.</li></ul>
<p>أدوات الاستفهام (W-Fragen) والفعل بعدها مباشرة:</p>
<div class="tw"><table><tr><th>الأداة</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>Wer?</i></td><td>مين؟</td><td><i>Wer ist das?</i></td></tr><tr><td><i>Was?</i></td><td>إيه؟</td><td><i>Was machst du?</i></td></tr>
<tr><td><i>Wo?</i></td><td>فين؟</td><td><i>Wo wohnst du?</i></td></tr><tr><td><i>Woher?</i></td><td>منين؟</td><td><i>Woher kommen Sie?</i></td></tr>
<tr><td><i>Wie?</i></td><td>إزاي؟</td><td><i>Wie heißt du?</i></td></tr><tr><td><i>Wann?</i></td><td>إمتى؟</td><td><i>Wann kommst du?</i></td></tr></table></div>
<p>سؤال إجابته نعم أو لا: الفعل في الأول. <i>Kommst du aus Ägypten?</i> — <i>Ja / Nein</i>.</p>`},
{t:"النفي: nicht و kein",b:`<p><i>kein</i> لنفي اسم معاه <i>ein</i> أو من غير أداة. <i>nicht</i> لنفي أي حاجة تانية (فعل، صفة، اسم معرّف).</p>
<ul class="exl"><li><i>Ich habe ein Auto. → Ich habe kein Auto.</i> — معنديش عربية.</li><li><i>Ich trinke Kaffee. → Ich trinke keinen Kaffee.</i></li>
<li><i>Das Haus ist nicht groß.</i> — البيت مش كبير.</li><li><i>Ich wohne nicht in Berlin.</i></li></ul>`}],
exam:{
r:{text:"Hallo! Ich heiße Lina. Ich komme aus Syrien und wohne jetzt in Hamburg. Ich bin 24 Jahre alt. Ich lerne Deutsch in einer Sprachschule. Mein Bruder Sami wohnt auch in Hamburg. Er ist Lehrer. Wir trinken oft zusammen Kaffee.",
qs:[["Woher kommt Lina?",["Aus Hamburg","Aus Syrien","Aus Ägypten"],1],["Wie alt ist Lina?",["20 Jahre","24 Jahre","42 Jahre"],1],["Was ist Sami von Beruf?",["Student","Lehrer","Arzt"],1],["Was trinken Lina und Sami oft?",["Tee","Wasser","Kaffee"],2]]},
l:{text:"Guten Tag! Mein Name ist Peter Braun. Ich wohne in München. Ich habe zwei Kinder, einen Sohn und eine Tochter. Ich spreche Deutsch und Englisch.",
qs:[["Wo wohnt Peter?",["In Berlin","In München","In Wien"],1],["Wie viele Kinder hat Peter?",["Ein Kind","Zwei Kinder","Drei Kinder"],1],["Was hat Peter?",["Zwei Söhne","Einen Sohn und eine Tochter","Zwei Töchter"],1],["Welche Sprachen spricht Peter?",["Deutsch und Arabisch","Deutsch und Englisch","Nur Deutsch"],1]]},
w:{task:"اكتب عن نفسك: اسمك، من أين أنت، أين تسكن، ماذا تتعلم، ومن في عائلتك.",min:25,model:"Ich heiße Omar. Ich komme aus Ägypten und wohne in Kairo. Ich bin 22 Jahre alt. Ich lerne Deutsch. Ich habe einen Bruder und eine Schwester. Mein Vater ist Lehrer."},
s:{qs:["Wie heißen Sie?","Woher kommen Sie?","Wo wohnen Sie?","Was lernen Sie?"]}}},

{id:"A1.2",title:"الحياة اليومية: الوقت والأكل والتسوق",
words:[
["m","Tag","يوم","تاج","Der Tag ist schön.","اليوم جميل."],
["f","Woche","أسبوع","فوخه","Die Woche hat sieben Tage.","الأسبوع فيه سبعة أيام."],
["m","Monat","شهر","مونات","Der Monat hat dreißig Tage.","الشهر فيه ثلاثون يومًا."],
["n","Jahr","سنة","يار","Das Jahr hat zwölf Monate.","السنة فيها اثنا عشر شهرًا."],
["f","Uhr","ساعة","أور","Es ist acht Uhr.","الساعة الثامنة."],
["n","Frühstück","فطار","فروشتوك","Das Frühstück ist um sieben.","الفطار الساعة السابعة."],
["n","Essen","أكل / طعام","إسن","Das Essen schmeckt gut.","الأكل طعمه حلو."],
["m","Apfel","تفاحة","أبفل","Der Apfel ist rot.","التفاحة حمراء."],
["n","Ei","بيضة","آي","Ich esse ein Ei.","آكل بيضة."],
["m","Käse","جبن","كيزه","Der Käse kommt aus Holland.","الجبن من هولندا."],
["n","Fleisch","لحم","فلايش","Ich esse kein Fleisch.","أنا لا آكل اللحم."],
["m","Supermarkt","سوبر ماركت","زوبرماركت","Der Supermarkt ist bis zehn Uhr geöffnet.","السوبر ماركت مفتوح حتى العاشرة."],
["n","Geld","فلوس / مال","جيلت","Ich habe kein Geld dabei.","ليس معي فلوس."],
["m","Preis","سعر","برايس","Der Preis ist hoch.","السعر مرتفع."],
["f","Arbeit","شغل / عمل","آربايت","Die Arbeit beginnt um neun.","العمل يبدأ الساعة التاسعة."],
["m","Bus","أتوبيس","بوس","Der Bus kommt pünktlich.","الأتوبيس يأتي في موعده."],
["m","Bahnhof","محطة القطار","بانهوف","Der Bahnhof ist dort.","المحطة هناك."],
["n","Auto","سيارة / عربية","أوتو","Das Auto ist neu.","السيارة جديدة."],
["f","Straße","شارع","شتراسه","Die Straße ist lang.","الشارع طويل."],
["m","Arzt","طبيب / دكتور","آرتست","Der Arzt hilft mir.","الطبيب يساعدني."],
["","aufstehen","يصحى من النوم","أوفشتيهن","Ich stehe um sechs Uhr auf.","أصحو الساعة السادسة."],
["","einkaufen","يتسوّق","آينكاوفن","Wir kaufen am Samstag ein.","نتسوق يوم السبت."],
["","essen","يأكل","إسن","Was isst du gern?","ماذا تحب أن تأكل؟"],
["","trinken","يشرب","ترينكن","Ich trinke Tee.","أشرب شايًا."],
["","können","يستطيع","كؤنن","Ich kann gut schwimmen.","أستطيع السباحة جيدًا."],
["","müssen","لازم / يجب","موسن","Ich muss heute arbeiten.","لازم أشتغل النهارده."],
["","wollen","يريد","فولن","Ich will Deutsch lernen.","أريد أن أتعلم الألمانية."],
["","kaufen","يشتري","كاوفن","Ich kaufe Brot.","أشتري خبزًا."],
["","billig","رخيص","بيليش","Das Hemd ist billig.","القميص رخيص."],
["","teuer","غالي","تويَر","Das Auto ist teuer.","السيارة غالية."]],
grammar:[
{t:"حالة المفعول به (Akkusativ)",b:`<p>لما الاسم يكون مفعول به (الحاجة اللي الفعل بيقع عليها)، المذكر بس هو اللي بيتغير:</p>
<div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>فاعل Nominativ</td><td><i>der / ein / kein</i></td><td><i>die / eine</i></td><td><i>das / ein</i></td><td><i>die</i></td></tr>
<tr><td>مفعول Akkusativ</td><td><i>den / einen / keinen</i></td><td><i>die / eine</i></td><td><i>das / ein</i></td><td><i>die</i></td></tr></table></div>
<ul class="exl"><li><i>Der Apfel ist rot. → Ich esse den Apfel.</i></li><li><i>Ich kaufe einen Käse und eine Milch.</i></li><li><i>Ich habe keinen Bruder.</i> — معنديش أخ.</li></ul>
<p>أفعال بتاخد Akkusativ: <i>haben, kaufen, essen, trinken, brauchen, sehen, suchen, möchten</i>.</p>`},
{t:"الأفعال المساعدة (Modalverben)",b:`<p>بتيجي في المكان التاني، والفعل الأساسي يروح آخر الجملة بالمصدر.</p>
<div class="tw"><table><tr><th></th><th>können يقدر</th><th>müssen لازم</th><th>wollen عايز</th><th>dürfen مسموح</th><th>möchten يحب/يود</th></tr>
<tr><td><i>ich</i></td><td><i>kann</i></td><td><i>muss</i></td><td><i>will</i></td><td><i>darf</i></td><td><i>möchte</i></td></tr>
<tr><td><i>du</i></td><td><i>kannst</i></td><td><i>musst</i></td><td><i>willst</i></td><td><i>darfst</i></td><td><i>möchtest</i></td></tr>
<tr><td><i>er/sie/es</i></td><td><i>kann</i></td><td><i>muss</i></td><td><i>will</i></td><td><i>darf</i></td><td><i>möchte</i></td></tr>
<tr><td><i>wir/sie/Sie</i></td><td><i>können</i></td><td><i>müssen</i></td><td><i>wollen</i></td><td><i>dürfen</i></td><td><i>möchten</i></td></tr>
<tr><td><i>ihr</i></td><td><i>könnt</i></td><td><i>müsst</i></td><td><i>wollt</i></td><td><i>dürft</i></td><td><i>möchtet</i></td></tr></table></div>
<ul class="exl"><li><i>Ich kann gut kochen.</i></li><li><i>Du musst heute arbeiten.</i></li><li><i>Hier darf man nicht rauchen.</i> — ممنوع التدخين هنا.</li></ul>`},
{t:"الأفعال المنفصلة (trennbare Verben)",b:`<p>أفعال ليها بادئة بتنفصل وتروح آخر الجملة: <i>auf|stehen, ein|kaufen, an|rufen, fern|sehen, mit|kommen, an|fangen</i>.</p>
<ul class="exl"><li><i>Ich stehe um sechs Uhr auf.</i></li><li><i>Wir kaufen heute ein.</i></li><li><i>Rufst du mich an?</i></li></ul>
<p class="tip">مع فعل مساعد البادئة مبتنفصلش: <i>Ich muss früh aufstehen.</i></p>`},
{t:"أدوات الملكية",b:`<div class="tw"><table><tr><th>الضمير</th><th>ملكية</th><th>المعنى</th></tr>
<tr><td><i>ich</i></td><td><i>mein</i></td><td>بتاعي</td></tr><tr><td><i>du</i></td><td><i>dein</i></td><td>بتاعك</td></tr>
<tr><td><i>er / es</i></td><td><i>sein</i></td><td>بتاعه</td></tr><tr><td><i>sie</i></td><td><i>ihr</i></td><td>بتاعها</td></tr>
<tr><td><i>wir</i></td><td><i>unser</i></td><td>بتاعنا</td></tr><tr><td><i>ihr</i></td><td><i>euer</i></td><td>بتاعكم</td></tr>
<tr><td><i>sie / Sie</i></td><td><i>ihr / Ihr</i></td><td>بتاعهم / بتاع حضرتك</td></tr></table></div>
<p>نهاياتها زي <i>ein</i>: <i>mein Vater, meine Mutter, mein Kind, meine Eltern</i>. وفي Akkusativ المذكر: <i>Ich besuche meinen Vater.</i></p>`},
{t:"صيغة الأمر (Imperativ)",b:`<div class="tw"><table><tr><th>لمين؟</th><th>kommen</th><th>machen</th><th>sprechen</th></tr>
<tr><td><i>du</i></td><td><i>Komm!</i></td><td><i>Mach!</i></td><td><i>Sprich!</i></td></tr>
<tr><td><i>ihr</i></td><td><i>Kommt!</i></td><td><i>Macht!</i></td><td><i>Sprecht!</i></td></tr>
<tr><td><i>Sie</i></td><td><i>Kommen Sie!</i></td><td><i>Machen Sie!</i></td><td><i>Sprechen Sie!</i></td></tr></table></div>
<p>زوّد <i>bitte</i> عشان تبقى مؤدب: <i>Komm bitte mit!</i> — <i>Sei leise!</i> (من sein).</p>`},
{t:"الساعة وحروف الزمن (um / am / im)",b:`<ul class="exl"><li><i>Es ist acht Uhr.</i> — 8:00</li><li><i>Es ist Viertel nach acht.</i> — 8:15</li>
<li><i>Es ist halb neun.</i> — 8:30 (انتبه: نص قبل التسعة)</li><li><i>Es ist Viertel vor neun.</i> — 8:45</li></ul>
<div class="tw"><table><tr><th>الحرف</th><th>مع إيه</th><th>مثال</th></tr>
<tr><td><i>um</i></td><td>الساعة</td><td><i>um 8 Uhr</i></td></tr><tr><td><i>am</i></td><td>الأيام وأجزاء اليوم</td><td><i>am Montag, am Abend</i></td></tr>
<tr><td><i>im</i></td><td>الشهور والفصول</td><td><i>im Mai, im Sommer</i></td></tr></table></div>`}],
exam:{
r:{text:"Mein Tag beginnt früh. Ich stehe um sechs Uhr auf und frühstücke. Um halb acht fahre ich mit dem Bus zur Arbeit. Ich arbeite in einem Supermarkt. Am Nachmittag kaufe ich ein. Am Abend koche ich und sehe fern. Am Samstag muss ich nicht arbeiten.",
qs:[["Wann steht die Person auf?",["Um sechs Uhr","Um halb acht","Um acht Uhr"],0],["Wie fährt die Person zur Arbeit?",["Mit dem Auto","Mit dem Bus","Mit dem Fahrrad"],1],["Wo arbeitet die Person?",["In einer Schule","In einem Supermarkt","In einem Hotel"],1],["Wann arbeitet die Person nicht?",["Am Montag","Am Freitag","Am Samstag"],2]]},
l:{text:"Guten Tag, ich möchte ein Kilo Äpfel und zwei Brote, bitte. — Gern. Das macht sechs Euro fünfzig. — Kann ich mit Karte bezahlen? — Ja, natürlich.",
qs:[["Was kauft die Frau?",["Äpfel und Brot","Milch und Käse","Fleisch und Eier"],0],["Wie viele Brote kauft sie?",["Eins","Zwei","Drei"],1],["Wie viel kostet alles?",["5,50 Euro","6,50 Euro","7,50 Euro"],1],["Wie bezahlt die Frau?",["Bar","Mit Karte","Gar nicht"],1]]},
w:{task:"اكتب رسالة قصيرة لصديقك: احكِ عن يومك يوم السبت، وادعه يتسوق أو يأكل معك. استخدم فعلًا مساعدًا (können / müssen / wollen).",min:30,model:"Hallo Tim, am Samstag muss ich nicht arbeiten. Ich stehe spät auf und frühstücke. Am Nachmittag will ich einkaufen. Kannst du mitkommen? Danach können wir zusammen Pizza essen. Viele Grüße, Omar"},
s:{qs:["Wann stehen Sie auf?","Was essen Sie zum Frühstück?","Was machen Sie am Wochenende?","Was können Sie gut?"]}}},

{id:"A2.1",title:"السفر والصحة والكلام عن الماضي",
words:[
["m","Urlaub","إجازة","أورلاوب","Wir machen Urlaub am Meer.","نقضي إجازة على البحر."],
["f","Reise","رحلة","رايزه","Die Reise war lang.","الرحلة كانت طويلة."],
["n","Hotel","فندق","هوتيل","Das Hotel liegt im Zentrum.","الفندق في وسط المدينة."],
["m","Koffer","شنطة سفر","كوفر","Mein Koffer ist schwer.","شنطتي ثقيلة."],
["n","Flugzeug","طيارة","فلوكتسويج","Das Flugzeug landet um zehn.","الطيارة تهبط الساعة العاشرة."],
["n","Meer","بحر","مير","Das Meer ist blau.","البحر أزرق."],
["n","Wetter","طقس / جو","فيتر","Das Wetter ist heute schön.","الجو اليوم جميل."],
["m","Regen","مطر","ريجن","Der Regen hört nicht auf.","المطر لا يتوقف."],
["f","Sonne","شمس","زونه","Die Sonne scheint.","الشمس مشرقة."],
["m","Kopf","رأس","كوبف","Mein Kopf tut weh.","رأسي يؤلمني."],
["m","Bauch","بطن","باوخ","Mein Bauch tut weh.","بطني تؤلمني."],
["f","Apotheke","صيدلية","أبوتيكه","Die Apotheke ist geschlossen.","الصيدلية مغلقة."],
["n","Medikament","دواء","ميديكامنت","Nimm das Medikament zweimal am Tag.","خذ الدواء مرتين في اليوم."],
["m","Termin","موعد","تيرمين","Ich habe einen Termin beim Arzt.","عندي موعد عند الطبيب."],
["n","Geschenk","هدية","جيشينك","Das Geschenk ist für dich.","الهدية لك."],
["m","Geburtstag","عيد ميلاد","جيبورتستاج","Heute ist mein Geburtstag.","اليوم عيد ميلادي."],
["f","Freizeit","وقت الفراغ","فرايتسايت","In meiner Freizeit lese ich.","في وقت فراغي أقرأ."],
["n","Hobby","هواية","هوبي","Mein Hobby ist Fußball.","هوايتي كرة القدم."],
["","reisen","يسافر","رايزن","Ich reise gern.","أحب السفر."],
["","fahren","يسافر بمركبة / يسوق","فارن","Wir sind nach München gefahren.","سافرنا إلى ميونخ."],
["","fliegen","يطير","فليجن","Ich bin nach Berlin geflogen.","طرت إلى برلين."],
["","besuchen","يزور","بيزوخن","Ich habe meine Oma besucht.","زرت جدتي."],
["","helfen","يساعد","هيلفن","Kannst du mir helfen?","ممكن تساعدني؟"],
["","gefallen","يعجب","جيفالن","Die Stadt gefällt mir.","المدينة تعجبني."],
["","schmecken","له طعم","شميكن","Die Suppe schmeckt mir.","الشوربة تعجبني."],
["","krank","مريض","كرانك","Ich bin krank.","أنا مريض."],
["","gesund","سليم / صحي","جيزونت","Obst ist gesund.","الفاكهة صحية."],
["","schnell","سريع","شنيل","Der Zug ist schnell.","القطار سريع."]],
grammar:[
{t:"الماضي التام (Perfekt)",b:`<p>أكتر زمن ماضي بيستخدمه الألمان في الكلام: <b>haben أو sein</b> في المكان التاني + <b>Partizip II</b> في الآخر.</p>
<div class="tw"><table><tr><th>النوع</th><th>الشكل</th><th>مثال</th></tr>
<tr><td>فعل منتظم</td><td><i>ge- + جذر + -t</i></td><td><i>machen → gemacht</i></td></tr>
<tr><td>فعل شاذ</td><td><i>ge- + جذر (متغير أحيانًا) + -en</i></td><td><i>sehen → gesehen, trinken → getrunken</i></td></tr>
<tr><td>فعل منفصل</td><td>البادئة + <i>ge</i> + الفعل</td><td><i>einkaufen → eingekauft</i></td></tr>
<tr><td>بادئة لا تنفصل / -ieren</td><td>من غير <i>ge</i></td><td><i>besuchen → besucht, studieren → studiert</i></td></tr></table></div>
<p>إمتى نستخدم <i>sein</i>؟ مع أفعال الحركة من مكان لمكان وتغيّر الحالة: <i>gehen, fahren, fliegen, kommen, aufstehen, bleiben, sein, werden</i>.</p>
<ul class="exl"><li><i>Ich habe Pizza gegessen.</i></li><li><i>Wir sind nach Spanien geflogen.</i></li><li><i>Er ist um sieben aufgestanden.</i></li></ul>`},
{t:"حالة الجر (Dativ)",b:`<div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>تعريف</td><td><i>dem</i></td><td><i>der</i></td><td><i>dem</i></td><td><i>den</i> + <i>n</i></td></tr>
<tr><td>تنكير</td><td><i>einem</i></td><td><i>einer</i></td><td><i>einem</i></td><td>—</td></tr>
<tr><td>ضمائر</td><td colspan="4"><i>mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen</i></td></tr></table></div>
<p>أفعال بتاخد Dativ: <i>helfen, danken, gefallen, gehören, schmecken, antworten, passen</i>.</p>
<ul class="exl"><li><i>Ich helfe dem Mann.</i></li><li><i>Das Kleid gefällt mir.</i> — الفستان عاجبني.</li><li><i>Ich gebe den Kindern Geschenke.</i></li></ul>`},
{t:"حروف جر مع Dativ دايمًا",b:`<p>احفظها: <i>aus, bei, mit, nach, seit, von, zu</i> (وكمان <i>gegenüber</i>).</p>
<ul class="exl"><li><i>Ich komme aus der Türkei.</i></li><li><i>Ich fahre mit dem Bus.</i></li><li><i>Ich wohne seit einem Jahr hier.</i></li><li><i>Ich gehe zum Arzt.</i> (<i>zu + dem = zum</i>, <i>zu + der = zur</i>, <i>bei + dem = beim</i>, <i>von + dem = vom</i>)</li></ul>`},
{t:"حروف جر مع Akkusativ دايمًا",b:`<p><i>für, durch, gegen, ohne, um</i></p>
<ul class="exl"><li><i>Das Geschenk ist für meinen Vater.</i></li><li><i>Ich trinke Kaffee ohne Zucker.</i></li><li><i>Wir gehen durch den Park.</i></li></ul>`},
{t:"الماضي البسيط لـ sein و haben والأفعال المساعدة",b:`<div class="tw"><table><tr><th></th><th>sein</th><th>haben</th><th>können</th><th>müssen</th></tr>
<tr><td><i>ich</i></td><td><i>war</i></td><td><i>hatte</i></td><td><i>konnte</i></td><td><i>musste</i></td></tr>
<tr><td><i>du</i></td><td><i>warst</i></td><td><i>hattest</i></td><td><i>konntest</i></td><td><i>musstest</i></td></tr>
<tr><td><i>er/sie/es</i></td><td><i>war</i></td><td><i>hatte</i></td><td><i>konnte</i></td><td><i>musste</i></td></tr>
<tr><td><i>wir/sie/Sie</i></td><td><i>waren</i></td><td><i>hatten</i></td><td><i>konnten</i></td><td><i>mussten</i></td></tr>
<tr><td><i>ihr</i></td><td><i>wart</i></td><td><i>hattet</i></td><td><i>konntet</i></td><td><i>musstet</i></td></tr></table></div>
<p class="tip">الألمان بيقولوا <i>Ich war krank</i> أكتر من <i>Ich bin krank gewesen</i>.</p>`},
{t:"المقارنة والتفضيل",b:`<div class="tw"><table><tr><th>الصفة</th><th>مقارنة (-er)</th><th>تفضيل (am -sten)</th></tr>
<tr><td><i>schnell</i></td><td><i>schneller</i></td><td><i>am schnellsten</i></td></tr><tr><td><i>alt</i></td><td><i>älter</i></td><td><i>am ältesten</i></td></tr>
<tr><td><i>gut</i></td><td><i>besser</i></td><td><i>am besten</i></td></tr><tr><td><i>viel</i></td><td><i>mehr</i></td><td><i>am meisten</i></td></tr>
<tr><td><i>gern</i></td><td><i>lieber</i></td><td><i>am liebsten</i></td></tr></table></div>
<ul class="exl"><li><i>Der Zug ist schneller als der Bus.</i> — أسرع من</li><li><i>Ich bin so groß wie mein Bruder.</i> — طويل زي</li><li><i>Ich trinke am liebsten Tee.</i></li></ul>`}],
exam:{
r:{text:"Liebe Sara, viele Grüße aus Spanien! Wir sind am Montag mit dem Flugzeug nach Barcelona geflogen. Das Hotel ist klein, aber sehr schön und liegt direkt am Meer. Das Wetter ist super, jeden Tag scheint die Sonne. Gestern haben wir eine Stadtrundfahrt gemacht. Am Freitag fahren wir zurück. Bis bald, Mona",
qs:[["Wie ist Mona nach Barcelona gereist?",["Mit dem Zug","Mit dem Flugzeug","Mit dem Auto"],1],["Wo liegt das Hotel?",["Im Zentrum","Am Meer","Am Bahnhof"],1],["Wie ist das Wetter?",["Es regnet viel","Es ist kalt","Es ist sonnig"],2],["Was hat Mona gestern gemacht?",["Eine Stadtrundfahrt","Sie hat eingekauft","Nichts"],0]]},
l:{text:"Praxis Doktor Weber, guten Morgen. — Guten Morgen, hier ist Ahmed Ali. Ich habe seit zwei Tagen starke Kopfschmerzen und Fieber. Kann ich heute kommen? — Heute um elf Uhr ist noch ein Termin frei. — Sehr gut, vielen Dank!",
qs:[["Seit wann ist Ahmed krank?",["Seit gestern","Seit zwei Tagen","Seit einer Woche"],1],["Was hat Ahmed?",["Bauchschmerzen","Kopfschmerzen und Fieber","Husten"],1],["Um wie viel Uhr ist der Termin?",["Um zehn Uhr","Um elf Uhr","Um zwölf Uhr"],1],["Wann ist der Termin?",["Heute","Morgen","Am Montag"],0]]},
w:{task:"اكتب عن آخر إجازة لك بالماضي (Perfekt): أين كنت، كيف سافرت، ماذا فعلت، وهل أعجبتك.",min:40,model:"Im Sommer bin ich mit meiner Familie nach Alexandria gefahren. Wir sind mit dem Zug gefahren. Das Wetter war sehr heiß. Jeden Tag sind wir ans Meer gegangen und haben Fisch gegessen. Am Abend haben wir Freunde besucht. Der Urlaub hat mir sehr gut gefallen."},
s:{qs:["Was haben Sie letztes Wochenende gemacht?","Wohin reisen Sie gern und warum?","Was machen Sie in Ihrer Freizeit?","Was machen Sie, wenn Sie krank sind?"]}}},

{id:"A2.2",title:"الشغل والمشاعر والرأي",
words:[
["m","Beruf","مهنة","بيروف","Was sind Sie von Beruf?","ما مهنتك؟"],
["f","Firma","شركة","فيرما","Die Firma hat 50 Mitarbeiter.","الشركة فيها ٥٠ موظفًا."],
["m","Chef","مدير","شيف","Der Chef ist heute nicht da.","المدير ليس موجودًا اليوم."],
["f","Bewerbung","طلب توظيف","بيفيربونج","Ich schreibe eine Bewerbung.","أكتب طلب توظيف."],
["n","Gehalt","راتب / مرتب","جيهالت","Das Gehalt ist gut.","الراتب جيد."],
["f","Erfahrung","خبرة","إرفارونج","Ich habe viel Erfahrung.","عندي خبرة كبيرة."],
["m","Kollege","زميل","كوليجه","Mein Kollege ist sehr nett.","زميلي لطيف جدًا."],
["f","Umwelt","بيئة","أومفيلت","Wir müssen die Umwelt schützen.","يجب أن نحمي البيئة."],
["m","Müll","قمامة / زبالة","مول","Wir trennen den Müll.","نحن نفرز القمامة."],
["n","Handy","موبايل","هيندي","Mein Handy ist kaputt.","موبايلي عطلان."],
["f","Nachricht","رسالة / خبر","ناخريشت","Ich habe deine Nachricht gelesen.","قرأت رسالتك."],
["n","Gefühl","شعور","جيفول","Ich habe ein gutes Gefühl.","عندي شعور جيد."],
["f","Angst","خوف","أنجست","Ich habe Angst vor Hunden.","أخاف من الكلاب."],
["m","Streit","خلاف / خناقة","شترايت","Der Streit war schnell vorbei.","الخلاف انتهى بسرعة."],
["f","Meinung","رأي","ماينونج","Meiner Meinung nach ist das richtig.","في رأيي هذا صحيح."],
["","sich freuen","يفرح / يتشوق","زيش فرويَن","Ich freue mich auf den Urlaub.","أنا متشوق للإجازة."],
["","sich ärgern","يتضايق","زيش إرجرن","Ich ärgere mich über den Stau.","أنا متضايق من الزحمة."],
["","sich bewerben","يتقدم لوظيفة","زيش بيفيربن","Ich bewerbe mich bei einer Bank.","أتقدم لوظيفة في بنك."],
["","verdienen","يكسب فلوس","فيردينن","Er verdient gut.","هو يكسب جيدًا."],
["","vergessen","ينسى","فيرجيسن","Ich habe den Termin vergessen.","نسيت الموعد."],
["","erklären","يشرح","إركليرن","Kannst du das erklären?","ممكن تشرح هذا؟"],
["","glauben","يعتقد / يصدق","جلاوبن","Ich glaube, dass er recht hat.","أعتقد أنه على حق."],
["","wichtig","مهم","فيشتيش","Das ist sehr wichtig.","هذا مهم جدًا."],
["","zufrieden","راضٍ","تسوفريدن","Ich bin mit der Arbeit zufrieden.","أنا راضٍ عن العمل."],
["","traurig","حزين","تراوريش","Sie ist heute traurig.","هي حزينة اليوم."],
["","weil","لأن","فايل","Ich bleibe zu Hause, weil ich krank bin.","أبقى في البيت لأني مريض."],
["","dass","أنّ","داس","Ich weiß, dass du müde bist.","أعرف أنك متعب."]],
grammar:[
{t:"الجمل الفرعية: weil / dass / wenn / ob",b:`<p>بعد أدوات الربط دي الفعل المصرّف بيروح آخر الجملة.</p>
<div class="tw"><table><tr><th>الأداة</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>weil</i></td><td>لأن</td><td><i>Ich lerne Deutsch, weil ich in Berlin arbeiten will.</i></td></tr>
<tr><td><i>dass</i></td><td>أنّ</td><td><i>Ich hoffe, dass du kommst.</i></td></tr>
<tr><td><i>wenn</i></td><td>لو / لما</td><td><i>Wenn es regnet, bleibe ich zu Hause.</i></td></tr>
<tr><td><i>ob</i></td><td>هل (سؤال غير مباشر)</td><td><i>Ich weiß nicht, ob er kommt.</i></td></tr></table></div>
<p class="tip">لو الجملة الفرعية جت في الأول، الجملة الرئيسية تبدأ بالفعل: <i>Wenn ich Zeit habe, <b>komme</b> ich.</i></p>`},
{t:"الأفعال الانعكاسية (sich)",b:`<div class="tw"><table><tr><th>الضمير</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td><i>ich</i></td><td><i>mich</i></td><td><i>mir</i></td></tr><tr><td><i>du</i></td><td><i>dich</i></td><td><i>dir</i></td></tr>
<tr><td><i>er/sie/es</i></td><td><i>sich</i></td><td><i>sich</i></td></tr><tr><td><i>wir</i></td><td><i>uns</i></td><td><i>uns</i></td></tr>
<tr><td><i>ihr</i></td><td><i>euch</i></td><td><i>euch</i></td></tr><tr><td><i>sie/Sie</i></td><td><i>sich</i></td><td><i>sich</i></td></tr></table></div>
<ul class="exl"><li><i>Ich freue mich.</i></li><li><i>Wir treffen uns um acht.</i></li><li><i>Ich wasche mir die Hände.</i> — لما في مفعول تاني بنستخدم Dativ.</li></ul>`},
{t:"أفعال مع حروف جر ثابتة",b:`<div class="tw"><table><tr><th>الفعل</th><th>المعنى</th></tr>
<tr><td><i>warten auf + Akk.</i></td><td>ينتظر</td></tr><tr><td><i>denken an + Akk.</i></td><td>يفكر في</td></tr>
<tr><td><i>sich freuen auf / über + Akk.</i></td><td>يتشوق لـ (مستقبل) / يفرح بـ (حاضر)</td></tr>
<tr><td><i>sich interessieren für + Akk.</i></td><td>يهتم بـ</td></tr><tr><td><i>sprechen mit + Dat. / über + Akk.</i></td><td>يتكلم مع / عن</td></tr>
<tr><td><i>Angst haben vor + Dat.</i></td><td>يخاف من</td></tr></table></div>
<p>السؤال عن شيء: <i>wo(r) + حرف</i> — <i>Worauf wartest du?</i> — الإجابة: <i>da(r) + حرف</i> — <i>Ich warte darauf.</i> وعن شخص: <i>Auf wen wartest du?</i></p>`},
{t:"حروف الجر ذات الحالتين (Wechselpräpositionen)",b:`<p><i>in, an, auf, über, unter, vor, hinter, neben, zwischen</i></p>
<div class="tw"><table><tr><th>السؤال</th><th>الحالة</th><th>مثال</th></tr>
<tr><td><i>Wo?</i> فين (ثابت)</td><td>Dativ</td><td><i>Das Buch liegt auf dem Tisch.</i></td></tr>
<tr><td><i>Wohin?</i> لفين (حركة)</td><td>Akkusativ</td><td><i>Ich lege das Buch auf den Tisch.</i></td></tr></table></div>
<p>أزواج مهمة: <i>liegen / legen</i> — <i>stehen / stellen</i> — <i>sitzen / setzen</i> — <i>hängen / hängen</i>.</p>`},
{t:"Konjunktiv II للأدب والتمني",b:`<div class="tw"><table><tr><th></th><th>werden → würde</th><th>haben → hätte</th><th>sein → wäre</th><th>können → könnte</th></tr>
<tr><td><i>ich</i></td><td><i>würde</i></td><td><i>hätte</i></td><td><i>wäre</i></td><td><i>könnte</i></td></tr>
<tr><td><i>du</i></td><td><i>würdest</i></td><td><i>hättest</i></td><td><i>wärst</i></td><td><i>könntest</i></td></tr>
<tr><td><i>er/sie/es</i></td><td><i>würde</i></td><td><i>hätte</i></td><td><i>wäre</i></td><td><i>könnte</i></td></tr>
<tr><td><i>wir/sie/Sie</i></td><td><i>würden</i></td><td><i>hätten</i></td><td><i>wären</i></td><td><i>könnten</i></td></tr></table></div>
<ul class="exl"><li><i>Könnten Sie mir bitte helfen?</i> — طلب مؤدب.</li><li><i>Ich würde gern nach Japan reisen.</i> — تمنّي.</li><li><i>Wenn ich Zeit hätte, würde ich mehr lesen.</i></li><li><i>Du solltest mehr schlafen.</i> — نصيحة.</li></ul>`},
{t:"نهايات الصفات (البداية)",b:`<p>لما الصفة تيجي قبل الاسم بتاخد نهاية. بعد أداة التعريف في حالة الفاعل:</p>
<div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>بعد <i>der/die/das</i></td><td><i>der große Mann</i></td><td><i>die kleine Frau</i></td><td><i>das neue Auto</i></td><td><i>die alten Häuser</i></td></tr>
<tr><td>بعد <i>ein/eine</i></td><td><i>ein großer Mann</i></td><td><i>eine kleine Frau</i></td><td><i>ein neues Auto</i></td><td><i>alte Häuser</i></td></tr></table></div>
<p class="tip">الجدول الكامل لكل الحالات موجود في مستوى B1.1.</p>`}],
exam:{
r:{text:"Sehr geehrte Damen und Herren, ich habe Ihre Anzeige gelesen und interessiere mich für die Stelle als Verkäufer. Ich habe drei Jahre Erfahrung, weil ich in einem Kaufhaus gearbeitet habe. Ich bin freundlich und arbeite gern im Team. Ich würde mich über eine Einladung zum Gespräch freuen. Mit freundlichen Grüßen, Karim Haddad",
qs:[["Was für ein Text ist das?",["Eine Bewerbung","Eine Einladung zur Party","Eine Beschwerde"],0],["Für welche Stelle interessiert sich Karim?",["Lehrer","Verkäufer","Koch"],1],["Warum hat Karim Erfahrung?",["Er hat studiert","Er hat in einem Kaufhaus gearbeitet","Er hat einen Kurs gemacht"],1],["Was wünscht sich Karim?",["Mehr Geld","Eine Einladung zum Gespräch","Urlaub"],1]]},
l:{text:"Ich heiße Julia. Früher war ich oft gestresst, weil ich zu viel gearbeitet habe. Jetzt arbeite ich nur noch vier Tage pro Woche. Am Freitag mache ich Sport oder treffe Freunde. Ich verdiene weniger, aber ich bin viel zufriedener.",
qs:[["Warum war Julia früher gestresst?",["Sie hat zu viel gearbeitet","Sie war krank","Sie hatte kein Geld"],0],["Wie viele Tage arbeitet Julia jetzt?",["Drei","Vier","Fünf"],1],["Was macht Julia am Freitag?",["Sie arbeitet","Sport oder Freunde treffen","Sie schläft den ganzen Tag"],1],["Wie fühlt sich Julia jetzt?",["Trauriger","Zufriedener","Gestresster"],1]]},
w:{task:"اكتب إيميل لزميلك: لن تستطيع حضور الاجتماع غدًا. اذكر السبب باستخدام weil، واقترح موعدًا آخر.",min:50,model:"Hallo Markus, leider kann ich morgen nicht zum Meeting kommen, weil ich einen Termin beim Arzt habe. Es tut mir leid. Könnten wir das Meeting vielleicht auf Donnerstag verschieben? Am Donnerstag habe ich den ganzen Tag Zeit. Ich würde mich über eine kurze Antwort freuen. Viele Grüße, Sara"},
s:{qs:["Was ist Ihr Traumberuf und warum?","Worüber ärgern Sie sich manchmal?","Worauf freuen Sie sich?","Was tun Sie für die Umwelt?"]}}},

{id:"B1.1",title:"الدراسة والمجتمع والعلاقات",
words:[
["f","Ausbildung","تدريب مهني","آوسبيلدونج","Sie macht eine Ausbildung als Köchin.","هي تتدرب لتصبح طبّاخة."],
["n","Studium","دراسة جامعية","شتوديوم","Das Studium dauert vier Jahre.","الدراسة تستمر أربع سنوات."],
["f","Prüfung","امتحان","بروفونج","Die Prüfung war schwer.","الامتحان كان صعبًا."],
["n","Zeugnis","شهادة","تسويجنيس","Ich habe mein Zeugnis bekommen.","استلمت شهادتي."],
["f","Gesellschaft","مجتمع","جيزيلشافت","Die Gesellschaft verändert sich.","المجتمع يتغير."],
["f","Beziehung","علاقة","بيتسيونج","Sie haben eine gute Beziehung.","علاقتهما جيدة."],
["n","Vertrauen","ثقة","فيرتراوين","Vertrauen ist wichtig.","الثقة مهمة."],
["m","Vertrag","عقد","فيرتراج","Ich unterschreibe den Vertrag.","أوقّع العقد."],
["f","Miete","إيجار","ميته","Die Miete ist gestiegen.","الإيجار ارتفع."],
["m","Vermieter","المالك (المؤجِّر)","فيرميتر","Der Vermieter wohnt im Erdgeschoss.","المالك يسكن في الدور الأرضي."],
["f","Behörde","جهة حكومية","بيهؤرده","Ich muss zur Behörde gehen.","لازم أروح الجهة الحكومية."],
["n","Formular","استمارة","فورمولار","Bitte füllen Sie das Formular aus.","من فضلك املأ الاستمارة."],
["f","Möglichkeit","إمكانية / فرصة","مؤجليشكايت","Es gibt viele Möglichkeiten.","توجد إمكانيات كثيرة."],
["m","Vorteil","ميزة","فورتايل","Das hat viele Vorteile.","هذا له مميزات كثيرة."],
["m","Nachteil","عيب","ناختايل","Der Nachteil ist der Preis.","العيب هو السعر."],
["f","Entscheidung","قرار","إنتشايدونج","Das war eine schwere Entscheidung.","كان قرارًا صعبًا."],
["","sich entscheiden","يقرّر","زيش إنتشايدن","Ich habe mich für das Studium entschieden.","قررت الدراسة."],
["","sich kümmern um","يهتم بـ / يرعى","زيش كومرن أوم","Sie kümmert sich um ihre Eltern.","هي ترعى والديها."],
["","teilnehmen","يشارك","تايلنيمن","Ich nehme an dem Kurs teil.","أشارك في الدورة."],
["","unterschreiben","يوقّع","أونترشرايبن","Bitte unterschreiben Sie hier.","من فضلك وقّع هنا."],
["","vorschlagen","يقترح","فورشلاجن","Ich schlage vor, dass wir früher gehen.","أقترح أن نمشي بدري."],
["","erreichen","يحقق / يصل إلى","إررايشن","Ich habe mein Ziel erreicht.","حققت هدفي."],
["","abhängen von","يعتمد على","آبهينجن فون","Das hängt vom Wetter ab.","هذا يعتمد على الطقس."],
["","selbstständig","مستقل","زيلبستشتينديش","Er arbeitet selbstständig.","هو يعمل بشكل مستقل."],
["","ehrlich","صادق","إيرليش","Sei ehrlich zu mir.","كن صادقًا معي."],
["","obwohl","رغم أنّ","أوبفول","Obwohl es regnet, gehe ich spazieren.","رغم أنها تمطر، أتمشى."],
["","trotzdem","ومع ذلك","تروتسديم","Es regnet, trotzdem gehe ich raus.","إنها تمطر، ومع ذلك أخرج."]],
grammar:[
{t:"الماضي البسيط (Präteritum)",b:`<p>بيُستخدم في الكتابة والقصص والأخبار. الأفعال المنتظمة: الجذر + <i>-te</i>.</p>
<div class="tw"><table><tr><th></th><th>machen (منتظم)</th><th>gehen (شاذ)</th><th>kommen (شاذ)</th></tr>
<tr><td><i>ich</i></td><td><i>machte</i></td><td><i>ging</i></td><td><i>kam</i></td></tr><tr><td><i>du</i></td><td><i>machtest</i></td><td><i>gingst</i></td><td><i>kamst</i></td></tr>
<tr><td><i>er/sie/es</i></td><td><i>machte</i></td><td><i>ging</i></td><td><i>kam</i></td></tr><tr><td><i>wir/sie/Sie</i></td><td><i>machten</i></td><td><i>gingen</i></td><td><i>kamen</i></td></tr>
<tr><td><i>ihr</i></td><td><i>machtet</i></td><td><i>gingt</i></td><td><i>kamt</i></td></tr></table></div>
<p>شواذ مهمة: <i>sehen→sah, geben→gab, finden→fand, schreiben→schrieb, fahren→fuhr, bleiben→blieb, wissen→wusste, denken→dachte</i>.</p>`},
{t:"جمل الصلة (Relativsätze)",b:`<p>جملة بتوصف اسم، تبدأ بضمير صلة يطابق جنس الاسم، وحالته حسب دوره في الجملة الفرعية. الفعل في الآخر.</p>
<div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>Nominativ</td><td><i>der</i></td><td><i>die</i></td><td><i>das</i></td><td><i>die</i></td></tr>
<tr><td>Akkusativ</td><td><i>den</i></td><td><i>die</i></td><td><i>das</i></td><td><i>die</i></td></tr>
<tr><td>Dativ</td><td><i>dem</i></td><td><i>der</i></td><td><i>dem</i></td><td><i>denen</i></td></tr>
<tr><td>Genitiv</td><td><i>dessen</i></td><td><i>deren</i></td><td><i>dessen</i></td><td><i>deren</i></td></tr></table></div>
<ul class="exl"><li><i>Das ist der Mann, der neben mir wohnt.</i></li><li><i>Das ist der Film, den ich gesehen habe.</i></li><li><i>Die Kollegin, mit der ich arbeite, ist nett.</i></li></ul>`},
{t:"المصدر مع zu و um ... zu",b:`<ul class="exl"><li><i>Ich habe keine Lust, heute zu kochen.</i></li><li><i>Es ist wichtig, regelmäßig zu lernen.</i></li>
<li>مع فعل منفصل: <i>Ich versuche, früh aufzustehen.</i></li><li><b>um ... zu</b> = عشان (لما الفاعل واحد): <i>Ich lerne Deutsch, um in Deutschland zu studieren.</i></li>
<li><b>damit</b> = عشان (لما الفاعل مختلف): <i>Ich erkläre es, damit du es verstehst.</i></li><li><b>ohne ... zu</b> = من غير ما: <i>Er ging, ohne Tschüss zu sagen.</i></li></ul>`},
{t:"المبني للمجهول في المضارع (Passiv Präsens)",b:`<p><i>werden</i> + <i>Partizip II</i>. المهم الحدث مش الفاعل. الفاعل ممكن يتذكر بـ <i>von + Dativ</i>.</p>
<ul class="exl"><li><i>Das Haus wird renoviert.</i> — البيت بيتجدد.</li><li><i>Die Briefe werden von der Post gebracht.</i></li><li><i>In Deutschland wird viel Brot gegessen.</i></li></ul>
<div class="tw"><table><tr><th>werden</th><th></th></tr><tr><td><i>ich werde</i></td><td><i>wir werden</i></td></tr><tr><td><i>du wirst</i></td><td><i>ihr werdet</i></td></tr><tr><td><i>er wird</i></td><td><i>sie werden</i></td></tr></table></div>`},
{t:"أدوات الربط: obwohl / trotzdem / deshalb / sondern",b:`<div class="tw"><table><tr><th>الأداة</th><th>المعنى</th><th>مكان الفعل</th><th>مثال</th></tr>
<tr><td><i>obwohl</i></td><td>رغم أنّ</td><td>آخر الجملة</td><td><i>Obwohl ich müde bin, lerne ich.</i></td></tr>
<tr><td><i>trotzdem</i></td><td>ومع ذلك</td><td>بعدها مباشرة</td><td><i>Ich bin müde, trotzdem lerne ich.</i></td></tr>
<tr><td><i>deshalb</i></td><td>لذلك</td><td>بعدها مباشرة</td><td><i>Ich bin krank, deshalb bleibe ich zu Hause.</i></td></tr>
<tr><td><i>sondern</i></td><td>بل</td><td>عادي</td><td><i>Nicht heute, sondern morgen.</i></td></tr></table></div>`},
{t:"جدول نهايات الصفات الكامل",b:`<p>1) بعد <i>der/die/das</i> (Typ 1):</p><div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>Nom.</td><td><i>-e</i></td><td><i>-e</i></td><td><i>-e</i></td><td><i>-en</i></td></tr><tr><td>Akk.</td><td><i>-en</i></td><td><i>-e</i></td><td><i>-e</i></td><td><i>-en</i></td></tr>
<tr><td>Dat.</td><td><i>-en</i></td><td><i>-en</i></td><td><i>-en</i></td><td><i>-en</i></td></tr><tr><td>Gen.</td><td><i>-en</i></td><td><i>-en</i></td><td><i>-en</i></td><td><i>-en</i></td></tr></table></div>
<p>2) بعد <i>ein/kein/mein</i> (Typ 2):</p><div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>Nom.</td><td><i>-er</i></td><td><i>-e</i></td><td><i>-es</i></td><td><i>-en</i></td></tr><tr><td>Akk.</td><td><i>-en</i></td><td><i>-e</i></td><td><i>-es</i></td><td><i>-en</i></td></tr>
<tr><td>Dat.</td><td><i>-en</i></td><td><i>-en</i></td><td><i>-en</i></td><td><i>-en</i></td></tr><tr><td>Gen.</td><td><i>-en</i></td><td><i>-en</i></td><td><i>-en</i></td><td><i>-en</i></td></tr></table></div>
<p>3) من غير أداة (Typ 3) الصفة بتاخد نهاية الأداة نفسها:</p><div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>Nom.</td><td><i>-er</i></td><td><i>-e</i></td><td><i>-es</i></td><td><i>-e</i></td></tr><tr><td>Akk.</td><td><i>-en</i></td><td><i>-e</i></td><td><i>-es</i></td><td><i>-e</i></td></tr>
<tr><td>Dat.</td><td><i>-em</i></td><td><i>-er</i></td><td><i>-em</i></td><td><i>-en</i></td></tr><tr><td>Gen.</td><td><i>-en</i></td><td><i>-er</i></td><td><i>-en</i></td><td><i>-er</i></td></tr></table></div>
<ul class="exl"><li><i>Ich trinke heißen Kaffee.</i></li><li><i>Ich wohne in einer kleinen Wohnung.</i></li><li><i>Mit dem neuen Auto fahre ich schneller.</i></li></ul>`}],
exam:{
r:{text:"Immer mehr junge Menschen in Deutschland entscheiden sich für eine Ausbildung statt für ein Studium. Ein Grund dafür ist, dass man während der Ausbildung schon Geld verdient. Außerdem lernt man den Beruf direkt in der Praxis kennen. Viele Firmen suchen dringend Fachkräfte, deshalb sind die Chancen auf einen Job nach der Ausbildung sehr gut. Trotzdem glauben manche Eltern noch, dass nur ein Studium zu einem guten Beruf führt.",
qs:[["Wofür entscheiden sich immer mehr junge Menschen?",["Für ein Studium","Für eine Ausbildung","Für eine Weltreise"],1],["Was ist ein Vorteil der Ausbildung?",["Man verdient schon Geld","Sie ist kürzer als die Schule","Man muss nicht arbeiten"],0],["Wie sind die Jobchancen nach der Ausbildung?",["Schlecht","Sehr gut","Unklar"],1],["Was glauben manche Eltern?",["Eine Ausbildung ist besser","Nur ein Studium führt zu einem guten Beruf","Arbeit ist nicht wichtig"],1]]},
l:{text:"Und nun zum Verkehr: Auf der A7 zwischen Hamburg und Hannover gibt es wegen eines Unfalls einen Stau von zehn Kilometern. Bitte fahren Sie vorsichtig. Das Wetter: Heute bleibt es bewölkt, am Nachmittag kann es regnen. Morgen wird es sonnig bei bis zu zwanzig Grad.",
qs:[["Warum gibt es einen Stau?",["Wegen einer Baustelle","Wegen eines Unfalls","Wegen Schnee"],1],["Wie lang ist der Stau?",["Fünf Kilometer","Zehn Kilometer","Zwanzig Kilometer"],1],["Wie ist das Wetter heute Nachmittag?",["Es kann regnen","Es ist sonnig","Es schneit"],0],["Wie warm wird es morgen?",["Bis zu zwölf Grad","Bis zu zwanzig Grad","Bis zu fünfundzwanzig Grad"],1]]},
w:{task:"اكتب رسالة رسمية لصاحب البيت: التدفئة لا تعمل منذ أسبوع. اشرح المشكلة، وما تأثيرها عليك، واطلب حلًا في موعد محدد.",min:80,model:"Sehr geehrter Herr Schmidt, ich wohne in Ihrer Wohnung in der Gartenstraße 5. Leider funktioniert die Heizung seit einer Woche nicht mehr. Da es nachts sehr kalt ist, können meine Kinder und ich kaum schlafen. Ich habe schon versucht, Sie telefonisch zu erreichen, aber ohne Erfolg. Deshalb bitte ich Sie, bis Freitag einen Techniker zu schicken. Ich bin jeden Tag ab 16 Uhr zu Hause. Vielen Dank im Voraus. Mit freundlichen Grüßen, Mona Ali"},
s:{qs:["Erzählen Sie von Ihrer Schulzeit.","Was sind Vor- und Nachteile vom Leben in einer großen Stadt?","Wir planen eine Geburtstagsparty für einen Freund. Was müssen wir organisieren?","Was ist Ihnen in einer Freundschaft wichtig?"]}}},

{id:"B1.2",title:"الإعلام والصحة والمجتمع",
words:[
["f","Zeitung","جريدة","تسايتونج","Ich lese jeden Morgen die Zeitung.","أقرأ الجريدة كل صباح."],
["m","Artikel","مقال","أرتيكل","Der Artikel war sehr interessant.","المقال كان ممتعًا جدًا."],
["f","Werbung","إعلان / دعاية","فيربونج","Im Fernsehen gibt es zu viel Werbung.","في التلفزيون إعلانات كثيرة جدًا."],
["f","Gesundheit","صحة","جيزونتهايت","Gesundheit ist das Wichtigste.","الصحة أهم شيء."],
["f","Versicherung","تأمين","فيرزيشرونج","Die Versicherung zahlt den Schaden.","التأمين يدفع الضرر."],
["f","Krankenkasse","التأمين الصحي","كرانكنكاسه","Die Krankenkasse bezahlt die Behandlung.","التأمين الصحي يدفع العلاج."],
["f","Regierung","حكومة","ريجيرونج","Die Regierung plant neue Gesetze.","الحكومة تخطط لقوانين جديدة."],
["n","Gesetz","قانون","جيزيتس","Das Gesetz gilt ab Januar.","القانون يسري من يناير."],
["f","Wahl","انتخابات / اختيار","فال","Die Wahl findet im September statt.","الانتخابات في سبتمبر."],
["f","Ursache","سبب","أورزاخه","Die Ursache des Unfalls ist unklar.","سبب الحادث غير واضح."],
["f","Folge","نتيجة / عاقبة","فولجه","Das hat schlimme Folgen.","هذا له عواقب سيئة."],
["m","Unterschied","فرق","أونترشيد","Was ist der Unterschied?","ما الفرق؟"],
["n","Ergebnis","نتيجة","إرجيبنيس","Das Ergebnis ist positiv.","النتيجة إيجابية."],
["f","Lösung","حل","لؤزونج","Wir finden bestimmt eine Lösung.","أكيد سنجد حلًا."],
["f","Umfrage","استطلاع رأي","أومفراجه","Laut einer Umfrage sind viele zufrieden.","حسب استطلاع، كثيرون راضون."],
["","behaupten","يدّعي","بيهاوبتن","Er behauptet, dass er nichts wusste.","يدّعي أنه لم يكن يعرف شيئًا."],
["","vergleichen","يقارن","فيرجلايشن","Vergleichen Sie die Preise.","قارن الأسعار."],
["","sich verlassen auf","يعتمد على / يثق في","زيش فيرلاسن أوف","Ich kann mich auf ihn verlassen.","أقدر أعتمد عليه."],
["","verbessern","يحسّن","فيربيسرن","Ich will mein Deutsch verbessern.","أريد أن أحسّن الألماني بتاعي."],
["","beeinflussen","يؤثر على","بيآينفلوسن","Werbung beeinflusst uns.","الإعلانات تؤثر علينا."],
["","vermeiden","يتجنب","فيرمايدن","Ich vermeide Stress.","أتجنب التوتر."],
["","zunehmen","يزيد","تسونيمن","Der Verkehr nimmt zu.","المرور يزداد."],
["","deutlich","بشكل واضح","دويتليش","Die Preise sind deutlich gestiegen.","الأسعار ارتفعت بشكل واضح."],
["","öffentlich","عام / علني","أؤفنتليش","Ich fahre mit öffentlichen Verkehrsmitteln.","أستخدم المواصلات العامة."],
["","wahrscheinlich","على الأرجح","فارشاينليش","Er kommt wahrscheinlich später.","على الأرجح سيأتي متأخرًا."],
["","während","أثناء / بينما","فيرند","Während des Essens telefoniert er nicht.","لا يتكلم في التليفون أثناء الأكل."],
["","deshalb","لذلك","ديسهالب","Ich bin müde, deshalb gehe ich schlafen.","أنا متعب، لذلك سأنام."]],
grammar:[
{t:"الماضي الأسبق (Plusquamperfekt)",b:`<p>حدث حصل قبل حدث تاني في الماضي: <i>hatte / war</i> + <i>Partizip II</i>. غالبًا مع <i>nachdem</i>.</p>
<ul class="exl"><li><i>Nachdem ich gegessen hatte, ging ich spazieren.</i></li><li><i>Als ich ankam, war der Zug schon abgefahren.</i></li></ul>`},
{t:"حالة الملكية (Genitiv)",b:`<div class="tw"><table><tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>تعريف</td><td><i>des</i> + <i>-(e)s</i></td><td><i>der</i></td><td><i>des</i> + <i>-(e)s</i></td><td><i>der</i></td></tr>
<tr><td>تنكير</td><td><i>eines</i> + <i>-(e)s</i></td><td><i>einer</i></td><td><i>eines</i> + <i>-(e)s</i></td><td>—</td></tr></table></div>
<ul class="exl"><li><i>Das Auto des Vaters</i> — عربية الأب.</li><li><i>Die Farbe der Tür</i> — لون الباب.</li></ul>
<p>حروف جر مع Genitiv: <i>wegen</i> (بسبب)، <i>trotz</i> (رغم)، <i>während</i> (أثناء)، <i>statt</i> (بدلًا من)، <i>innerhalb</i> (خلال).</p>
<ul class="exl"><li><i>Wegen des Regens bleiben wir zu Hause.</i></li><li><i>Trotz der Kälte gehen wir raus.</i></li></ul>`},
{t:"التصريف بـ n (n-Deklination)",b:`<p>بعض الأسماء المذكرة بتاخد <i>-n / -en</i> في كل الحالات ما عدا الفاعل المفرد. غالبًا كلمات لأشخاص أو حيوانات بتخلص بـ <i>-e</i>، أو <i>-ent, -ist, -ant</i>.</p>
<div class="tw"><table><tr><th></th><th>der Junge</th><th>der Student</th><th>der Herr</th></tr>
<tr><td>Nom.</td><td><i>der Junge</i></td><td><i>der Student</i></td><td><i>der Herr</i></td></tr><tr><td>Akk.</td><td><i>den Jungen</i></td><td><i>den Studenten</i></td><td><i>den Herrn</i></td></tr>
<tr><td>Dat.</td><td><i>dem Jungen</i></td><td><i>dem Studenten</i></td><td><i>dem Herrn</i></td></tr><tr><td>Gen.</td><td><i>des Jungen</i></td><td><i>des Studenten</i></td><td><i>des Herrn</i></td></tr></table></div>
<p>كمان: <i>der Kollege, der Mensch, der Nachbar, der Kunde, der Polizist, der Name (des Namens)</i>.</p>`},
{t:"المستقبل (Futur I)",b:`<p><i>werden</i> + مصدر في الآخر. للتنبؤ أو الوعد أو الافتراض. في الكلام العادي الألمان بيستخدموا المضارع مع كلمة زمن.</p>
<ul class="exl"><li><i>Morgen wird es regnen.</i></li><li><i>Ich werde dir helfen.</i> — وعد.</li><li><i>Er wird wohl krank sein.</i> — افتراض.</li></ul>`},
{t:"أدوات الربط المزدوجة",b:`<div class="tw"><table><tr><th>الأداة</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>entweder ... oder</i></td><td>إما ... أو</td><td><i>Entweder du kommst mit, oder du bleibst hier.</i></td></tr>
<tr><td><i>weder ... noch</i></td><td>لا ... ولا</td><td><i>Ich trinke weder Kaffee noch Tee.</i></td></tr>
<tr><td><i>sowohl ... als auch</i></td><td>كلًا من ... و</td><td><i>Sie spricht sowohl Deutsch als auch Französisch.</i></td></tr>
<tr><td><i>nicht nur ... sondern auch</i></td><td>ليس فقط ... بل أيضًا</td><td><i>Er ist nicht nur klug, sondern auch fleißig.</i></td></tr>
<tr><td><i>je ... desto</i></td><td>كلما ... كلما</td><td><i>Je mehr ich lerne, desto besser spreche ich.</i></td></tr>
<tr><td><i>zwar ... aber</i></td><td>صحيح ... لكن</td><td><i>Das Hotel ist zwar teuer, aber sehr schön.</i></td></tr></table></div>`},
{t:"أدوات الزمن: als / wenn / bevor / seitdem / bis",b:`<div class="tw"><table><tr><th>الأداة</th><th>الاستخدام</th><th>مثال</th></tr>
<tr><td><i>als</i></td><td>مرة واحدة في الماضي</td><td><i>Als ich klein war, wohnte ich in Assiut.</i></td></tr>
<tr><td><i>wenn</i></td><td>كل مرة / في المستقبل</td><td><i>Wenn ich Zeit habe, lese ich.</i></td></tr>
<tr><td><i>bevor</i></td><td>قبل ما</td><td><i>Bevor ich schlafe, lese ich.</i></td></tr>
<tr><td><i>seitdem</i></td><td>من ساعة ما</td><td><i>Seitdem ich hier wohne, bin ich glücklich.</i></td></tr>
<tr><td><i>bis</i></td><td>لحد ما</td><td><i>Warte, bis ich komme.</i></td></tr>
<tr><td><i>während</i></td><td>في حين / أثناء</td><td><i>Während ich koche, hört sie Musik.</i></td></tr></table></div>`}],
exam:{
r:{text:"Soziale Medien haben unser Leben stark verändert. Während man früher Nachrichten vor allem in der Zeitung las, informieren sich heute viele Menschen über das Handy. Das hat Vorteile: Informationen sind schnell und kostenlos. Allerdings verbreiten sich auch falsche Nachrichten leichter. Experten empfehlen deshalb, Informationen immer mit seriösen Quellen zu vergleichen. Wer das nicht tut, kann sich leicht beeinflussen lassen.",
qs:[["Wo las man früher vor allem Nachrichten?",["Auf dem Handy","In der Zeitung","Im Radio"],1],["Was ist ein Vorteil?",["Informationen sind schnell und kostenlos","Informationen sind immer richtig","Handys sind billig"],0],["Was ist ein Problem?",["Falsche Nachrichten verbreiten sich leichter","Zeitungen sind verboten","Es gibt keine Nachrichten mehr"],0],["Was empfehlen Experten?",["Keine Medien benutzen","Informationen mit seriösen Quellen vergleichen","Nur Zeitung lesen"],1]]},
l:{text:"Ich heiße Daniel und bin vor drei Jahren nach Deutschland gekommen. Am Anfang war alles schwierig: die Sprache, die Behörden und das Wetter. Nachdem ich einen Sprachkurs besucht hatte, habe ich schnell Arbeit gefunden. Heute arbeite ich als Elektriker. Ich vermisse meine Familie, aber ich habe hier viele Freunde gefunden.",
qs:[["Wann ist Daniel nach Deutschland gekommen?",["Vor einem Jahr","Vor drei Jahren","Vor zehn Jahren"],1],["Was war am Anfang schwierig?",["Die Sprache und die Behörden","Nur das Essen","Nichts"],0],["Was hat er nach dem Sprachkurs gefunden?",["Eine Wohnung","Arbeit","Ein Auto"],1],["Was vermisst Daniel?",["Das Wetter","Seine Familie","Seine Arbeit"],1]]},
w:{task:"اكتب رأيك: هل يجب أن يكون للأطفال موبايل قبل سن ١٢؟ اذكر مميزات وعيوب، ثم رأيك مع سبب. استخدم أدوات ربط (zwar ... aber، deshalb، obwohl).",min:90,model:"Heute haben schon viele Kinder ein eigenes Handy. Das hat zwar Vorteile, aber auch Nachteile. Ein Vorteil ist, dass Eltern ihre Kinder jederzeit erreichen können. Außerdem können Kinder im Internet viel lernen. Andererseits verbringen viele Kinder zu viel Zeit am Bildschirm, deshalb bewegen sie sich weniger und schlafen schlechter. Außerdem gibt es im Internet gefährliche Inhalte. Meiner Meinung nach sollten Kinder unter zwölf Jahren nur ein einfaches Handy ohne Internet haben. So bleiben sie erreichbar, obwohl sie noch nicht alles im Internet sehen."},
s:{qs:["Wie informieren Sie sich über Nachrichten?","Beschreiben Sie das Gesundheitssystem in Ihrem Heimatland.","Was würden Sie in Ihrer Stadt verbessern?","Sollten alle Menschen ein Ehrenamt machen? Begründen Sie Ihre Meinung."]}}},

{id:"B2.1",title:"العلم والعمل والقضايا الكبيرة",
words:[
["f","Herausforderung","تحدٍّ","هيراوسفوردرونج","Das ist eine große Herausforderung.","هذا تحدٍّ كبير."],
["f","Voraussetzung","شرط مسبق","فورآوسزيتسونج","Deutschkenntnisse sind eine Voraussetzung.","معرفة الألمانية شرط أساسي."],
["f","Auswirkung","أثر / تأثير","آوسفيركونج","Der Klimawandel hat Auswirkungen auf alle.","تغير المناخ له آثار على الجميع."],
["f","Entwicklung","تطوّر","إنتفيكلونج","Die Entwicklung verläuft positiv.","التطور يسير بشكل إيجابي."],
["f","Forschung","بحث علمي","فورشونج","Die Forschung braucht mehr Geld.","البحث العلمي يحتاج مالًا أكثر."],
["m","Fortschritt","تقدّم","فورتشريت","Du machst große Fortschritte.","أنت تحرز تقدمًا كبيرًا."],
["f","Verantwortung","مسؤولية","فيرآنتفورتونج","Er übernimmt die Verantwortung.","هو يتحمل المسؤولية."],
["n","Verhältnis","علاقة / نسبة","فيرهيلتنيس","Wir haben ein gutes Verhältnis.","علاقتنا جيدة."],
["m","Einfluss","تأثير / نفوذ","آينفلوس","Eltern haben großen Einfluss auf Kinder.","الآباء لهم تأثير كبير على الأطفال."],
["f","Nachhaltigkeit","استدامة","ناخهالتيشكايت","Nachhaltigkeit wird immer wichtiger.","الاستدامة تزداد أهمية."],
["n","Bewusstsein","وعي","بيفوستزاين","Das Bewusstsein für Umweltschutz wächst.","الوعي بحماية البيئة يزداد."],
["m","Bereich","مجال","بيرايش","Sie arbeitet im Bereich Marketing.","هي تعمل في مجال التسويق."],
["f","Maßnahme","إجراء","ماسنامه","Die Regierung ergreift neue Maßnahmen.","الحكومة تتخذ إجراءات جديدة."],
["m","Anspruch","حق / مطالبة","أنشبروخ","Sie haben Anspruch auf Urlaub.","لك الحق في إجازة."],
["f","Gleichberechtigung","المساواة في الحقوق","جلايشبيريشتيجونج","Gleichberechtigung ist ein Grundrecht.","المساواة حق أساسي."],
["","berücksichtigen","يأخذ في الاعتبار","بيروكزيشتيجن","Wir müssen alle Meinungen berücksichtigen.","يجب أن نأخذ كل الآراء في الاعتبار."],
["","gewährleisten","يضمن","جيفيرلايستن","Die Sicherheit muss gewährleistet werden.","يجب ضمان الأمان."],
["","sich auseinandersetzen mit","يتعامل بعمق مع","زيش آوسآيناندرزيتسن ميت","Wir setzen uns mit dem Problem auseinander.","نتعامل مع المشكلة بعمق."],
["","nachweisen","يُثبت","ناخفايزن","Die Studie weist den Effekt nach.","الدراسة تثبت التأثير."],
["","verursachen","يسبّب","فيرأورزاخن","Der Sturm verursachte große Schäden.","العاصفة سببت أضرارًا كبيرة."],
["","bewältigen","يتغلب على / ينجز","بيفيلتيجن","Sie hat die Krise gut bewältigt.","تغلبت على الأزمة جيدًا."],
["","erheblich","كبير / ملحوظ","إرهيبليش","Die Kosten sind erheblich gestiegen.","التكاليف ارتفعت بشكل كبير."],
["","umstritten","مثير للجدل","أومشتريتن","Das Thema ist sehr umstritten.","الموضوع مثير للجدل جدًا."],
["","nachhaltig","مستدام","ناخهالتيش","Wir brauchen nachhaltige Lösungen.","نحتاج حلولًا مستدامة."],
["","hingegen","بينما / على العكس","هينجيجن","Er ist ruhig, sie hingegen ist laut.","هو هادئ، بينما هي صاخبة."],
["","infolgedessen","نتيجة لذلك","إنفولجيديسن","Es regnete stark, infolgedessen fiel das Spiel aus.","أمطرت بشدة، ونتيجة لذلك أُلغيت المباراة."]],
grammar:[
{t:"المبني للمجهول في كل الأزمنة ومع الأفعال المساعدة",b:`<div class="tw"><table><tr><th>الزمن</th><th>الشكل</th><th>مثال</th></tr>
<tr><td>Präsens</td><td><i>wird + P II</i></td><td><i>Die Brücke wird gebaut.</i></td></tr>
<tr><td>Präteritum</td><td><i>wurde + P II</i></td><td><i>Die Brücke wurde gebaut.</i></td></tr>
<tr><td>Perfekt</td><td><i>ist + P II + worden</i></td><td><i>Die Brücke ist gebaut worden.</i></td></tr>
<tr><td>Plusquamperfekt</td><td><i>war + P II + worden</i></td><td><i>Die Brücke war gebaut worden.</i></td></tr>
<tr><td>Futur I</td><td><i>wird + P II + werden</i></td><td><i>Die Brücke wird gebaut werden.</i></td></tr>
<tr><td>مع فعل مساعد</td><td><i>Modalverb + P II + werden</i></td><td><i>Die Brücke muss gebaut werden.</i></td></tr></table></div>
<p class="tip">في Perfekt المجهول بنقول <i>worden</i> مش <i>geworden</i>.</p>`},
{t:"مجهول الحالة (Zustandspassiv)",b:`<p><i>sein + Partizip II</i> بيوصف النتيجة مش العملية.</p>
<ul class="exl"><li><i>Die Tür wird geöffnet.</i> — الباب بيتفتح (عملية).</li><li><i>Die Tür ist geöffnet.</i> — الباب مفتوح (حالة).</li><li><i>Das Geschäft war geschlossen.</i></li></ul>`},
{t:"Konjunktiv II في الماضي",b:`<p><i>hätte / wäre + Partizip II</i> لحاجة محصلتش (ندم أو افتراض).</p>
<ul class="exl"><li><i>Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden.</i></li><li><i>Ich wäre gern mitgekommen.</i></li>
<li>مع فعل مساعد: <i>Du hättest früher kommen sollen.</i> — كان المفروض تيجي بدري.</li><li><i>Wir hätten das nicht machen dürfen.</i></li></ul>`},
{t:"اسم الفاعل والمفعول كصفة (Partizip I / II)",b:`<div class="tw"><table><tr><th>النوع</th><th>المعنى</th><th>مثال</th></tr>
<tr><td>Partizip I (مصدر + <i>d</i>)</td><td>بيحصل دلوقتي (فاعل)</td><td><i>das lachende Kind</i> — الطفل الضاحك</td></tr>
<tr><td>Partizip II</td><td>خلص / مجهول</td><td><i>das gekochte Essen</i> — الأكل المطبوخ</td></tr></table></div>
<p>بياخدوا نهايات الصفات العادية: <i>mit dem fahrenden Zug, die geschlossenen Fenster</i>.</p>`},
{t:"تحويل الأفعال لأسماء (Nominalisierung)",b:`<p>اللغة الرسمية والعلمية بتحب الأسماء أكتر من الأفعال.</p>
<div class="tw"><table><tr><th>بالفعل (Verbalstil)</th><th>بالاسم (Nominalstil)</th></tr>
<tr><td><i>Weil die Preise steigen, ...</i></td><td><i>Wegen des Anstiegs der Preise ...</i></td></tr>
<tr><td><i>Nachdem er angekommen war, ...</i></td><td><i>Nach seiner Ankunft ...</i></td></tr>
<tr><td><i>Wenn man die Regeln beachtet, ...</i></td><td><i>Bei Beachtung der Regeln ...</i></td></tr></table></div>
<p>طرق التحويل: <i>-ung</i> (<i>entscheiden → die Entscheidung</i>)، المصدر كاسم (<i>das Lernen</i>)، تغيير الجذر (<i>ankommen → die Ankunft</i>).</p>`},
{t:"تركيبات اسم + فعل (Nomen-Verb-Verbindungen)",b:`<div class="tw"><table><tr><th>التركيب</th><th>المعنى</th></tr>
<tr><td><i>eine Entscheidung treffen</i></td><td>يتخذ قرارًا</td></tr><tr><td><i>in Frage kommen</i></td><td>يكون واردًا</td></tr>
<tr><td><i>Kritik üben an</i></td><td>ينتقد</td></tr><tr><td><i>zur Verfügung stehen</i></td><td>يكون متاحًا</td></tr>
<tr><td><i>in Kraft treten</i></td><td>يدخل حيز التنفيذ</td></tr><tr><td><i>Rücksicht nehmen auf</i></td><td>يراعي</td></tr>
<tr><td><i>Bescheid geben / sagen</i></td><td>يبلّغ</td></tr><tr><td><i>einen Beitrag leisten zu</i></td><td>يساهم في</td></tr></table></div>`}],
exam:{
r:{text:"Die Digitalisierung stellt die Arbeitswelt vor große Herausforderungen. Einerseits werden viele Aufgaben durch Maschinen erledigt, was die Produktivität erheblich steigert. Andererseits befürchten Beschäftigte, dass ihre Arbeitsplätze verloren gehen. Studien zeigen jedoch, dass zwar bestimmte Tätigkeiten wegfallen, gleichzeitig aber neue Berufsfelder entstehen. Voraussetzung dafür ist allerdings, dass Arbeitnehmer bereit sind, sich kontinuierlich weiterzubilden. Unternehmen tragen daher die Verantwortung, entsprechende Maßnahmen anzubieten.",
qs:[["Welcher positive Effekt wird genannt?",["Die Produktivität steigt","Alle Arbeitsplätze bleiben","Die Löhne sinken"],0],["Was befürchten die Beschäftigten?",["Den Verlust ihrer Arbeitsplätze","Mehr Urlaub","Einen Umzug"],0],["Was zeigen Studien?",["Nur Jobs verschwinden","Es entstehen auch neue Berufsfelder","Nichts ändert sich"],1],["Welche Verantwortung haben Unternehmen?",["Weiterbildung anzubieten","Maschinen zu verbieten","Gehälter zu senken"],0]]},
l:{text:"Frau Doktor Keller, Sie forschen zum Thema Schlaf. Was ist Ihr wichtigstes Ergebnis? — Viele Menschen unterschätzen, wie sehr Schlafmangel die Konzentration beeinträchtigt. Wer dauerhaft weniger als sechs Stunden schläft, macht deutlich mehr Fehler. — Was raten Sie? — Feste Schlafzeiten und eine Stunde vor dem Schlafen kein Bildschirm. Das klingt einfach, wird aber selten umgesetzt.",
qs:[["Worüber forscht Frau Keller?",["Über Ernährung","Über Schlaf","Über Sport"],1],["Was ist eine Folge von Schlafmangel?",["Man macht mehr Fehler","Man hat bessere Laune","Man wird stärker"],0],["Ab wann wird es kritisch?",["Weniger als sechs Stunden Schlaf","Weniger als acht Stunden Schlaf","Mehr als zehn Stunden Schlaf"],0],["Was rät Frau Keller?",["Feste Schlafzeiten und kein Bildschirm vor dem Schlafen","Mehr Kaffee trinken","Abends Sport machen"],0]]},
w:{task:"Erörterung: هل يجب أن يكون العمل من البيت (Homeoffice) حقًا لكل موظفي المكاتب؟ اكتب مقدمة، وحججًا مع وحججًا ضد، وخاتمة برأيك. استخدم لغة رسمية.",min:150,model:"Seit einigen Jahren arbeiten immer mehr Menschen von zu Hause aus. Daher wird diskutiert, ob Homeoffice ein gesetzliches Recht werden sollte. Für ein solches Recht spricht vor allem, dass Beschäftigte Zeit und Geld sparen, da der Arbeitsweg entfällt. Darüber hinaus lassen sich Familie und Beruf besser vereinbaren. Studien weisen zudem nach, dass viele Mitarbeitende zu Hause konzentrierter arbeiten. Andererseits darf nicht übersehen werden, dass der persönliche Austausch mit Kollegen verloren gehen kann. Außerdem verschwimmen die Grenzen zwischen Arbeit und Freizeit, was langfristig zu Stress führen kann. Nicht jede Tätigkeit ist zudem für das Homeoffice geeignet. Meiner Auffassung nach wäre ein Recht auf zwei bis drei Tage Homeoffice pro Woche eine angemessene Lösung, da so die Vorteile beider Modelle berücksichtigt würden."},
s:{qs:["Präsentieren Sie kurz Vor- und Nachteile von Elektroautos.","Welche Verantwortung haben Unternehmen für die Umwelt?","Wie hat die Technik Ihr Leben verändert?","Reagieren Sie auf diese Aussage: Ein Studium ist heute nicht mehr nötig."]}}},

{id:"B2.2",title:"النقاش والرأي واللغة الرسمية",
words:[
["f","Auffassung","وجهة نظر","آوففاسونج","Ich bin der Auffassung, dass das falsch ist.","أنا أرى أن هذا خطأ."],
["m","Standpunkt","موقف","شتاندبونكت","Jeder hat seinen eigenen Standpunkt.","كل شخص له موقفه."],
["f","Annahme","افتراض","آننامه","Diese Annahme ist nicht bewiesen.","هذا الافتراض غير مثبت."],
["f","Behauptung","ادّعاء","بيهاوبتونج","Die Behauptung ist falsch.","الادعاء خاطئ."],
["m","Widerspruch","تناقض / اعتراض","فيدرشبروخ","Das steht im Widerspruch zu den Fakten.","هذا يتناقض مع الحقائق."],
["f","Bedingung","شرط","بيدينجونج","Unter einer Bedingung stimme ich zu.","أوافق بشرط واحد."],
["f","Ausnahme","استثناء","آوسنامه","Keine Regel ohne Ausnahme.","لا قاعدة بدون استثناء."],
["f","Wirtschaft","اقتصاد","فيرتشافت","Die Wirtschaft wächst langsam.","الاقتصاد ينمو ببطء."],
["f","Arbeitslosigkeit","بطالة","آربايتسلوزيشكايت","Die Arbeitslosigkeit ist gesunken.","البطالة انخفضت."],
["f","Zuwanderung","الهجرة إلى البلد","تسوفاندرونج","Die Zuwanderung verändert das Land.","الهجرة تغيّر البلد."],
["f","Vielfalt","تنوّع","فيلفالت","Kulturelle Vielfalt ist eine Bereicherung.","التنوع الثقافي إثراء."],
["n","Vorurteil","حكم مسبق / تحيّز","فورأورتايل","Wir müssen Vorurteile abbauen.","يجب أن نتخلص من الأحكام المسبقة."],
["m","Wettbewerb","منافسة","فيتبيفيرب","Der Wettbewerb ist hart.","المنافسة شديدة."],
["n","Ausmaß","حجم / مدى","آوسماس","Das Ausmaß der Schäden ist enorm.","حجم الأضرار هائل."],
["f","Herkunft","أصل","هيركونفت","Die Herkunft spielt keine Rolle.","الأصل لا يهم."],
["","abwägen","يوازن بين","آبفيجن","Man muss Vor- und Nachteile abwägen.","يجب الموازنة بين المميزات والعيوب."],
["","befürworten","يؤيد","بيفورفورتن","Viele befürworten den Vorschlag.","كثيرون يؤيدون الاقتراح."],
["","ablehnen","يرفض","آبليينن","Er lehnt das Angebot ab.","هو يرفض العرض."],
["","hervorheben","يُبرز / يؤكد","هيرفورهيبن","Sie hebt die Vorteile hervor.","هي تبرز المميزات."],
["","einräumen","يعترف / يُقرّ","آينرويمن","Er räumt ein, dass er Fehler gemacht hat.","يعترف بأنه أخطأ."],
["","widerlegen","يدحض","فيدرليجن","Die These wurde widerlegt.","تم دحض الفرضية."],
["","zweifellos","بلا شك","تسفايفلوس","Das ist zweifellos richtig.","هذا صحيح بلا شك."],
["","vorübergehend","مؤقتًا","فوروبرجيهيند","Das Geschäft ist vorübergehend geschlossen.","المحل مغلق مؤقتًا."],
["","angemessen","مناسب / ملائم","أنجيميسن","Der Preis ist angemessen.","السعر مناسب."],
["","sofern","بشرط أن / طالما","زوفيرن","Sofern es nicht regnet, kommen wir.","سنأتي طالما لم تمطر."],
["","dennoch","ومع ذلك","دينوخ","Es war schwer, dennoch hat er es geschafft.","كان صعبًا، ومع ذلك نجح."]],
grammar:[
{t:"الكلام المنقول (Konjunktiv I)",b:`<p>في الأخبار والكتابة الرسمية لنقل كلام شخص من غير ما تأكده. الجذر + نهايات <i>-e, -est, -e, -en, -et, -en</i>.</p>
<div class="tw"><table><tr><th></th><th>sein</th><th>haben</th><th>kommen</th></tr>
<tr><td><i>ich</i></td><td><i>sei</i></td><td><i>(hätte)</i></td><td><i>(käme)</i></td></tr>
<tr><td><i>du</i></td><td><i>sei(e)st</i></td><td><i>habest</i></td><td><i>kommest</i></td></tr>
<tr><td><i>er/sie/es</i></td><td><i>sei</i></td><td><i>habe</i></td><td><i>komme</i></td></tr>
<tr><td><i>wir/sie</i></td><td><i>seien</i></td><td><i>(hätten)</i></td><td><i>(kämen)</i></td></tr></table></div>
<p class="tip">لو الشكل مطابق للمضارع العادي، بنستخدم Konjunktiv II بداله (اللي بين أقواس).</p>
<ul class="exl"><li><i>Der Minister sagte, die Lage sei stabil.</i></li><li><i>Sie erklärte, sie habe keine Zeit.</i></li><li>ماضي: <i>Er behauptet, er habe das nicht gewusst.</i></li></ul>`},
{t:"الصفات الممتدة (erweiterte Partizipialattribute)",b:`<p>جملة صلة كاملة بتتحط بين الأداة والاسم. منتشرة جدًا في الجرايد والنصوص العلمية.</p>
<ul class="exl"><li><i>die Preise, die seit Jahren steigen → die seit Jahren steigenden Preise</i></li>
<li><i>das Buch, das im Jahr 2020 veröffentlicht wurde → das im Jahr 2020 veröffentlichte Buch</i></li>
<li><i>die von der Regierung beschlossenen Maßnahmen</i> — الإجراءات التي قررتها الحكومة.</li></ul>
<p class="tip">عشان تفهمها: دوّر على الأداة، بعدين اقفز لآخر اسم، وبعدين اقرأ اللي في النص كأنه جملة صلة.</p>`},
{t:"بدائل المبني للمجهول (Passiversatzformen)",b:`<div class="tw"><table><tr><th>البديل</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>sich lassen + Infinitiv</i></td><td>ممكن يتعمل</td><td><i>Das Problem lässt sich lösen.</i></td></tr>
<tr><td><i>sein + zu + Infinitiv</i></td><td>ممكن / لازم يتعمل</td><td><i>Die Aufgabe ist bis Montag zu erledigen.</i></td></tr>
<tr><td><i>-bar / -lich</i></td><td>قابل لـ</td><td><i>Das Wasser ist trinkbar.</i></td></tr>
<tr><td><i>man</i></td><td>فاعل عام</td><td><i>Man spricht hier Deutsch.</i></td></tr></table></div>`},
{t:"المعنى الذاتي للأفعال المساعدة",b:`<div class="tw"><table><tr><th>الفعل</th><th>المعنى الذاتي</th><th>مثال</th></tr>
<tr><td><i>müssen</i></td><td>أكيد (استنتاج قوي)</td><td><i>Er muss krank sein.</i> — أكيد عيان.</td></tr>
<tr><td><i>dürfte</i></td><td>غالبًا</td><td><i>Das dürfte stimmen.</i></td></tr>
<tr><td><i>können</i></td><td>ممكن</td><td><i>Sie kann noch im Büro sein.</i></td></tr>
<tr><td><i>sollen</i></td><td>يُقال إنّ</td><td><i>Er soll sehr reich sein.</i></td></tr>
<tr><td><i>wollen</i></td><td>يدّعي إنّ</td><td><i>Sie will das allein geschafft haben.</i></td></tr></table></div>`},
{t:"الكلمات الصغيرة (Modalpartikeln)",b:`<div class="tw"><table><tr><th>الكلمة</th><th>الإحساس اللي بتديه</th><th>مثال</th></tr>
<tr><td><i>doch</i></td><td>تأكيد / حثّ</td><td><i>Komm doch mit!</i> — ما تيجي معانا!</td></tr>
<tr><td><i>ja</i></td><td>حاجة معروفة / تعجب</td><td><i>Das ist ja toll!</i></td></tr>
<tr><td><i>mal</i></td><td>تخفيف الطلب</td><td><i>Kannst du mal kommen?</i></td></tr>
<tr><td><i>eben / halt</i></td><td>هي كده</td><td><i>Das ist halt so.</i></td></tr>
<tr><td><i>wohl</i></td><td>تخمين</td><td><i>Er ist wohl schon weg.</i></td></tr>
<tr><td><i>denn</i></td><td>اهتمام في السؤال</td><td><i>Was machst du denn hier?</i></td></tr></table></div>`},
{t:"أدوات ربط رسمية",b:`<div class="tw"><table><tr><th>الأداة</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>indem</i></td><td>عن طريق</td><td><i>Man lernt, indem man übt.</i></td></tr>
<tr><td><i>sodass</i></td><td>بحيث</td><td><i>Es regnete, sodass das Spiel ausfiel.</i></td></tr>
<tr><td><i>zumal</i></td><td>خصوصًا وأنّ</td><td><i>Ich bleibe hier, zumal es spät ist.</i></td></tr>
<tr><td><i>insofern als</i></td><td>من حيث إنّ</td><td><i>Das ist richtig, insofern als ...</i></td></tr>
<tr><td><i>folglich</i></td><td>بالتالي</td><td><i>Er war krank, folglich fehlte er.</i></td></tr>
<tr><td><i>wohingegen</i></td><td>في حين أنّ</td><td><i>Ich mag Tee, wohingegen sie Kaffee mag.</i></td></tr></table></div>`}],
exam:{
r:{text:"In der Debatte um Zuwanderung wird häufig übersehen, dass Deutschland aufgrund des demografischen Wandels auf Fachkräfte aus dem Ausland angewiesen ist. Kritiker wenden ein, die Integration sei mit erheblichen Kosten verbunden. Befürworter hingegen betonen, langfristig überwiege der wirtschaftliche Nutzen. Unbestritten ist, dass gelungene Integration Zeit braucht und sowohl von den Zugewanderten als auch von der Gesellschaft Offenheit verlangt.",
qs:[["Warum braucht Deutschland Fachkräfte aus dem Ausland?",["Wegen des demografischen Wandels","Weil es zu viele Firmen gibt","Wegen des Tourismus"],0],["Was sagen die Kritiker?",["Integration kostet viel","Es gibt zu wenig Wohnungen","Die Sprache ist unwichtig"],0],["Was betonen die Befürworter?",["Langfristig überwiegt der wirtschaftliche Nutzen","Es gibt nur kurzfristige Gewinne","Integration ist nicht nötig"],0],["Was ist unbestritten?",["Integration braucht Zeit und Offenheit von beiden Seiten","Integration ist sehr einfach","Nur Zugewanderte müssen sich anpassen"],0]]},
l:{text:"Liebe Zuhörerinnen und Zuhörer, der Bürgermeister kündigte gestern an, die Innenstadt ab nächstem Jahr weitgehend autofrei zu gestalten. Er betonte, die Luftqualität habe sich in den letzten Jahren kaum verbessert. Einzelhändler befürchten dagegen Umsatzeinbußen, da Kunden nicht mehr direkt vor dem Geschäft parken könnten. Eine endgültige Entscheidung soll im Herbst nach einer Bürgerbefragung fallen.",
qs:[["Was plant der Bürgermeister?",["Eine weitgehend autofreie Innenstadt","Neue Parkhäuser","Weniger Busse"],0],["Wie begründet er den Plan?",["Die Luftqualität hat sich kaum verbessert","Es gibt zu viele Touristen","Die Bahn ist zu laut"],0],["Was befürchten die Einzelhändler?",["Weniger Umsatz","Höhere Mieten","Mehr Diebstahl"],0],["Wann soll entschieden werden?",["Im Frühling","Im Herbst nach einer Bürgerbefragung","Sofort"],1]]},
w:{task:"Stellungnahme: «Soziale Netzwerke schaden der Demokratie mehr, als sie ihr nützen.» ناقش هذه المقولة بشكل رسمي مع أمثلة، واستخدم الكلام المنقول (Konjunktiv I) مرة على الأقل.",min:180,model:"Kaum ein Medium hat die öffentliche Debatte so stark verändert wie die sozialen Netzwerke. Kritiker behaupten, sie schadeten der Demokratie, da sich Falschinformationen rasant verbreiteten und Algorithmen extreme Meinungen bevorzugten. Tatsächlich lässt sich beobachten, dass viele Nutzer fast ausschließlich Inhalte sehen, die ihre eigene Meinung bestätigen. Infolgedessen nimmt die Polarisierung zu. Dennoch muss man einräumen, dass soziale Netzwerke auch erhebliche Vorteile bieten. Sie ermöglichen es Bürgern, sich ohne große Kosten zu informieren und politisch zu engagieren. Zahlreiche Protestbewegungen wären ohne sie kaum denkbar gewesen. Wägt man Vor- und Nachteile ab, so zeigt sich, dass nicht die Netzwerke selbst das Problem sind, sondern der Umgang mit ihnen. Meiner Auffassung nach sollte daher sowohl die Medienkompetenz in Schulen gestärkt als auch die Verantwortung der Plattformen gesetzlich geregelt werden."},
s:{qs:["Diskutieren Sie: Sollte ein bedingungsloses Grundeinkommen eingeführt werden?","Ein Experte sagt: Die Mieten werden weiter steigen. Geben Sie seine Meinung in indirekter Rede wieder und nehmen Sie Stellung.","Welche Rolle spielen Vorurteile in der Gesellschaft?","Wägen Sie ab: Ist die Großstadt oder das Land besser für Familien?"]}}}
,{id:"C1.1",title:"اللغة الأكاديمية والتعبير الدقيق",
words:[
["m","Aufwand","مجهود / تكلفة","آوففاند","Der Aufwand hat sich gelohnt.","المجهود كان يستاهل."],
["m","Ansatz","منهج / مدخل","آنزاتس","Das ist ein interessanter Ansatz.","ده مدخل مثير للاهتمام."],
["m","Bestandteil","جزء أساسي","بيشتانتتايل","Sport ist ein fester Bestandteil meines Alltags.","الرياضة جزء ثابت من يومي."],
["n","Defizit","عجز / نقص","ديفيتسيت","Das Haushaltsdefizit wächst.","عجز الميزانية بيزيد."],
["f","Diskrepanz","تناقض / فجوة","ديسكريبانتس","Es gibt eine Diskrepanz zwischen Theorie und Praxis.","فيه فجوة بين النظرية والتطبيق."],
["f","Gegebenheit","ظرف / واقع قائم","جيجيبنهايت","Wir müssen uns den Gegebenheiten anpassen.","لازم نتكيف مع الظروف."],
["f","Grundlage","أساس","جرونتلاجه","Das bildet die Grundlage für alles Weitere.","ده أساس كل اللي بعده."],
["m","Hintergrund","خلفية","هينترجرونت","Vor diesem Hintergrund ist die Entscheidung verständlich.","في ضوء الخلفية دي القرار مفهوم."],
["f","Kontroverse","جدل","كونتروفيرزه","Das Thema löste eine Kontroverse aus.","الموضوع عمل جدل."],
["m","Konsens","توافق / إجماع","كونزينس","Wir haben einen Konsens gefunden.","وصلنا لتوافق."],
["n","Kriterium","معيار","كريتيريوم","Welche Kriterien sind entscheidend?","إيه المعايير الحاسمة؟"],
["n","Merkmal","سمة / علامة مميزة","ميركمال","Ein typisches Merkmal ist die Farbe.","من السمات المميزة اللون."],
["f","Perspektive","منظور / آفاق","بيرسبيكتيفه","Aus dieser Perspektive sieht es anders aus.","من المنظور ده الموضوع مختلف."],
["n","Phänomen","ظاهرة","فينومين","Das ist ein gesellschaftliches Phänomen.","دي ظاهرة اجتماعية."],
["f","Ressource","مورد","ريسورسه","Wir müssen Ressourcen sparen.","لازم نوفّر الموارد."],
["f","Tendenz","اتجاه / ميل","تيندينتس","Die Tendenz ist steigend.","الاتجاه في زيادة."],
["f","Umsetzung","تنفيذ","أومزيتسونج","Die Umsetzung des Plans dauert.","تنفيذ الخطة هياخد وقت."],
["","ableiten","يستنتج / يشتق","آبلايتن","Daraus lässt sich ableiten, dass ...","من هنا نقدر نستنتج إن ..."],
["","anstreben","يسعى إلى","آنشتريبن","Wir streben eine Lösung an.","بنسعى لحل."],
["","beurteilen","يقيّم / يحكم على","بيأورتايلن","Das kann ich nicht beurteilen.","مقدرش أحكم على ده."],
["","erörtern","يناقش بالتفصيل","إرأؤرترن","Im Aufsatz erörtern wir das Problem.","في المقال بنناقش المشكلة."],
["","ausschlaggebend","حاسم","آوسشلاججيبند","Der Preis war ausschlaggebend.","السعر كان العامل الحاسم."],
["","maßgeblich","جوهري / مؤثر بشكل كبير","ماسجيبليش","Sie war maßgeblich am Erfolg beteiligt.","كان ليها دور كبير في النجاح."],
["","nachvollziehbar","مفهوم / منطقي","ناخفولتسيبار","Ihre Reaktion ist nachvollziehbar.","رد فعلها مفهوم."]],
grammar:[
{t:"أدوات ربط متقدمة",b:`<div class="tw"><table><tr><th>الأداة</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>wohingegen</i></td><td>في حين أنّ</td><td><i>Er liebt Kaffee, wohingegen sie Tee bevorzugt.</i></td></tr>
<tr><td><i>zumal</i></td><td>خصوصًا وأنّ</td><td><i>Ich bleibe zu Hause, zumal es regnet.</i></td></tr>
<tr><td><i>sofern</i></td><td>بشرط أنّ</td><td><i>Sofern nichts dazwischenkommt, komme ich.</i></td></tr>
<tr><td><i>insofern als</i></td><td>من حيث إنّ</td><td><i>Er hat recht, insofern als die Kosten steigen.</i></td></tr>
<tr><td><i>geschweige denn</i></td><td>ناهيك عن</td><td><i>Er kann kaum laufen, geschweige denn rennen.</i></td></tr></table></div>
<p class="tip">كل الأدوات دي بتودّي الفعل لآخر الجملة، ما عدا <i>geschweige denn</i>.</p>`},
{t:"تركيبات الفعل والاسم الرسمية (Funktionsverbgefüge)",b:`<p>في اللغة الرسمية بنستخدم اسم + فعل بسيط بدل فعل واحد.</p>
<div class="tw"><table><tr><th>التركيب</th><th>المعنى</th><th>بدل</th></tr>
<tr><td><i>in Betracht ziehen</i></td><td>يأخذ في الاعتبار</td><td><i>berücksichtigen</i></td></tr>
<tr><td><i>zur Sprache bringen</i></td><td>يطرح موضوع</td><td><i>ansprechen</i></td></tr>
<tr><td><i>zum Ausdruck bringen</i></td><td>يعبّر عن</td><td><i>ausdrücken</i></td></tr>
<tr><td><i>in Anspruch nehmen</i></td><td>يستفيد من / يستهلك</td><td><i>nutzen</i></td></tr>
<tr><td><i>eine Rolle spielen</i></td><td>يلعب دور</td><td><i>wichtig sein</i></td></tr>
<tr><td><i>zur Verfügung stellen</i></td><td>يوفّر</td><td><i>bereitstellen</i></td></tr></table></div>`},
{t:"المعنى الذاتي للأفعال المساعدة في الماضي",b:`<p>فعل مساعد + <i>Partizip II</i> + <i>haben/sein</i>: بنعبّر بيه عن استنتاج أو كلام منقول عن الماضي.</p>
<ul class="exl"><li><i>Er muss es gewusst haben.</i> — أكيد كان عارف.</li><li><i>Sie soll sehr reich gewesen sein.</i> — بيقولوا إنها كانت غنية جدًا.</li><li><i>Er will nichts gesehen haben.</i> — بيدّعي إنه مشافش حاجة.</li><li><i>Das dürfte schwierig gewesen sein.</i> — غالبًا كان صعب.</li></ul>`},
{t:"جمل اسم الفاعل المختصرة",b:`<p>في الكتابة الراقية بنختصر الجملة الفرعية لـ <i>Partizip</i> في الأول:</p>
<ul class="exl"><li><i>Als er am Bahnhof angekommen war, rief er an. → Am Bahnhof angekommen, rief er an.</i></li><li><i>Weil sie von der Reise erschöpft war, schlief sie sofort. → Von der Reise erschöpft, schlief sie sofort.</i></li><li><i>Laut lachend verließ er den Raum.</i> — خرج من الأوضة وهو بيضحك بصوت عالي.</li></ul>`},
{t:"تحويل الجمل الفرعية لعبارات بحرف جر (Nominalisierung von Nebensätzen)",b:`<p>في النصوص الرسمية والعلمية بنحوّل الجملة الفرعية كلها لحرف جر + اسم. الفعل بيبقى اسم، والفاعل بيبقى Genitiv أو أداة ملكية.</p>
<div class="tw"><table><tr><th>أداة الربط</th><th>حرف الجر</th><th>بالفعل (Verbalstil)</th><th>بالاسم (Nominalstil)</th></tr>
<tr><td><i>weil / da</i></td><td><i>wegen / aufgrund</i> + Gen</td><td><i>Weil es stark regnete, ...</i></td><td><i>Wegen des starken Regens ...</i></td></tr>
<tr><td><i>obwohl</i></td><td><i>trotz</i> + Gen</td><td><i>Obwohl er krank war, ...</i></td><td><i>Trotz seiner Krankheit ...</i></td></tr>
<tr><td><i>wenn / falls</i></td><td><i>bei</i> + Dat</td><td><i>Wenn es Probleme gibt, ...</i></td><td><i>Bei Problemen ...</i></td></tr>
<tr><td><i>um ... zu / damit</i></td><td><i>zu / zum / zur</i> + Dat</td><td><i>Um die Kosten zu senken, ...</i></td><td><i>Zur Senkung der Kosten ...</i></td></tr>
<tr><td><i>nachdem</i></td><td><i>nach</i> + Dat</td><td><i>Nachdem er angekommen war, ...</i></td><td><i>Nach seiner Ankunft ...</i></td></tr>
<tr><td><i>bevor</i></td><td><i>vor</i> + Dat</td><td><i>Bevor die Prüfung beginnt, ...</i></td><td><i>Vor Beginn der Prüfung ...</i></td></tr>
<tr><td><i>während</i></td><td><i>während</i> + Gen</td><td><i>Während sie studierte, ...</i></td><td><i>Während ihres Studiums ...</i></td></tr>
<tr><td><i>indem</i></td><td><i>durch</i> + Akk</td><td><i>Indem man mehr Sport treibt, ...</i></td><td><i>Durch mehr Sport ...</i></td></tr>
<tr><td><i>seit(dem)</i></td><td><i>seit</i> + Dat</td><td><i>Seitdem sie umgezogen ist, ...</i></td><td><i>Seit ihrem Umzug ...</i></td></tr></table></div>
<p class="tip">الفاعل بيروح Genitiv: <i>Der Präsident reist ab.</i> ← <i>die Abreise des Präsidenten</i>. ولو ضمير بنستخدم أداة ملكية: <i>Er reist ab.</i> ← <i>seine Abreise</i>.</p>`},
{t:"الإحالة المسبقة: darauf, dass ... / es ..., dass (Korrelate)",b:`<p>لما فعل بحرف جر ثابت يجي بعده جملة كاملة، بنحط في الجملة الرئيسية <i>da(r) + حرف الجر</i> كإشارة للجملة اللي جاية.</p>
<div class="tw"><table><tr><th>الفعل</th><th>مع اسم</th><th>مع جملة</th></tr>
<tr><td><i>sich freuen auf</i></td><td><i>Ich freue mich auf den Urlaub.</i></td><td><i>Ich freue mich darauf, dass du kommst.</i></td></tr>
<tr><td><i>bestehen auf</i></td><td><i>Er besteht auf einer Antwort.</i></td><td><i>Er besteht darauf, sofort eine Antwort zu bekommen.</i></td></tr>
<tr><td><i>abhängen von</i></td><td><i>Es hängt vom Wetter ab.</i></td><td><i>Es hängt davon ab, ob es regnet.</i></td></tr>
<tr><td><i>sich gewöhnen an</i></td><td><i>Ich gewöhne mich an die Kälte.</i></td><td><i>Ich gewöhne mich daran, früh aufzustehen.</i></td></tr>
<tr><td><i>hinweisen auf</i></td><td><i>Er weist auf die Gefahr hin.</i></td><td><i>Er weist darauf hin, dass es gefährlich ist.</i></td></tr></table></div>
<p>لو حرف الجر بيبدأ بحرف متحرك بنزوّد <i>r</i>: <i>darauf, daran, darüber</i>. وإلا: <i>davon, damit, dafür</i>.</p>
<p>وفيه <i>es</i> كإشارة للجملة اللي جاية: <i>Es freut mich, dass du da bist.</i> لكن لو قدّمنا الجملة الفرعية، الـ <i>es</i> بيختفي: <i>Dass du da bist, freut mich.</i></p>
<p class="tip">مع <i>dass</i> و <i>ob</i> و <i>zu</i> + مصدر بتشتغل نفس الطريقة. ومع الأشخاص مش بنستخدم <i>da-</i>: <i>Ich warte auf ihn.</i></p>`}],
exam:{
r:{text:"Die Vier-Tage-Woche wird in Deutschland zunehmend diskutiert. Befürworter argumentieren, eine kürzere Arbeitszeit steigere die Motivation und senke die Zahl der Krankheitstage. Erste Pilotprojekte scheinen diese Annahme zu bestätigen: Viele Unternehmen berichten von gleichbleibender Produktivität bei höherer Zufriedenheit der Beschäftigten. Kritiker geben hingegen zu bedenken, dass sich das Modell nicht auf alle Branchen übertragen lasse, zumal in Pflege und Handwerk bereits ein erheblicher Fachkräftemangel herrsche.",
qs:[["Was behaupten die Befürworter?",["Die Motivation steigt und es gibt weniger Krankheitstage","Die Löhne steigen","Die Arbeit wird einfacher"],0],["Was zeigen erste Pilotprojekte?",["Die Produktivität bleibt gleich, die Zufriedenheit steigt","Die Produktivität sinkt stark","Niemand ist zufrieden"],0],["Was ist das Hauptargument der Kritiker?",["Das Modell passt nicht für alle Branchen","Es ist zu teuer für den Staat","Die Beschäftigten wollen es nicht"],0],["Warum ist es in Pflege und Handwerk schwierig?",["Wegen des Fachkräftemangels","Wegen zu hoher Löhne","Wegen neuer Gesetze"],0]]},
l:{text:"Guten Abend und willkommen zu unserer Diskussionsrunde. Heute geht es um die Frage, ob künstliche Intelligenz Lehrkräfte ersetzen kann. Professorin Wagner betont, KI könne zwar individuelles Üben erleichtern, die soziale Rolle der Lehrkraft sei jedoch unersetzlich. Ihr Kollege Herr Brandt sieht das ähnlich, warnt aber davor, die Entwicklung zu verschlafen: Schulen müssten jetzt in Fortbildung investieren.",
qs:[["Worum geht es in der Diskussion?",["Ob KI Lehrkräfte ersetzen kann","Ob Schulen geschlossen werden","Wie teuer Computer sind"],0],["Was sagt Professorin Wagner?",["KI erleichtert das Üben, aber die soziale Rolle der Lehrkraft bleibt wichtig","KI ist gefährlich","Lehrkräfte sind überflüssig"],0],["Wie steht Herr Brandt zu ihrer Meinung?",["Er sieht es ähnlich","Er widerspricht völlig","Er hat keine Meinung"],0],["Was fordert Herr Brandt?",["Investitionen in Fortbildung","Ein Verbot von KI","Mehr Ferien"],0]]},
w:{task:"Erörterung: «Sollte die Vier-Tage-Woche gesetzlich eingeführt werden?» اكتب مقالًا رسميًا فيه مقدمة وحجج مع وضد وخاتمة، واستخدم أدوات ربط متقدمة.",min:220,model:"Die Forderung nach einer Vier-Tage-Woche gewinnt zunehmend an Bedeutung. Befürworter führen an, dass eine kürzere Arbeitszeit die Gesundheit der Beschäftigten fördere und die Produktivität keineswegs sinken müsse. Pilotprojekte stützen diese Annahme. Darüber hinaus könnte ein solches Modell die Attraktivität vieler Berufe erhöhen, zumal junge Menschen zunehmend Wert auf Freizeit legen. Andererseits ist zu bedenken, dass nicht jede Branche gleichermaßen geeignet ist. In der Pflege etwa würde eine Verkürzung der Arbeitszeit den bestehenden Personalmangel weiter verschärfen. Zudem befürchten kleinere Betriebe steigende Kosten. Wägt man die Argumente ab, so erscheint eine gesetzliche Pflicht wenig sinnvoll. Vielmehr sollten Unternehmen die Möglichkeit erhalten, flexible Modelle zu erproben, sofern die betrieblichen Gegebenheiten dies zulassen."},
s:{qs:["Nehmen Sie Stellung: Sollte Englisch an deutschen Universitäten die Hauptsprache werden?","Erklären Sie einen komplexen Sachverhalt aus Ihrem Beruf oder Studium.","Welche Rolle spielt künstliche Intelligenz in Ihrem Alltag?","Wie ließe sich der Fachkräftemangel lösen? Machen Sie konkrete Vorschläge."]}}},
{id:"C1.2",title:"النقاش والإقناع واللغة الرسمية",
words:[
["f","Abhängigkeit","اعتماد / إدمان","آبهينجيشكايت","Die Abhängigkeit von Öl ist groß.","الاعتماد على البترول كبير."],
["f","Akzeptanz","قبول","آكتسيبتانتس","Die Akzeptanz in der Bevölkerung wächst.","القبول عند الناس بيزيد."],
["f","Auseinandersetzung","مواجهة / نقاش معمّق","آوسآيناندرزيتسونج","Es kam zu einer heftigen Auseinandersetzung.","حصلت مواجهة حادة."],
["m","Einwand","اعتراض","آينفاند","Haben Sie Einwände?","عندك اعتراضات؟"],
["f","Gewährleistung","ضمان","جيفيرلايستونج","Die Gewährleistung beträgt zwei Jahre.","الضمان سنتين."],
["m","Kompromiss","حل وسط","كومبروميس","Beide Seiten schlossen einen Kompromiss.","الطرفين وصلوا لحل وسط."],
["f","Maßnahme","إجراء","ماسنامه","Die Maßnahmen zeigen Wirkung.","الإجراءات بدأت تأثر."],
["n","Spannungsfeld","مجال توتر","شبانونجسفيلت","Wir bewegen uns im Spannungsfeld zwischen Freiheit und Sicherheit.","إحنا بين الحرية والأمان."],
["f","Stellungnahme","بيان / إبداء رأي","شتيلونجنامه","Bitte schreiben Sie eine Stellungnahme.","اكتب بيان برأيك."],
["n","Vorgehen","طريقة التصرف","فورجيهن","Das Vorgehen der Polizei wurde kritisiert.","تصرف البوليس اتنقد."],
["","angesichts","في ضوء / بالنظر إلى","آنجيزيشتس","Angesichts der Lage müssen wir handeln.","في ضوء الوضع لازم نتصرف."],
["","aufgrund","بسبب","آوفجرونت","Aufgrund des Wetters fällt das Spiel aus.","بسبب الجو الماتش اتلغى."],
["","hinsichtlich","فيما يتعلق بـ","هينزيشتليش","Hinsichtlich der Kosten gibt es Fragen.","فيه أسئلة بخصوص التكاليف."],
["","bezüglich","بخصوص","بيتسوجليش","Bezüglich Ihrer Anfrage melden wir uns.","بخصوص طلبك هنتواصل معاك."],
["","ungeachtet","بغض النظر عن","أونجيآختيت","Ungeachtet aller Kritik hielt er an seinem Plan fest.","رغم كل النقد تمسك بخطته."],
["","einwenden","يعترض","آينفيندن","Man könnte einwenden, dass ...","ممكن حد يعترض إن ..."],
["","befürchten","يخشى","بيفورشتن","Experten befürchten eine Krise.","الخبراء خايفين من أزمة."],
["","bestreiten","ينكر","بيشترايتن","Er bestreitet die Vorwürfe.","بينكر الاتهامات."],
["","vertreten","يمثّل / يتبنى (رأي)","فيرتريتن","Ich vertrete eine andere Meinung.","أنا ليّا رأي تاني."],
["","fragwürdig","مشكوك فيه","فراجفورديش","Diese Methode ist fragwürdig.","الطريقة دي مشكوك فيها."],
["","unumgänglich","لا مفر منه","أونأومجينجليش","Reformen sind unumgänglich.","الإصلاحات ضرورية."],
["","zwangsläufig","حتمًا","تسفانجسلويفيش","Das führt zwangsläufig zu Problemen.","ده هيأدي حتمًا لمشاكل."],
["","wenngleich","رغم أنّ","فينجلايش","Er nahm teil, wenngleich er müde war.","شارك رغم إنه كان تعبان."],
["","vorausgesetzt","بشرط أنّ","فورآوسجيزيتست","Wir fahren los, vorausgesetzt, das Wetter ist gut.","هنتحرك بشرط إن الجو يكون كويس."]],
grammar:[
{t:"المقارنات غير الحقيقية: als ob / als wenn / als",b:`<p>بعد <i>als ob</i> و <i>als wenn</i> الفعل في الآخر، وبعد <i>als</i> لوحدها الفعل بييجي على طول بعدها. وبنستخدم Konjunktiv II.</p>
<ul class="exl"><li><i>Er tut so, als ob er krank wäre.</i> — بيعمل نفسه عيان.</li><li><i>Er tut so, als wäre er krank.</i> — نفس المعنى.</li><li><i>Sie sah aus, als hätte sie nicht geschlafen.</i> — شكلها كأنها منامتش.</li></ul>`},
{t:"المبني للمجهول مع الأفعال المساعدة في الماضي",b:`<div class="tw"><table><tr><th>الزمن</th><th>مثال</th></tr>
<tr><td>Präteritum</td><td><i>Das Problem musste gelöst werden.</i></td></tr>
<tr><td>Perfekt</td><td><i>Das Problem hat gelöst werden müssen.</i></td></tr>
<tr><td>Konjunktiv II Vergangenheit</td><td><i>Das Problem hätte früher gelöst werden müssen.</i></td></tr></table></div>
<p class="tip">في Perfekt مع فعل مساعد بنستخدم المصدر بدل Partizip: <i>hat ... werden müssen</i>.</p>`},
{t:"حروف الجر الرسمية مع Genitiv",b:`<div class="tw"><table><tr><th>الحرف</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>angesichts</i></td><td>في ضوء</td><td><i>angesichts der Krise</i></td></tr>
<tr><td><i>aufgrund</i></td><td>بسبب</td><td><i>aufgrund des Streiks</i></td></tr>
<tr><td><i>hinsichtlich / bezüglich</i></td><td>بخصوص</td><td><i>bezüglich Ihrer Anfrage</i></td></tr>
<tr><td><i>infolge</i></td><td>نتيجة لـ</td><td><i>infolge des Unfalls</i></td></tr>
<tr><td><i>mittels</i></td><td>بواسطة</td><td><i>mittels einer App</i></td></tr>
<tr><td><i>zwecks</i></td><td>بغرض</td><td><i>zwecks Klärung</i></td></tr>
<tr><td><i>ungeachtet</i></td><td>بغض النظر عن</td><td><i>ungeachtet der Kritik</i></td></tr></table></div>`},
{t:"التعبيرات الاصطلاحية الشائعة",b:`<ul class="exl"><li><i>jemandem die Daumen drücken</i> — يتمنى التوفيق لحد</li><li><i>auf dem Holzweg sein</i> — يكون غلطان خالص</li><li><i>ins Fettnäpfchen treten</i> — يقول حاجة محرجة</li><li><i>die Nase voll haben</i> — زهق</li><li><i>etwas auf die lange Bank schieben</i> — يأجّل حاجة</li><li><i>Tomaten auf den Augen haben</i> — مش شايف الواضح</li></ul>`},
{t:"جمل الشرط من غير wenn (uneingeleitete Konditionalsätze)",b:`<p>في الكلام الرسمي والمكتوب ممكن نشيل <i>wenn</i> ونبدأ الجملة بالفعل نفسه. الجملة الرئيسية بعدها بتبدأ بالفعل برضه، وممكن نزوّد <i>so</i> أو <i>dann</i>.</p>
<ul class="exl"><li><i>Wenn er zu spät kommt, fangen wir ohne ihn an.</i> ← <i>Kommt er zu spät, (dann) fangen wir ohne ihn an.</i></li>
<li><i>Wenn ich Zeit hätte, würde ich mitkommen.</i> ← <i>Hätte ich Zeit, würde ich mitkommen.</i></li>
<li><i>Wäre ich an deiner Stelle gewesen, hätte ich anders reagiert.</i> — لو كنت مكانك كنت اتصرفت بشكل تاني.</li>
<li><i>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</i> — لو عندك أي أسئلة، تواصل معانا (أسلوب الخطابات الرسمية).</li></ul>
<div class="tw"><table><tr><th>تعبيرات شرط رسمية</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>vorausgesetzt, (dass)</i></td><td>بشرط إنّ</td><td><i>Wir kommen, vorausgesetzt, es regnet nicht.</i></td></tr>
<tr><td><i>angenommen, (dass)</i></td><td>لو افترضنا إنّ</td><td><i>Angenommen, du gewinnst, was machst du?</i></td></tr>
<tr><td><i>im Falle, dass</i></td><td>في حالة إنّ</td><td><i>Im Falle, dass der Zug ausfällt, nehmen wir den Bus.</i></td></tr>
<tr><td><i>gesetzt den Fall, (dass)</i></td><td>هب إنّ</td><td><i>Gesetzt den Fall, er sagt nein, was dann?</i></td></tr></table></div>
<p class="tip">جملة <i>Sollten Sie ...</i> معناها "لو" مش "المفروض"، وهي من أشهر الجمل في الإيميلات الرسمية.</p>`},
{t:"التنازل المتقدم: so ... auch / wie ... auch / wenngleich / ungeachtet",b:`<p>بنستخدم التراكيب دي عشان نقول "مهما" أو "رغم" بأسلوب أرقى من <i>obwohl</i>.</p>
<div class="tw"><table><tr><th>التركيب</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><i>so + صفة + auch</i></td><td>مهما كان</td><td><i>So sehr ich ihn mag, ich kann ihm nicht helfen.</i></td></tr>
<tr><td><i>wie + صفة + auch</i></td><td>مهما كان</td><td><i>Wie schwer es auch sein mag, wir geben nicht auf.</i></td></tr>
<tr><td><i>was / wer / wo ... auch (immer)</i></td><td>أيًا كان / مهما</td><td><i>Was auch immer passiert, ich bleibe bei dir.</i></td></tr>
<tr><td><i>wenngleich / obgleich / obschon</i></td><td>رغم إنّ (رسمي)</td><td><i>Er kam, wenngleich er müde war.</i></td></tr>
<tr><td><i>selbst wenn / auch wenn</i></td><td>حتى لو</td><td><i>Selbst wenn es regnet, findet das Fest statt.</i></td></tr>
<tr><td><i>ungeachtet</i> + Gen</td><td>رغم / بغض النظر عن</td><td><i>Ungeachtet der Kritik hielt er an seinem Plan fest.</i></td></tr>
<tr><td><i>mögen + auch</i> (الفعل أول)</td><td>حتى لو</td><td><i>Mag er auch reich sein, glücklich ist er nicht.</i></td></tr></table></div>
<p class="tip">بعد جمل "مهما" دي، الجملة الرئيسية غالبًا بتمشي بترتيب عادي من غير قلب: <i>Wie schwer es auch ist, <b>wir</b> schaffen das.</i></p>`}],
exam:{
r:{text:"Kaum eine technische Entwicklung hat das Arbeitsleben so rasant verändert wie die Digitalisierung. Während Routinetätigkeiten zunehmend automatisiert werden, gewinnen soziale und kreative Kompetenzen an Bedeutung. Angesichts dieser Entwicklung fordern Bildungsexperten eine grundlegende Reform der Lehrpläne. Statt reines Faktenwissen abzufragen, solle die Schule verstärkt Problemlösungsfähigkeit und kritisches Denken fördern. Kritiker wenden ein, dass solides Grundwissen dennoch unverzichtbar bleibe, da ohne Wissen keine sinnvolle Kritik möglich sei.",
qs:[["Welche Tätigkeiten werden automatisiert?",["Routinetätigkeiten","Kreative Tätigkeiten","Soziale Tätigkeiten"],0],["Was fordern Bildungsexperten?",["Eine Reform der Lehrpläne","Mehr Prüfungen","Weniger Schulstunden"],0],["Was soll die Schule fördern?",["Problemlösung und kritisches Denken","Nur Faktenwissen","Sport"],0],["Was sagen die Kritiker?",["Grundwissen bleibt unverzichtbar","Wissen ist unwichtig","Lehrpläne sind perfekt"],0]]},
l:{text:"In der heutigen Ausgabe unseres Wirtschaftsmagazins sprechen wir über Wohnungsnot in Großstädten. Laut einer aktuellen Studie fehlen bundesweit rund 700.000 Wohnungen. Die Bauindustrie macht dafür vor allem gestiegene Materialkosten und langwierige Genehmigungsverfahren verantwortlich. Der Mieterbund hingegen kritisiert, dass zu wenige Sozialwohnungen gebaut würden, und fordert eine stärkere Regulierung der Mieten.",
qs:[["Wie viele Wohnungen fehlen laut Studie?",["Etwa 700.000","Etwa 70.000","Etwa 7 Millionen"],0],["Was nennt die Bauindustrie als Grund?",["Materialkosten und lange Genehmigungen","Zu viele Arbeiter","Zu niedrige Mieten"],0],["Was kritisiert der Mieterbund?",["Zu wenige Sozialwohnungen","Zu viele Neubauten","Zu hohe Löhne"],0],["Was fordert der Mieterbund?",["Stärkere Regulierung der Mieten","Weniger Regeln","Höhere Steuern für Mieter"],0]]},
w:{task:"Stellungnahme formell: اكتب رسالة رسمية للبلدية عن مشكلة غلاء الإيجارات في مدينتك، وضّح الأسباب والآثار واقترح حلولًا.",min:240,model:"Sehr geehrte Damen und Herren, mit großer Sorge verfolge ich die Entwicklung der Mietpreise in unserer Stadt. Angesichts der stark gestiegenen Mieten ist es für viele Familien kaum noch möglich, angemessenen Wohnraum zu finden. Die Ursachen sind vielfältig: Einerseits ziehen immer mehr Menschen in die Stadt, andererseits wurden in den vergangenen Jahren zu wenige Sozialwohnungen gebaut. Die Folgen sind gravierend. Zahlreiche Haushalte müssen inzwischen mehr als die Hälfte ihres Einkommens für die Miete aufwenden, was zwangsläufig zu finanziellen Engpässen führt. Ich möchte daher anregen, städtische Grundstücke bevorzugt für den sozialen Wohnungsbau zur Verfügung zu stellen. Darüber hinaus wäre zu prüfen, inwiefern leerstehende Gewerbeflächen in Wohnungen umgewandelt werden könnten. Ich wäre Ihnen dankbar, wenn Sie diese Vorschläge in Ihre Planungen einbeziehen würden. Mit freundlichen Grüßen"},
s:{qs:["Diskutieren Sie: Sollte das Wahlalter auf 16 Jahre gesenkt werden?","Schildern Sie eine Situation, in der Sie einen Kompromiss finden mussten.","Wie bewerten Sie die Rolle der Medien in Krisenzeiten?","Halten Sie einen kurzen Vortrag: Chancen und Risiken der Globalisierung."]}}},
{id:"C2.1",title:"الأسلوب والدقة واللغة الأدبية",
words:[
["f","Ambivalenz","ازدواجية / تناقض مشاعر","آمبيفالينتس","Die Ambivalenz der Figur macht den Roman spannend.","تناقض الشخصية بيخلي الرواية مشوقة."],
["f","Anmaßung","غطرسة / تعدٍّ","آنماسونج","Das ist eine Anmaßung!","ده تجاوز!"],
["m","Bezugspunkt","نقطة مرجعية","بيتسوجسبونكت","Die Familie ist sein wichtigster Bezugspunkt.","العيلة أهم مرجع ليه."],
["f","Gratwanderung","توازن دقيق / سير على الحافة","جراتفاندرونج","Das ist eine Gratwanderung zwischen Humor und Respektlosigkeit.","ده توازن صعب بين الهزار وقلة الاحترام."],
["f","Nuance","فارق دقيق","نوانسه","Die Nuancen gehen in der Übersetzung verloren.","الفروق الدقيقة بتضيع في الترجمة."],
["m","Tenor","الفحوى العامة","تينور","Der Tenor der Diskussion war positiv.","الاتجاه العام للنقاش كان إيجابي."],
["f","Tragweite","أبعاد / عواقب","تراجفايته","Die Tragweite der Entscheidung ist enorm.","أبعاد القرار ضخمة."],
["m","Werdegang","مسيرة","فيردهجانج","Er beschreibt seinen beruflichen Werdegang.","بيوصف مسيرته المهنية."],
["","anprangern","يندد بـ","آنبرانجرن","Die Zeitung prangert die Missstände an.","الجريدة بتندد بالتجاوزات."],
["","beschönigen","يجمّل (الحقيقة)","بيشؤنيجن","Man sollte die Lage nicht beschönigen.","مينفعش نجمّل الوضع."],
["","relativieren","ينسّب / يقلل من حدة","ريلاتيفيرن","Er relativierte seine Aussage später.","خفف تصريحه بعدين."],
["","untermauern","يدعم (بحجج)","أونترماوَرن","Sie untermauert ihre These mit Daten.","بتدعم فرضيتها ببيانات."],
["","verschärfen","يزيد حدة","فيرشيرفن","Die Krise verschärft sich.","الأزمة بتزيد."],
["","anscheinend","على ما يبدو (حقيقي)","آنشاينند","Anscheinend ist er krank.","على ما يبدو إنه عيان."],
["","scheinbar","ظاهريًا (مش حقيقي)","شاينبار","Die Aufgabe ist nur scheinbar einfach.","التمرين سهل في الظاهر بس."],
["","eloquent","فصيح","إيلوكفنت","Sie ist eine eloquente Rednerin.","هي خطيبة فصيحة."],
["","lapidar","مقتضب / جاف","لابيدار","Seine Antwort war lapidar.","رده كان مقتضب."],
["","subtil","خفي / دقيق","زوبتيل","Das war eine subtile Anspielung.","دي كانت تلميحة خفية."],
["","unweigerlich","حتمًا","أونفايجرليش","Das führt unweigerlich zum Konflikt.","ده هيأدي حتمًا لصراع."],
["","zutreffend","صحيح / ينطبق","تسوتريفند","Die Beschreibung ist zutreffend.","الوصف صحيح."],
["f","Gepflogenheit","عُرف / عادة متّبعة","جيبفلوجنهايت","Er kennt die örtlichen Gepflogenheiten nicht.","مش عارف العادات المتّبعة في المكان."],
["","erwägen","يفكّر جديًا في","إرفيجن","Sie erwägt, ins Ausland zu ziehen.","بتفكر جديًا تسافر برّه."],
["","beiläufig","عَرَضًا / بشكل عابر","بايلويفيش","Er erwähnte es nur beiläufig.","ذكره بشكل عابر بس."],
["","nachdrücklich","بإصرار / بشدة","ناخدروكليش","Sie forderte nachdrücklich eine Erklärung.","طالبت بإصرار بتوضيح."]],
grammar:[
{t:"مستويات اللغة: عامي ومحايد ورسمي",b:`<div class="tw"><table><tr><th>عامي</th><th>محايد</th><th>رسمي</th><th>المعنى</th></tr>
<tr><td><i>kriegen</i></td><td><i>bekommen</i></td><td><i>erhalten</i></td><td>ياخد / يستلم</td></tr>
<tr><td><i>Kohle</i></td><td><i>Geld</i></td><td><i>finanzielle Mittel</i></td><td>فلوس</td></tr>
<tr><td><i>abhauen</i></td><td><i>weggehen</i></td><td><i>sich entfernen</i></td><td>يمشي</td></tr>
<tr><td><i>kapieren</i></td><td><i>verstehen</i></td><td><i>nachvollziehen</i></td><td>يفهم</td></tr></table></div>
<p class="tip">في C2 مش كفاية تعرف الكلمة، لازم تعرف تستخدمها في المكان المناسب.</p>`},
{t:"بناء الكلمات: البادئات واللواحق",b:`<ul class="exl"><li><i>ver-</i>: تغيير أو غلط: <i>verschlafen</i> (نام زيادة)، <i>sich verlaufen</i> (تاه)</li><li><i>zer-</i>: تدمير: <i>zerbrechen</i>، <i>zerreißen</i></li><li><i>ent-</i>: إزالة: <i>entfernen</i>، <i>entkommen</i></li><li><i>miss-</i>: غلط: <i>missverstehen</i>، <i>misstrauen</i></li><li><i>-bar</i> = ممكن: <i>machbar</i>، <i>-los</i> = بدون: <i>arbeitslos</i>، <i>-haft</i> و <i>-sam</i> صفات: <i>fehlerhaft</i>، <i>sparsam</i></li></ul>`},
{t:"الكلام المنقول المطوّل",b:`<p>في التقارير بنستخدم أفعال نقل دقيقة مع Konjunktiv I:</p>
<ul class="exl"><li><i>Der Minister betonte, man habe alles getan.</i> — أكّد</li><li><i>Sie räumte ein, Fehler gemacht zu haben.</i> — اعترفت</li><li><i>Er bestritt, davon gewusst zu haben.</i> — أنكر</li><li><i>Die Opposition warf ihm vor, er habe gelogen.</i> — اتهمته</li></ul>`},
{t:"ترتيب الجملة للتأكيد",b:`<p>اللي بيتحط في أول الجملة (Vorfeld) بيبقى عليه التركيز:</p>
<ul class="exl"><li><i>Ich habe das Buch gestern gelesen.</i> — عادي</li><li><i>Gestern habe ich das Buch gelesen.</i> — تركيز على الوقت</li><li><i>Das Buch habe ich gestern gelesen</i> (nicht den Artikel). — تركيز على الكتاب</li><li>إخراج جزء بعد الفعل (Ausklammerung): <i>Ich habe ihn gesehen gestern Abend im Kino.</i> — في الكلام بس</li></ul>`},
{t:"استعمالات خاصة لـ Konjunktiv I (الأمر والتمني واللغة الثابتة)",b:`<p>Konjunktiv I مش للكلام المنقول بس. في اللغة الراقية والتعبيرات الثابتة بيعبّر عن أمر غير مباشر أو تمني.</p>
<div class="tw"><table><tr><th>الاستعمال</th><th>مثال</th><th>المعنى</th></tr>
<tr><td>تعليمات ووصفات (أسلوب قديم)</td><td><i>Man nehme 200 g Mehl und zwei Eier.</i></td><td>خُد ٢٠٠ جرام دقيق وبيضتين</td></tr>
<tr><td>تمني ودعاء</td><td><i>Es lebe die Freiheit! / Gott sei Dank!</i></td><td>تعيش الحرية! / الحمد لله!</td></tr>
<tr><td>اللغة العلمية</td><td><i>Gegeben sei ein Dreieck ABC.</i></td><td>ليكن عندنا مثلث ABC</td></tr>
<tr><td>تنبيه رسمي</td><td><i>Es sei darauf hingewiesen, dass ...</i></td><td>تجدر الإشارة إلى إنّ ...</td></tr>
<tr><td><i>sei es ... sei es / oder</i></td><td><i>Sei es aus Angst oder aus Bequemlichkeit, niemand protestierte.</i></td><td>سواء كان من الخوف أو الكسل</td></tr>
<tr><td>تعبيرات ثابتة</td><td><i>Koste es, was es wolle. / Wie dem auch sei, ...</i></td><td>مهما كلّف الأمر / على أي حال</td></tr></table></div>
<p class="tip">التعبيرات دي محفوظة ومش بنألّف منها جمل جديدة كتير في الكلام العادي، لكن لازم تفهمها في النصوص الأدبية والقانونية والعلمية.</p>`},
{t:"ترتيب الجملة المتحرر: Ausklammerung والفعل في الأول",b:`<p>القاعدة إن الفعل التاني بيقفل الجملة في الآخر، لكن في حالات بنطلّع عناصر بعد القفلة (<i>Ausklammerung</i>) عشان الجملة تبقى أوضح.</p>
<ul class="exl"><li>المقارنة: <i>Er hat mehr gearbeitet als alle anderen.</i> (أحسن من <i>... als alle anderen gearbeitet</i>)</li>
<li>مجموعة المصدر: <i>Ich habe vergessen, dich anzurufen.</i></li>
<li>عبارات طويلة في الكلام: <i>Wir haben lange diskutiert über die Zukunft des Projekts.</i></li>
<li>الإضافة على اليمين للتوضيح: <i>Ich kenne ihn gut, den neuen Chef.</i></li></ul>
<p>وفي الحكي والكلام العامي ممكن الفعل ييجي أول الجملة الخبرية:</p>
<ul class="exl"><li><i>Kommt ein Mann zum Arzt und sagt ...</i> — بداية النكت والحواديت.</li>
<li><i>Sagt er doch tatsächlich zu mir, ich sei faul!</i> — للتعجب والاستغراب.</li>
<li><i>Hab ich dir doch gesagt!</i> — مش قلتلك!</li></ul>
<p class="tip">في الكتابة الرسمية استخدم Ausklammerung مع المقارنة ومجموعات المصدر بس، أما الباقي فهو أسلوب كلام.</p>`}],
exam:{
r:{text:"Sprache ist mehr als ein bloßes Werkzeug der Verständigung; sie prägt, wie wir die Welt wahrnehmen. Diese These, die auf Wilhelm von Humboldt zurückgeht, wird in der Linguistik bis heute kontrovers diskutiert. Während radikale Vertreter behaupten, Sprache bestimme unser Denken vollständig, gehen gemäßigte Positionen lediglich davon aus, dass sie bestimmte Denkweisen begünstige. Unstrittig ist indes, dass Mehrsprachigkeit die kognitive Flexibilität fördert.",
qs:[["Was besagt die These?",["Sprache prägt unsere Wahrnehmung der Welt","Sprache ist nur ein Werkzeug","Alle Sprachen sind gleich"],0],["Wie wird die These heute gesehen?",["Sie ist umstritten","Sie ist widerlegt","Sie ist vergessen"],0],["Was meinen gemäßigte Positionen?",["Sprache begünstigt bestimmte Denkweisen","Sprache bestimmt alles","Sprache hat keinen Einfluss"],0],["Was ist unstrittig?",["Mehrsprachigkeit fördert kognitive Flexibilität","Einsprachigkeit ist besser","Humboldt hatte unrecht"],0]]},
l:{text:"Zum Abschluss unserer Literatursendung ein Blick auf den neuen Roman von Lena Hartmann. Die Kritik ist geteilt: Einige loben die subtile Figurenzeichnung und die eloquente Sprache, andere bemängeln, die Handlung komme nur schleppend voran. Unbestritten ist, dass Hartmann ein heikles Thema aufgreift, nämlich die Ambivalenz familiärer Bindungen, ohne es zu beschönigen.",
qs:[["Wie ist die Kritik am Roman?",["Geteilt","Nur positiv","Nur negativ"],0],["Was wird gelobt?",["Figurenzeichnung und Sprache","Die schnelle Handlung","Der niedrige Preis"],0],["Was wird bemängelt?",["Die Handlung kommt langsam voran","Die Sprache ist zu einfach","Das Buch ist zu kurz"],0],["Welches Thema greift der Roman auf?",["Die Ambivalenz familiärer Bindungen","Den Klimawandel","Die Wirtschaft"],0]]},
w:{task:"Essay: «Bestimmt die Sprache unser Denken?» اكتب مقالًا أدبيًا متماسكًا بأسلوب راقٍ، مع أمثلة من تجربتك مع اللغات.",min:280,model:"Wer mehrere Sprachen spricht, kennt das Phänomen: Mit dem Wechsel der Sprache scheint sich auch die Art zu verändern, wie man denkt und fühlt. Ist dies ein Beleg dafür, dass Sprache unser Denken bestimmt? Die Frage beschäftigt Philosophen seit Jahrhunderten. Unbestreitbar ist zunächst, dass jede Sprache bestimmte Unterscheidungen nahelegt. So zwingt das Deutsche seine Sprecher, jedem Substantiv ein Genus zuzuordnen, während das Arabische zwischen Dual und Plural differenziert. Daraus abzuleiten, dass Sprecher dieser Sprachen die Welt grundlegend anders wahrnähmen, wäre jedoch voreilig. Vielmehr spricht vieles dafür, dass Sprache unsere Aufmerksamkeit lenkt, ohne das Denken zu determinieren. Meine eigene Erfahrung untermauert diese gemäßigte Position: Auf Deutsch formuliere ich präziser, auf Arabisch emotionaler, doch meine Überzeugungen bleiben dieselben. Sprache ist demnach weniger Gefängnis als Fenster, durch das wir die Welt jeweils aus einem anderen Blickwinkel betrachten."},
s:{qs:["Interpretieren Sie das Sprichwort: «Wer A sagt, muss auch B sagen.»","Vergleichen Sie die Diskussionskultur in Deutschland und in Ihrem Heimatland.","Welche Verantwortung tragen Schriftsteller in einer Demokratie?","Argumentieren Sie bewusst für eine Position, die Sie nicht teilen."]}}},
{id:"C2.2",title:"الإتقان الكامل والكتابة العلمية",
words:[
["f","Abhandlung","بحث / دراسة","آبهاندلونج","Er schrieb eine Abhandlung über Kant.","كتب بحث عن كانط."],
["f","Annäherung","تقارب","آننيهرونج","Es gibt eine Annäherung zwischen den Positionen.","فيه تقارب بين المواقف."],
["f","Befangenheit","انحياز / حرج","بيفانجنهايت","Der Richter wurde wegen Befangenheit abgelehnt.","القاضي اترفض بسبب الانحياز."],
["f","Erkenntnis","إدراك / نتيجة علمية","إركينتنيس","Neue Erkenntnisse zeigen etwas anderes.","نتايج جديدة بتبيّن حاجة تانية."],
["f","Prämisse","فرضية","بريميسه","Die Prämisse ist falsch.","الفرضية غلط."],
["f","Schlussfolgerung","استنتاج","شلوسفولجرونج","Welche Schlussfolgerung ziehen Sie?","إيه استنتاجك؟"],
["m","Sachverhalt","الحقائق / الواقعة","زاخفيرهالت","Der Sachverhalt ist kompliziert.","الواقعة معقدة."],
["f","Stichhaltigkeit","قوة الحجة","شتيشهالتيشكايت","Die Stichhaltigkeit des Arguments ist fraglich.","قوة الحجة مشكوك فيها."],
["","ersterer / letzterer","الأول / الأخير (من اتنين)","إرستررر / ليتستررر","Peter und Max kamen; letzterer war müde.","بيتر وماكس جم؛ التاني كان تعبان."],
["","diesbezüglich","بهذا الخصوص","ديسبيتسوجليش","Diesbezüglich gibt es keine Daten.","مفيش بيانات في الموضوع ده."],
["","hierbei","في ذلك / هنا","هيرباي","Hierbei handelt es sich um einen Fehler.","الأمر هنا يتعلق بغلطة."],
["","wobei","مع العلم أنّ","فوباي","Er kam, wobei er zu spät war.","جه، مع إنه اتأخر."],
["","erachten","يعتبر","إرآختن","Ich erachte das für notwendig.","أعتبر ده ضروري."],
["","konstatieren","يقرر / يثبت","كونستاتيرن","Wir konstatieren einen Anstieg.","بنسجل زيادة."],
["","postulieren","يفترض / يطالب بـ","بوستوليرن","Die Theorie postuliert, dass ...","النظرية بتفترض إن ..."],
["","verifizieren","يتحقق من","فيريفيتسيرن","Die Daten müssen verifiziert werden.","البيانات لازم تتأكد."],
["","hinlänglich","بما فيه الكفاية","هينلينجليش","Das ist hinlänglich bekannt.","ده معروف كفاية."],
["","inhärent","متأصل","إنهيرنت","Das Risiko ist dem System inhärent.","الخطر جزء من طبيعة النظام."],
["","stringent","صارم / متماسك","شترينجنت","Die Argumentation ist stringent.","الحجة متماسكة."],
["","vermeintlich","المزعوم","فيرماينتليش","Der vermeintliche Experte irrte sich.","الخبير المزعوم غلط."],
["","mutmaßlich","المفترض / على الأرجح","موتماسليش","Der mutmaßliche Täter wurde festgenommen.","الجاني المفترض اتقبض عليه."],
["f","Mutmaßung","تخمين / افتراض","موتماسونج","Das sind bloße Mutmaßungen.","دي مجرد تخمينات."],
["","unterstellen","يفترض / ينسب (اتهام)","أونترشتيلن","Man unterstellt ihm böse Absichten.","بينسبوله نوايا وحشة."],
["","zweckmäßig","مناسب للغرض / عملي","تسفيكميسيش","Diese Lösung ist am zweckmäßigsten.","الحل ده هو الأنسب."]],
grammar:[
{t:"كلمات الإحالة وتماسك النص",b:`<ul class="exl"><li><i>dieser … jener</i> — ده … وده (القريب والبعيد)</li><li><i>ersterer … letzterer</i> — الأول … والأخير: <i>Es gibt zwei Modelle; letzteres ist günstiger.</i></li><li><i>dabei, hierbei, wobei</i>: <i>Hierbei zeigt sich, dass ...</i></li><li><i>diesbezüglich, demgegenüber, infolgedessen</i>: بتربط الفقرات ببعض</li></ul>`},
{t:"فروق دقيقة في المعنى",b:`<div class="tw"><table><tr><th>الكلمة</th><th>المعنى</th></tr>
<tr><td><i>anscheinend</i></td><td>على ما يبدو، وغالبًا حقيقي</td></tr>
<tr><td><i>scheinbar</i></td><td>ظاهريًا بس، والحقيقة غير كده</td></tr>
<tr><td><i>offenbar</i></td><td>واضح من الدلائل</td></tr>
<tr><td><i>offensichtlich</i></td><td>واضح جدًا لأي حد</td></tr>
<tr><td><i>wohl</i></td><td>غالبًا (تخمين)</td></tr></table></div>
<ul class="exl"><li><i>Er ist scheinbar ruhig, innerlich aber nervös.</i></li><li><i>Er ist anscheinend krank, er hustet die ganze Zeit.</i></li></ul>`},
{t:"لغة الكتابة العلمية والتحفّظ",b:`<p>في البحوث بنتجنب الأحكام المطلقة:</p>
<ul class="exl"><li><i>Es lässt sich vermuten, dass ...</i> — ممكن نفترض إن ...</li><li><i>Es ist davon auszugehen, dass ...</i> — من المرجح إن ...</li><li><i>Die Ergebnisse deuten darauf hin, dass ...</i> — النتايج بتشير إن ...</li><li><i>Wie Müller (2020) zeigt, ...</i> — زي ما مولر وضّح ...</li><li><i>Dem ist entgegenzuhalten, dass ...</i> — ونرد على ده بإن ...</li></ul>`},
{t:"أمثال وحِكم ألمانية",b:`<ul class="exl"><li><i>Aller Anfang ist schwer.</i> — كل بداية صعبة.</li><li><i>Wer A sagt, muss auch B sagen.</i> — اللي يبدأ حاجة يكمّلها.</li><li><i>Übung macht den Meister.</i> — التمرين بيصنع المعلّم.</li><li><i>Das ist nicht mein Bier.</i> — ده مش شغلي.</li><li><i>Morgenstund hat Gold im Mund.</i> — البركة في البكور.</li><li><i>Den Wald vor lauter Bäumen nicht sehen.</i> — يتوه في التفاصيل.</li></ul>`},
{t:"المستقبل التام Futur II والافتراض عن الماضي",b:`<p>الشكل: <i>werden + Partizip II + haben / sein</i>.</p>
<ul class="exl"><li>حاجة هتكون خلصت في المستقبل: <i>Bis Freitag werde ich den Bericht geschrieben haben.</i> — لحد الجمعة هكون كتبت التقرير.</li>
<li>الاستعمال الأشهر، افتراض عن الماضي: <i>Er wird den Zug verpasst haben.</i> — غالبًا فاته القطر.</li>
<li><i>Sie wird wohl schon angekommen sein.</i> — أكيد زمانها وصلت.</li></ul>
<p>و Futur I بيعبّر عن افتراض عن الحاضر: <i>Er wird (wohl) krank sein.</i> — تلاقيه عيان.</p>
<div class="tw"><table><tr><th>درجة التأكد</th><th>عن الماضي</th></tr>
<tr><td>متأكد تقريبًا</td><td><i>Er muss den Zug verpasst haben.</i></td></tr>
<tr><td>غالبًا جدًا</td><td><i>Er wird den Zug (wohl) verpasst haben.</i></td></tr>
<tr><td>محتمل</td><td><i>Er dürfte den Zug verpasst haben.</i></td></tr>
<tr><td>ممكن</td><td><i>Er könnte den Zug verpasst haben.</i></td></tr>
<tr><td>غالبًا لأ</td><td><i>Er kann den Zug nicht verpasst haben.</i></td></tr></table></div>
<p class="tip">كلمة <i>wohl</i> بتأكّد إن ده افتراض مش مستقبل.</p>`},
{t:"تفكيك الأسلوب الاسمي (Entnominalisierung) لكتابة أوضح",b:`<p>المستوى C2 مش بس إنك تكتب بأسلوب اسمي، لكن كمان إنك تفكّه وتحوّله لكلام مفهوم لما الجمهور يحتاج كده.</p>
<ul class="exl"><li><i>Nach erfolgter Prüfung der Unterlagen durch die Behörde erfolgt die Zustellung des Bescheids.</i></li>
<li>← <i>Nachdem die Behörde die Unterlagen geprüft hat, wird der Bescheid zugestellt.</i></li></ul>
<div class="tw"><table><tr><th>الخطوة</th><th>مثال</th></tr>
<tr><td>١. الاسم اللي بيعبّر عن فعل يرجع فعل</td><td><i>die Prüfung → prüfen</i></td></tr>
<tr><td>٢. الـ Genitiv يرجع فاعل أو مفعول</td><td><i>die Zustellung des Bescheids → der Bescheid wird zugestellt</i></td></tr>
<tr><td>٣. حرف الجر يرجع أداة ربط</td><td><i>nach → nachdem, bei → wenn, infolge → weil, zwecks → um ... zu</i></td></tr>
<tr><td>٤. نشيل الأفعال الفاضية</td><td><i>erfolgen, stattfinden, durchführen</i></td></tr></table></div>
<p class="tip">الأسلوب الاسمي مناسب للقانون والعلوم والإدارة، والأسلوب الفعلي مناسب للمقالات والكلام مع جمهور عام. الإتقان إنك تختار المناسب للموقف.</p>`}],
exam:{
r:{text:"In der Wissenschaftstheorie gilt das Prinzip der Falsifizierbarkeit, wie es Karl Popper formulierte, als zentrales Abgrenzungskriterium. Demnach ist eine Theorie nur dann wissenschaftlich, wenn sie grundsätzlich durch Beobachtung widerlegt werden kann. Kritiker wie Thomas Kuhn haben jedoch darauf hingewiesen, dass Forschende in der Praxis keineswegs jede Theorie bei der ersten widersprechenden Beobachtung verwerfen. Vielmehr werde an bewährten Paradigmen festgehalten, bis sich die Anomalien häuften.",
qs:[["Was ist laut Popper wissenschaftlich?",["Eine Theorie, die widerlegt werden kann","Jede bewiesene Theorie","Jede alte Theorie"],0],["Was kritisiert Kuhn?",["Forscher verwerfen Theorien nicht sofort","Popper war zu tolerant","Beobachtungen sind unwichtig"],0],["Wann werden Paradigmen laut Kuhn aufgegeben?",["Wenn sich Anomalien häufen","Sofort bei einem Fehler","Nie"],0],["Welches Wort beschreibt Poppers Prinzip?",["Falsifizierbarkeit","Verifizierbarkeit","Popularität"],0]]},
l:{text:"Sehr geehrte Damen und Herren, in meinem heutigen Vortrag möchte ich der Frage nachgehen, inwiefern Mehrsprachigkeit als Ressource betrachtet werden kann. Lange Zeit galt sie in Schulen eher als Hindernis. Neuere Erkenntnisse deuten jedoch darauf hin, dass mehrsprachige Kinder Vorteile beim Problemlösen haben. Dem ist allerdings entgegenzuhalten, dass diese Vorteile stark vom sozialen Umfeld abhängen.",
qs:[["Was ist das Thema des Vortrags?",["Mehrsprachigkeit als Ressource","Fremdsprachenunterricht für Erwachsene","Die Geschichte der Schule"],0],["Wie galt Mehrsprachigkeit lange Zeit?",["Als Hindernis","Als Vorteil","Als Pflicht"],0],["Was zeigen neuere Erkenntnisse?",["Vorteile beim Problemlösen","Nachteile in Mathematik","Keine Unterschiede"],0],["Welche Einschränkung nennt der Redner?",["Die Vorteile hängen vom sozialen Umfeld ab","Die Studien sind gefälscht","Nur Erwachsene profitieren"],0]]},
w:{task:"Wissenschaftlicher Text: اكتب ملخصًا تحليليًا وتقييمًا نقديًا لموضوع «Mehrsprachigkeit als Ressource» بلغة علمية متحفظة، مع استخدام كلمات الإحالة وأدوات الربط.",min:300,model:"Der vorliegende Text widmet sich der Frage, inwiefern Mehrsprachigkeit als Ressource zu betrachten ist. Lange Zeit wurde sie im schulischen Kontext primär als Defizit wahrgenommen, da man befürchtete, Kinder könnten keine der Sprachen vollständig beherrschen. Neuere Erkenntnisse der Kognitionsforschung deuten jedoch darauf hin, dass mehrsprachige Kinder über eine ausgeprägtere exekutive Kontrolle verfügen, was sich insbesondere beim Problemlösen bemerkbar macht. Diesbezüglich ist allerdings zu konstatieren, dass die Studienlage keineswegs einheitlich ist. Während einige Untersuchungen deutliche Vorteile nachweisen, finden andere keine signifikanten Unterschiede. Es ist davon auszugehen, dass Faktoren wie der sozioökonomische Hintergrund, die Qualität des Sprachinputs sowie das Prestige der jeweiligen Sprachen eine maßgebliche Rolle spielen. Letzteres wird in der Debatte häufig unterschätzt. Als Schlussfolgerung lässt sich festhalten, dass Mehrsprachigkeit zwar ein erhebliches Potenzial birgt, dieses sich jedoch nicht zwangsläufig entfaltet. Vielmehr bedarf es gezielter pädagogischer Maßnahmen, die alle Sprachen der Kinder wertschätzen und fördern."},
s:{qs:["Fassen Sie eine wissenschaftliche Kontroverse aus Ihrem Fachgebiet zusammen.","Hinterfragen Sie die Prämisse: «Fortschritt ist immer gut.»","Erklären Sie den Unterschied zwischen «scheinbar» und «anscheinend» mit eigenen Beispielen.","Moderieren Sie eine fiktive Diskussion zwischen zwei gegensätzlichen Positionen."]}}}

];
