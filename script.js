const translations = {
fa:{
navHome:"خانه",navServices:"خدمات",navAbout:"درباره ما",navContact:"ارتباط",book:"رزرو مراسم ↗",
kicker:"موسیقی • نورپردازی • اجرای صحنه",heroLine1:"شب را با",heroSub:"حس کن، بشنو، به خاطر بسپار.",explore:"ورود به بخش خدمات",caption:"خدمات حرفه‌ای دی‌جی",slogan:"موسیقی، آدم‌ها را به هم پیوند می‌دهد",scroll:"برای ادامه پایین بروید",
servicesTitle:"خدمات DJ V.N",servicesIntro:"جزئیات حرفه‌ای برای ساختن شبی به‌یادماندنی.",
s1title:"اجرای موسیقی و دی‌جی",s1text:"موسیقی هماهنگ با حال‌وهوای مراسم، سلیقه میزبان و انرژی مهمان‌ها.",
s2title:"نوازندگی زنده",s2text:"اجرای تومبا، پرکاشن و ارگ برای شور و هیجان بیشتر در جشن شما.",
s3title:"صدابرداری و نورپردازی",s3text:"تجهیزات حرفه‌ای صدا و نور برای فضایی شفاف، چشمگیر و هماهنگ.",
s4title:"جشن‌ها و مراسم",s4text:"برنامه‌ریزی موسیقی برای عروسی، تولد، مهمانی و مراسم خصوصی.",sAction:"مشاوره و رزرو",
aboutTitle:"هر مراسم،<br><em>یک خاطره خاص</em>",aboutText:"DJ V.N با ترکیب موسیقی، نوازندگی و تجهیزات صدا و نور، تلاش می‌کند برای هر مراسم فضایی پرانرژی و متناسب با سلیقه شما بسازد.",instagramText:"برای دیدن نمونه‌کارها و فضای اجراها، به صفحه اینستاگرام ما سر بزنید.",instagramButton:"مشاهده نمونه‌کارها در اینستاگرام",
contactTitle:"بیایید شب بعدی را <em>خاص کنیم</em>",contactIntro:"برای مشاوره، هماهنگی خدمات و رزرو مراسم با ما در ارتباط باشید.",phone1:"شماره تماس اول",phone2:"شماره تماس دوم",callNow:"برای تماس کلیک کنید ↗",address:"آدرس",addressText:"آباده، خیابان سعدی، روبه‌روی خیابان ولایت",mapOpen:"نمایش روی نقشه ↗",viewInstagram:"دیدن نمونه‌کارها ↗",footerSlogan:"موسیقی، نور و هیجان؛ با امضای DJ V.N",backTop:"بازگشت به بالا ↑"
},
en:{
navHome:"Home",navServices:"Services",navAbout:"About",navContact:"Contact",book:"Book an Event ↗",
kicker:"MUSIC • LIGHTING • STAGE",heroLine1:"Make it a night with",heroSub:"Feel it. Hear it. Remember it.",explore:"Explore Our Services",caption:"Professional DJ Services",slogan:"Music connects people",scroll:"SCROLL TO EXPLORE",
servicesTitle:"DJ V.N Services",servicesIntro:"Professional details for a night to remember.",
s1title:"DJ & Music Performance",s1text:"Music tailored to your event, your taste, and the energy of your guests.",
s2title:"Live Instrumental Music",s2text:"Live tumbas, percussion, and keyboard to bring extra energy to your celebration.",
s3title:"Sound & Lighting",s3text:"Professional sound and lighting equipment for a clear, vibrant atmosphere.",
s4title:"Parties & Events",s4text:"Music planning for weddings, birthdays, parties, and private events.",sAction:"Ask & Book",
aboutTitle:"Every event,<br><em>a special memory</em>",aboutText:"DJ V.N combines music, live instruments, and sound and lighting equipment to create an energetic atmosphere tailored to your event.",instagramText:"Visit our Instagram page to explore our work and performance highlights.",instagramButton:"View Our Work on Instagram",
contactTitle:"Let’s make your next night <em>special</em>",contactIntro:"Contact us for advice, service details, and event bookings.",phone1:"Phone number 1",phone2:"Phone number 2",callNow:"Tap to call ↗",address:"Location",addressText:"Saadi Street, opposite Velayat Street, Abadeh, Iran",mapOpen:"Open map ↗",viewInstagram:"View our work ↗",footerSlogan:"Music, lights & energy — signed DJ V.N",backTop:"Back to top ↑"
}};
function setLanguage(lang){
 const dict=translations[lang]||translations.fa;
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==="fa"?"rtl":"ltr";
 document.body.classList.toggle("en-mode",lang==="en");
 document.querySelectorAll("[data-i18n]").forEach(el=>{
  const key=el.dataset.i18n;
  if(dict[key]!==undefined) el.innerHTML=dict[key];
 });
 document.querySelectorAll(".lang-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.lang===lang));
 try{localStorage.setItem("djvn-language",lang)}catch(e){}
}
document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>setLanguage(btn.dataset.lang)));
try{setLanguage(localStorage.getItem("djvn-language")||"fa")}catch(e){setLanguage("fa")}
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰"}));
const sections=document.querySelectorAll("main section[id]"),links=document.querySelectorAll(".nav a");
window.addEventListener("scroll",()=>{let current="home";sections.forEach(s=>{if(scrollY>=s.offsetTop-150)current=s.id});links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current))},{passive:true});
document.getElementById("year").textContent=new Date().getFullYear();


// دستیار تعاملی سایت: پاسخ‌گویی فوری به پرسش‌های رایج درباره خدمات و اطلاعات تماس.
(function(){
 const launcher=document.getElementById('assistantLauncher');
 const panel=document.getElementById('assistantPanel');
 const closeBtn=document.getElementById('assistantClose');
 const form=document.getElementById('assistantForm');
 const input=document.getElementById('assistantInput');
 const messages=document.getElementById('assistantMessages');
 if(!launcher||!panel||!form||!input||!messages)return;
 function openPanel(open){
   panel.hidden=!open;
   launcher.setAttribute('aria-expanded',String(open));
   if(open) setTimeout(()=>input.focus(),80);
 }
 launcher.addEventListener('click',()=>openPanel(panel.hidden));
 closeBtn.addEventListener('click',()=>openPanel(false));
 function addMessage(text,who){
   const el=document.createElement('div');
   el.className='assistant-message '+who;
   el.textContent=text;
   messages.appendChild(el);
   messages.scrollTop=messages.scrollHeight;
 }
 function answer(q){
   const s=q.toLowerCase().replace(/[؟?!.,،؛]/g,' ').trim();
   const has=(words)=>words.some(w=>s.includes(w));
   if(has(['خدمات','سرویس','service','چه کار','چه کاری','ارائه'])){
     return 'خدمات DJ V.N شامل این موارد است:\\n• اجرای دی‌جی و موسیقی در مراسم\\n• نوازندگی تومبا، پرکاشن و ارگ\\n• سیستم‌های حرفه‌ای صدابرداری و نورپردازی\\n• اجرای موسیقی در عروسی، تولد و مهمانی‌ها\\n\\nبرای هماهنگی با ما تماس بگیر.';
   }
   if(has(['رزرو','قیمت','هزینه','مشاوره','booking','book','price','هزینه'])){
     return 'برای رزرو یا دریافت مشاوره درباره تاریخ و هزینه مراسم، با یکی از شماره‌های زیر تماس بگیر:\\n09217951943\\n09171531992\\n\\nهزینه نهایی با توجه به نوع مراسم و خدمات موردنیاز هماهنگ می‌شود.';
   }
   if(has(['آدرس','ادرس','کجا','مکان','لوکیشن','location','address','map'])){
     return 'آدرس DJ V.N:\\nآباده، خیابان سعدی، روبه‌روی خیابان ولایت.\\n\\nبرای باز کردن نقشه، روی کارت «آدرس» در بخش ارتباط با ما بزن.';
   }
   if(has(['تماس','شماره','تلفن','زنگ','phone','call','contact'])){
     return 'راه‌های تماس با DJ V.N:\\n09217951943\\n09171531992\\n\\nبرای تماس مستقیم می‌توانی روی شماره‌ها در بخش «ارتباط با ما» کلیک کنی.';
   }
   if(has(['اینستا','نمونه','پیج','instagram','کارها','عکس','ویدیو'])){
     return 'برای دیدن نمونه‌کارها به اینستاگرام DJ V.N سر بزن:\\ninstagram.com/dj.v.n1943';
   }
   if(has(['سلام','درود','hi','hello','hey'])){
     return 'سلام و خوش آمدی! 🎧 درباره خدمات، رزرو مراسم، شماره تماس، آدرس یا نمونه‌کارهای DJ V.N هر سؤالی داری بپرس.';
   }
   if(has(['عروسی','تولد','مهمانی','جشن','مراسم','event','wedding','birthday','party'])){
     return 'برای عروسی، تولد، مهمانی و مراسم خصوصی خدمات دی‌جی، نوازندگی زنده و سیستم‌های صدا و نور ارائه می‌شود. برای هماهنگی جزئیات با 09217951943 یا 09171531992 تماس بگیر.';
   }
   return 'من در حال حاضر برای پاسخ به پرسش‌های رایج سایت DJ V.N تنظیم شده‌ام. می‌توانم درباره خدمات، رزرو، شماره تماس، آدرس و اینستاگرام راهنمایی کنم. برای سؤال‌های دیگر با 09217951943 تماس بگیر.';
 }
 function submitQuestion(q){
   const text=q.trim(); if(!text)return;
   openPanel(true); addMessage(text,'user'); input.value='';
   setTimeout(()=>addMessage(answer(text),'bot'),220);
 }
 form.addEventListener('submit',e=>{e.preventDefault();submitQuestion(input.value)});
 document.querySelectorAll('.assistant-quick button').forEach(btn=>btn.addEventListener('click',()=>submitQuestion(btn.dataset.question||btn.textContent)));
})();
