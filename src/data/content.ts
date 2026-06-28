import { 
  PenTool, Layout, HardHat, Rocket, 
  Clock, Check, Users, Award 
} from "lucide-react"

export const content = {
  ar: {
    dir: "rtl" as const,
    font: "arabic-font",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      reviews: "التقييمات",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
    },
    hero: {
      badge: "نصمم أحلامك بدقة",
      title1: "معلم الجبس والديكور",
      title2: "للتصميم الحديث",
      desc: "نحن متخصصون في تحويل المساحات العادية إلى تحف فنية. من الأسقف المعلقة إلى الديكورات العصرية، نضمن لك الجودة والتميز. رؤيتكم، إبداعنا - ننفذها لكم بدقة متناهية. نحول خيالكم إلى واقع ملموس في كل زاوية من زوايا منزلكم.",
      ctaPrimary: "اطلب استشارة مجانية",
      ctaSecondary: "مشاهدة أعمالنا",
    },
    process: {
      title: "كيف نعمل؟",
      subtitle: "خطوات بسيطة ومنظمة للوصول إلى النتيجة المثالية.",
      steps: [
        { title: "الاستشارة والقياس", desc: "زيارة الموقع وأخذ المقاسات الدقيقة مجاناً.", icon: PenTool },
        { title: "تصميم ثلاثي الأبعاد", desc: "رؤية التصميم قبل البدء في التنفيذ لضمان رضاك.", icon: Layout },
        { title: "التنفيذ والتركيب", desc: "بدء العمل بأعلى معايير الجودة والاحترافية.", icon: HardHat },
        { title: "التسليم النهائي", desc: "ضمان رضاك التام وتسليم المشروع في الوقت المحدد.", icon: Rocket },
      ]
    },
    hours: {
      title: "ساعات العمل",
      days: "من السبت إلى الخميس",
      time: "8:00 صباحاً - 9:00 مساءً",
      closed: "الجمعة: مغلق",
    },
    stats: [
      { label: "سنوات خبرة", value: "10+", icon: Clock },
      { label: "مشروع مكتمل", value: "500+", icon: Check },
      { label: "عميل سعيد", value: "450+", icon: Users },
      { label: "ضمان الجودة", value: "100%", icon: Award },
    ],
    about: {
      heroQuote: "نحوّل رؤيتك إلى واقع — بكل دقة وإبداع",
      heroSub: "منذ أكثر من عشر سنوات، ونحن نصنع الجمال في كل زاوية من زوايا منازل ومكاتب المملكة.",
      title: "لماذا تختارنا؟",
      subtitle: "نحن نجمع بين الخبرة الطويلة والإبداع الحديث لنقدم لك أفضل النتائج.",
      storyTitle: "قصتنا",
      storyP1: "بدأت رحلتنا قبل أكثر من عقد من الزمن بحلم بسيط: تحويل المساحات العادية إلى تحف فنية تسكنها الأرواح. بدأنا بمشروع صغير في الرياض، وسرعان ما أثبتنا أنفسنا كمرجع موثوق في عالم الجبس والديكور الداخلي.",
      storyP2: "اليوم، نفخر بفريق من الحرفيين المتخصصين الذين يجمعون بين الأصالة والابتكار. كل مشروع نتولاه هو فرصة لنا لنترك بصمة جمالية دائمة، ولنتجاوز توقعاتكم في كل مرة.",
      missionTitle: "مهمتنا",
      missionText: "تقديم أعلى مستويات الحرفية في أعمال الجبس والديكور، مع الالتزام بالجودة، والمواعيد، ورضا العملاء في كل خطوة.",
      visionTitle: "رؤيتنا",
      visionText: "أن نكون الخيار الأول والأكثر ثقة في مجال ديكور الجبس في منطقة الخليج، من خلال الابتكار المستمر وخدمة استثنائية.",
      valuesTitle: "قيمنا",
      values: [
        { title: "الأمانة والشفافية", desc: "نتعامل مع عملائنا بصدق تام في السعر والوقت والجودة." },
        { title: "الجودة أولاً", desc: "لا نساوم على جودة المواد أو الحرفية في أي مشروع مهما كان صغيراً." },
        { title: "الابتكار المستمر", desc: "نواكب أحدث الاتجاهات العالمية في التصميم الداخلي." },
        { title: "رضا العميل", desc: "لا ينتهي عملنا إلا حين يكون عميلنا راضياً تماماً." }
      ],
      milestonesTitle: "رحلتنا عبر الزمن",
      milestones: [
        { year: "2014", title: "البداية", desc: "انطلاق أول مشروع احترافي في الرياض مع فريق من 3 حرفيين." },
        { year: "2016", title: "التوسع", desc: "توسعنا لنشمل مشاريع تجارية وفنادق ومجمعات سكنية كبرى." },
        { year: "2019", title: "100 مشروع", desc: "أكملنا مئة مشروع بنجاح واكتسبنا ثقة الشركات والمصممين." },
        { year: "2022", title: "الريادة", desc: "أصبحنا من أبرز الأسماء في مجال الجبس والديكور بالمنطقة." },
        { year: "2024", title: "500+ مشروع", desc: "نواصل التميز بأكثر من 500 مشروع مكتمل وعملاء سعداء." }
      ],
      features: [
        { title: "دقة في المواعيد", desc: "نلتزم بتسليم المشاريع في وقتها المحدد دون تأخير." },
        { title: "خامات عالية الجودة", desc: "نستخدم أفضل أنواع الجبس والمواد لضمان الاستدامة." },
        { title: "تصاميم حصرية", desc: "كل تصميم نقوم به هو قطعة فنية فريدة تناسب ذوقك." },
        { title: "فريق محترف", desc: "حرفيون مدربون يجمعون بين الخبرة والشغف في كل عمل." },
        { title: "ضمان شامل", desc: "ضمان 5 سنوات على جميع أعمالنا وموادنا." },
        { title: "استشارة مجانية", desc: "نقدم زيارة ميدانية مجانية وتقدير دقيق بدون أي التزام." }
      ]
    },
    services: {
      heroBadge: "خدماتنا",
      heroTitle: "حلول ديكور متكاملة",
      heroSub: "من الأسقف المعلقة إلى جدران التلفزيون — نقدم كل ما تحتاجه تحت سقف واحد بجودة تفوق التوقعات.",
      title: "خدماتنا المتميزة",
      subtitle: "نقدم حلولاً متكاملة للديكور الداخلي تلبي احتياجاتك وتفوق توقعاتك.",
      processTitle: "كيف ننفذ مشروعك؟",
      processSub: "أربع خطوات واضحة تضمن لك نتيجة مثالية من البداية إلى النهاية.",
      packagesTitle: "باقاتنا وأسعارنا",
      packagesSub: "نقدم باقات مرنة تناسب جميع الميزانيات دون المساومة على الجودة.",
      packages: [
        {
          name: "الباقة الأساسية",
          badge: "للمساحات الصغيرة",
          price: "يبدأ من 15 ريال/م²",
          features: ["سقف جبس بسيط", "تشطيب ودهان", "ضمان سنة", "استشارة مجانية"],
          highlight: false
        },
        {
          name: "الباقة المتميزة",
          badge: "الأكثر طلباً",
          price: "يبدأ من 35 ريال/م²",
          features: ["تصاميم جبس خاصة", "إضاءة مخفية LED", "ضمان 3 سنوات", "تصميم ثلاثي الأبعاد", "استشارة مجانية"],
          highlight: true
        },
        {
          name: "الباقة الفاخرة",
          badge: "للمشاريع الكبيرة",
          price: "يبدأ من 65 ريال/م²",
          features: ["تصاميم حصرية بالكامل", "إضاءة ذكية وديكور", "ضمان 5 سنوات", "إشراف هندسي كامل", "تسليم مفتاح"],
          highlight: false
        }
      ],
      whyTitle: "لماذا خدماتنا مختلفة؟",
      whyItems: [
        { title: "مواد عالية الجودة", desc: "نستخدم جبس ألماني وإيطالي مستورد يدوم لسنوات." },
        { title: "فريق متخصص", desc: "حرفيون بخبرة 10+ سنوات في الجبس والديكور الداخلي." },
        { title: "ضمان شامل", desc: "ضمان يصل إلى 5 سنوات على جميع أعمالنا." },
        { title: "أسعار تنافسية", desc: "جودة فاخرة بأسعار منافسة وشفافية تامة في التسعير." }
      ],
      ctaTitle: "هل أنت جاهز لتحويل مساحتك؟",
      ctaSub: "احصل على استشارة مجانية وعرض سعر خلال 24 ساعة.",
      ctaBtn: "اطلب استشارة مجانية الآن",
      orderBtn: "اطلب هذه الخدمة",
      items: [
        {
          id: "gypsum",
          badge: "الأكثر طلباً",
          title: "سقف الجبس",
          titleSub: "Gypsum Ceiling",
          desc: "تصاميم مبتكرة للأسقف تضفي لمسة من الرقي والفخامة على منزلك.",
          longDesc: "نتخصص في تنفيذ أسقف الجبس بكل أنواعها وأشكالها، من التصاميم البسيطة الأنيقة إلى التصاميم المعقدة ذات الإضاءة المخفية. نستخدم أجود المواد ونحرص على الدقة في كل التفاصيل لضمان نتيجة تفوق توقعاتك.",
          features: ["سقف بسيط وأنيق (Simple)", "سقف بتصاميم خاصة (Design)", "إضاءة مخفية (Hidden Lights)", "سقف جبس مزخرف", "تركيب سبوت لايت", "عزل حراري وصوتي"],
          process: ["قياس المساحة ومعاينة الموقع", "تقديم التصميم ثلاثي الأبعاد", "توريد المواد وبدء التنفيذ", "تشطيب الدهان والإضاءة", "تسليم وضمان الجودة"],
          img: "/slide1.png",
          duration: "3-7 أيام",
          warranty: "ضمان 5 سنوات"
        },
        {
          id: "partition",
          badge: "للمكاتب والمنازل",
          title: "الجدران الفاصلة",
          titleSub: "Partition Walls",
          desc: "حلول ذكية ومبتكرة لتقسيم المساحات في المكاتب والمنازل والمحلات.",
          longDesc: "نقدم حلول التقسيم الداخلي بأعلى معايير الجودة، سواء للمساحات السكنية أو التجارية. جدراننا الفاصلة تجمع بين الوظيفية والجمال، مع توفير العزل الصوتي الكافي لضمان الخصوصية.",
          features: ["تقسيم الغرف والمساحات", "فواصل مكتبية احترافية", "عزل صوتي وحراري", "جدران جبسية طابقية", "فواصل زجاجية مع جبس", "تشطيب ودهان احترافي"],
          process: ["دراسة المخطط وتحديد التقسيم", "تصميم مقترح بالأبعاد الدقيقة", "توريد الهياكل المعدنية والجبس", "تنفيذ وتشطيب الجدران", "تسليم ومراجعة نهائية"],
          img: "/slide2.png",
          duration: "5-10 أيام",
          warranty: "ضمان 5 سنوات"
        },
        {
          id: "tv",
          badge: "تصاميم عصرية",
          title: "وحدات التلفزيون",
          titleSub: "TV Units & Decor",
          desc: "تصاميم عصرية فاخرة لجدران التلفزيون تجمع بين الجمال الجمالي والوظيفة العملية.",
          longDesc: "نصمم وننفذ وحدات جدران التلفزيون بأحدث الأساليب العصرية، مع دمج الجبس والخشب والإضاءة في تصميم متناسق ومبهر. كل وحدة نقوم بها هي قطعة فنية مصممة خصيصاً لتناسب ذوقك ومساحتك.",
          features: ["جدران تلفزيون حديثة وفاخرة", "أرفف خشبية وجبسية", "إضاءة LED مدمجة", "تنظيم الأسلاك بشكل أنيق", "تصاميم 3D مسبقة", "تركيب شاشات التلفزيون"],
          process: ["استشارة لفهم ذوقك واحتياجاتك", "تصميم ثلاثي الأبعاد للموافقة", "توريد مواد الجبس والخشب", "تنفيذ وتركيب الوحدة", "تنظيم الأسلاك وتسليم المشروع"],
          img: "/slide3.png",
          duration: "3-5 أيام",
          warranty: "ضمان 3 سنوات"
        }
      ]
    },
    portfolio: {
      title: "معرض أعمالنا",
      subtitle: "استكشف بعضاً من أحدث مشاريعنا التي نفخر بها.",
      all: "الكل",
      categories: ["سقف جبس", "جدران فاصلة", "وحدات تلفزيون"],
      viewProject: "عرض المشروع",
      items: [
        { img: "/slide1.png",    cat: "سقف جبس",        title: "سقف LED فاخر",             desc: "سقف جبس بإضاءة مخفية لفيلا سكنية في الرياض" },
        { img: "/gypsum.png",   cat: "سقف جبس",        title: "سقف تصميم مزدوج",         desc: "تصميم سقف مزدوج بالجبس والخشب لغرفة معيشة" },
        { img: "/slide2.png",   cat: "جدران فاصلة",   title: "فواصل مكتبية عصرية",    desc: "تقسيم مساحة مكتب تجاري بالرياض" },
        { img: "/partition.png",cat: "جدران فاصلة",   title: "جدار جبسي زجاجي",        desc: "جدار فاصل زجاجي لشركة في الرياض" },
        { img: "/slide3.png",   cat: "وحدات تلفزيون",  title: "جدار تلفزيون عصري",     desc: "وحدة تلفزيون بتصميم فاخر لشقة سكنية" },
        { img: "/tv.png",       cat: "وحدات تلفزيون",  title: "وحدة خشب وجبس مدمجة",   desc: "تصميم دمج الجبس والخشب لمنزل فاخر" }
      ]
    },
    reviews: {
      badge: "آراء العملاء",
      title: "ماذا يقول عملاؤنا؟",
      subtitle: "نحن نفخر بالثقة التي يوليها لنا عملاؤنا في جميع أنحاء المنطقة.",
      overallRating: "4.9",
      totalReviews: "+450 تقييم",
      items: [
        { name: "أحمد القحطاني", role: "صاحب فيلا",      project: "سقف جبس",       text: "عمل احترافي بكل معنى الكلمة. الدقة في المواعيد والجبس رائع جداً. سأتعامل معهم مجدداً بلا تردد.",                 rating: 5 },
        { name: "محمد الراشد",   role: "مكتب هندسي",    project: "جدران فاصلة",  text: "تعاملنا مع المعلم في عدة مشاريع وكانت النتائج دائماً مذهلة. فريق محترف وملتزم بالجدول الزمني.",  rating: 5 },
        { name: "سارة العتيبي",   role: "مصممة ديكور",  project: "وحدة تلفزيون",  text: "تصاميم عصرية جداً وتنفيذ دقيق للتفاصيل الصغيرة. أنصح بهم لكل من يبحث عن جودة.",             rating: 5 },
        { name: "خالد الدوسري",   role: "مدير شركة",     project: "سقف جبس",       text: "أنجزوا سقف مكتبنا بشكل يفوق التوقعات، الدقة والنظافة في العمل مميزة نادرة في السوق.",         rating: 5 },
        { name: "ليلى الشمري",    role: "ربة منزل",      project: "جدران فاصلة",  text: "أحسن ما يميزهم هو التعامل الراقي والتقيد بالتفاصيل حتى أصغرها. شكراً جزيلاً على العمل الرائع.", rating: 5 }
      ]
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "الأسئلة الشائعة",
      subtitle: "إليك بعض الإجابات على الأسئلة التي قد تدور في ذهنك.",
      stillQuestion: "لديك سؤال آخر؟",
      stillQuestionSub: "فريقنا جاهز للإجابة على جميع استفساراتك.",
      contactBtn: "تواصل معنا",
      items: [
        { q: "كم يستغرق تنفيذ سقف الغرفة؟",          a: "عادةً يستغرق من 3 إلى 7 أيام عمل حسب تعقيد التصميم ومساحة المكان. نحرص دائماً على التسليم في الوقت المتفق عليه." },
        { q: "هل تقدمون ضماناً على العمل؟",           a: "نعم، نقدم ضماناً شاملاً على جودة المواد والتنفيذ لمدة تصل إلى 5 سنوات. أي عيب في التنفيذ أو المواد يتم معالجته مباشرة وبدون تكلفة إضافية." },
        { q: "هل الاستشارة الفنية مجانية؟",          a: "بالتأكيد، نقوم بزيارة الموقع وتقديم الاستشارة والقياسات مجاناً تماماً. كما نقدم تصميماً ثلاثي الأبعاد مجانياً قبل البدء." },
        { q: "ما هي أنواع الجبس التي تستخدمونها؟",    a: "نستخدم أفضل أنواع الجبس المستورد من ألمانيا وإيطاليا، وهي معروفة بجودتها العالية ومتانتها ومقاومتها للرطوبة والحرارة." },
        { q: "هل تعملون خارج مدينة الرياض؟",         a: "نعم، نخدم جميع مناطق المملكة العربية السعودية. كلفنا بتفاصيل المشروع وسنوفر لك عرضاً بمصاريف التنقل." },
        { q: "كيف يتم احتساب سعر المشروع؟",           a: "يتم احتساب السعر بناءً على المساحة ونوع التصميم وجودة المواد. نقدم عرضاً سعرياً شفافاً بعد زيارة الموقع مباشرة." }
      ]
    },
    contact: {
      badge: "تواصل معنا",
      title: "تواصل مع معلم الجبس",
      subtitle: "نحن هنا لمساعدتك في تحقيق رؤيتك. تواصل معنا اليوم!",
      formTitle: "أرسل رسالة",
      name: "الاسم الكامل",
      phone: "رقم الجوال",
      email: "البريد الإلكتروني",
      service: "نوع الخدمة",
      servicePlaceholder: "اختر الخدمة...",
      serviceOptions: ["سقف جبس", "جدران فاصلة", "وحدة تلفزيون", "أخرى"],
      message: "رسالتك وتفاصيل المشروع",
      send: "إرسال الرسالة",
      whatsapp: "تواصل عبر واتساب",
      call: "اتصل بنا الآن",
      emailLabel: "راسلنا عبر البريد",
      hoursLabel: "ساعات العمل",
      hoursValue: "السبت – الخميس: 8ص – 9م",
      addressLabel: "موقعنا",
      addressValue: "الرياض، المملكة العربية السعودية",
      successMsg: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
    },
    footer: {
      rights: "© 2024 معلم الجبس والديكور. جميع الحقوق محفوظة.",
      location: "المملكة العربية السعودية، الرياض",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      by: "تصميم بكل تميز"
    }
  },
  en: {
    dir: "ltr" as const,
    font: "",
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact Us",
    },
    hero: {
      badge: "Designing Your Dreams",
      title1: "Master of Gypsum",
      title2: "& Decor Design",
      desc: "Specializing in transforming ordinary spaces into masterpieces. From gypsum ceilings to modern decor, we guarantee quality and excellence. Your vision, our craftsmanship—delivered with perfection. Turning your imagination into a tangible reality in every corner of your home.",
      ctaPrimary: "Free Consultation",
      ctaSecondary: "View Our Work",
    },
    process: {
      title: "Our Process",
      subtitle: "Simple and organized steps to reach the perfect result.",
      steps: [
        { title: "Consult & Measure", desc: "Site visit and precise measurements for free.", icon: PenTool },
        { title: "3D Design", desc: "Visualize the design before starting to ensure satisfaction.", icon: Layout },
        { title: "Execution", desc: "Work starts with the highest quality standards.", icon: HardHat },
        { title: "Final Delivery", desc: "Ensuring full satisfaction and timely project handover.", icon: Rocket },
      ]
    },
    hours: {
      title: "Working Hours",
      days: "Saturday to Thursday",
      time: "8:00 AM - 9:00 PM",
      closed: "Friday: Closed",
    },
    stats: [
      { label: "Years Exp.", value: "10+", icon: Clock },
      { label: "Projects Done", value: "500+", icon: Check },
      { label: "Happy Clients", value: "450+", icon: Users },
      { label: "Quality Assurance", value: "100%", icon: Award },
    ],
    about: {
      heroQuote: "Transforming Your Vision into Reality — With Precision & Artistry",
      heroSub: "For over a decade, we have been crafting beauty in every corner of homes and offices across the Kingdom.",
      title: "Why Choose Us?",
      subtitle: "We combine years of experience with modern creativity to deliver the best results.",
      storyTitle: "Our Story",
      storyP1: "Our journey began over a decade ago with a simple dream: to transform ordinary spaces into works of art. We started with a single project in Riyadh, and quickly established ourselves as a trusted name in gypsum and interior decor.",
      storyP2: "Today, we are proud of a team of skilled craftsmen who blend tradition with innovation. Every project we undertake is an opportunity to leave a lasting impression—and to exceed your expectations every single time.",
      missionTitle: "Our Mission",
      missionText: "To deliver the highest standards of craftsmanship in gypsum and decor work, while maintaining unwavering commitment to quality, timelines, and client satisfaction.",
      visionTitle: "Our Vision",
      visionText: "To be the most trusted and preferred choice for gypsum decor in the Gulf region, through continuous innovation and exceptional service.",
      valuesTitle: "Our Values",
      values: [
        { title: "Integrity & Transparency", desc: "We deal with our clients with complete honesty in pricing, timelines, and quality." },
        { title: "Quality First", desc: "We never compromise on the quality of materials or craftsmanship, no matter the project size." },
        { title: "Continuous Innovation", desc: "We stay up to date with the latest global trends in interior design." },
        { title: "Client Satisfaction", desc: "Our work is not done until our client is completely satisfied." }
      ],
      milestonesTitle: "Our Journey Through Time",
      milestones: [
        { year: "2014", title: "The Beginning", desc: "Our first professional project launched in Riyadh with a team of 3 craftsmen." },
        { year: "2016", title: "Expansion", desc: "We expanded to include commercial projects, hotels, and major residential complexes." },
        { year: "2019", title: "100 Projects", desc: "We successfully completed 100 projects, earning the trust of companies and designers." },
        { year: "2022", title: "Leadership", desc: "We became one of the most recognized names in gypsum and decor in the region." },
        { year: "2024", title: "500+ Projects", desc: "We continue to excel with over 500 completed projects and countless happy clients." }
      ],
      features: [
        { title: "Timely Delivery", desc: "We commit to delivering projects on schedule without delays." },
        { title: "Premium Materials", desc: "We use the best types of gypsum and materials to ensure durability." },
        { title: "Exclusive Designs", desc: "Every design we create is a unique piece of art tailored to your taste." },
        { title: "Professional Team", desc: "Trained craftsmen who combine experience and passion in every project." },
        { title: "Full Warranty", desc: "5-year warranty on all our work and materials." },
        { title: "Free Consultation", desc: "We offer a free site visit and accurate estimate with no obligation." }
      ]
    },
    services: {
      heroBadge: "Our Services",
      heroTitle: "Complete Decor Solutions",
      heroSub: "From suspended ceilings to TV walls — everything you need under one roof, with quality that exceeds expectations.",
      title: "Our Premium Services",
      subtitle: "We provide integrated interior design solutions that meet your needs and exceed your expectations.",
      processTitle: "How We Execute Your Project",
      processSub: "Four clear steps that guarantee a perfect result from start to finish.",
      packagesTitle: "Our Packages & Pricing",
      packagesSub: "Flexible packages to suit all budgets without compromising on quality.",
      packages: [
        {
          name: "Basic Package",
          badge: "For Small Spaces",
          price: "Starting from 15 SAR/m²",
          features: ["Simple gypsum ceiling", "Finishing & paint", "1-year warranty", "Free consultation"],
          highlight: false
        },
        {
          name: "Premium Package",
          badge: "Most Popular",
          price: "Starting from 35 SAR/m²",
          features: ["Custom gypsum designs", "Hidden LED lighting", "3-year warranty", "3D design preview", "Free consultation"],
          highlight: true
        },
        {
          name: "Luxury Package",
          badge: "For Large Projects",
          price: "Starting from 65 SAR/m²",
          features: ["Fully exclusive designs", "Smart lighting & decor", "5-year warranty", "Full engineering supervision", "Turnkey delivery"],
          highlight: false
        }
      ],
      whyTitle: "Why Our Services Stand Out",
      whyItems: [
        { title: "Premium Materials", desc: "We use imported German & Italian gypsum that lasts for years." },
        { title: "Expert Team", desc: "Craftsmen with 10+ years of experience in gypsum and interior decor." },
        { title: "Full Warranty", desc: "Up to 5 years warranty on all our work." },
        { title: "Competitive Pricing", desc: "Luxury quality at competitive prices with full pricing transparency." }
      ],
      ctaTitle: "Ready to Transform Your Space?",
      ctaSub: "Get a free consultation and a price quote within 24 hours.",
      ctaBtn: "Request a Free Consultation Now",
      orderBtn: "Order This Service",
      items: [
        {
          id: "gypsum",
          badge: "Most Popular",
          title: "Gypsum Ceiling",
          titleSub: "سقف الجبس",
          desc: "Innovative ceiling designs that add a touch of sophistication and luxury to your home.",
          longDesc: "We specialize in executing all types and styles of gypsum ceilings — from elegant simple designs to complex ones with hidden lighting. We use the finest materials and pay close attention to every detail to ensure a result that exceeds your expectations.",
          features: ["Simple & elegant ceiling", "Custom design ceilings", "Hidden lighting (LED)", "Decorative gypsum ceiling", "Spotlight installation", "Thermal & acoustic insulation"],
          process: ["Site visit & measurement", "3D design presentation", "Material supply & execution", "Paint finishing & lighting", "Delivery & quality assurance"],
          img: "/slide1.png",
          duration: "3–7 Days",
          warranty: "5-Year Warranty"
        },
        {
          id: "partition",
          badge: "For Offices & Homes",
          title: "Partition Walls",
          titleSub: "الجدران الفاصلة",
          desc: "Smart and innovative space division solutions for offices, homes, and commercial units.",
          longDesc: "We provide interior partition solutions to the highest quality standards, for both residential and commercial spaces. Our partition walls combine functionality and aesthetics, with sufficient acoustic insulation to ensure privacy.",
          features: ["Room & space dividing", "Professional office partitions", "Acoustic & thermal insulation", "Floor-to-ceiling gypsum walls", "Glass & gypsum combined", "Professional finishing & paint"],
          process: ["Floor plan study & layout planning", "Design proposal with exact dimensions", "Metal framing & gypsum supply", "Wall installation & finishing", "Final review & handover"],
          img: "/slide2.png",
          duration: "5–10 Days",
          warranty: "5-Year Warranty"
        },
        {
          id: "tv",
          badge: "Modern Designs",
          title: "TV Units & Decor",
          titleSub: "وحدات التلفزيون",
          desc: "Luxury modern TV wall designs that combine stunning aesthetics with practical functionality.",
          longDesc: "We design and execute TV wall units in the latest modern styles, blending gypsum, wood, and lighting into a cohesive and impressive design. Every unit we build is a custom work of art tailored to your taste and space.",
          features: ["Modern luxury TV walls", "Wooden & gypsum shelves", "Built-in LED lighting", "Elegant cable management", "Pre-approved 3D designs", "TV screen mounting included"],
          process: ["Consultation to understand your taste", "3D design for approval", "Gypsum & wood supply", "Unit installation & assembly", "Cable management & project handover"],
          img: "/slide3.png",
          duration: "3–5 Days",
          warranty: "3-Year Warranty"
        }
      ]
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle: "Explore some of our latest projects we are proud of.",
      all: "All",
      categories: ["Gypsum Ceiling", "Partition Walls", "TV Units"],
      viewProject: "View Project",
      items: [
        { img: "/slide1.png",    cat: "Gypsum Ceiling",   title: "Luxury LED Ceiling",          desc: "Gypsum ceiling with hidden LED lighting for a residential villa in Riyadh" },
        { img: "/gypsum.png",   cat: "Gypsum Ceiling",   title: "Double-Layer Ceiling",        desc: "Mixed gypsum and wood double-layer ceiling design for a living room" },
        { img: "/slide2.png",   cat: "Partition Walls",  title: "Modern Office Partitions",   desc: "Space division for a commercial office in Riyadh" },
        { img: "/partition.png",cat: "Partition Walls",  title: "Glass & Gypsum Wall",        desc: "Combined glass and gypsum partition wall for a company in Riyadh" },
        { img: "/slide3.png",   cat: "TV Units",         title: "Modern TV Feature Wall",     desc: "Luxury TV wall unit design for a residential apartment" },
        { img: "/tv.png",       cat: "TV Units",         title: "Wood & Gypsum TV Unit",      desc: "Blended gypsum and wood TV unit design for a luxury home" }
      ]
    },
    reviews: {
      badge: "Client Feedback",
      title: "What Our Clients Say",
      subtitle: "We pride ourselves on the trust our clients place in us across the region.",
      overallRating: "4.9",
      totalReviews: "450+ Reviews",
      items: [
        { name: "Ahmed Al-Qahtani",  role: "Villa Owner",        project: "Gypsum Ceiling",   text: "Professional work in every sense. Timely delivery and the gypsum work is stunning. I will definitely work with them again.",        rating: 5 },
        { name: "Mohamed Al-Rashed", role: "Engineering Firm",   project: "Partition Walls",  text: "We've worked with the Master on several projects and the results are always amazing. Professional team, always on schedule.", rating: 5 },
        { name: "Sarah Al-Otaibi",   role: "Interior Designer",  project: "TV Unit",          text: "Very modern designs and precise execution of the smallest details. I highly recommend them to anyone who values quality.",    rating: 5 },
        { name: "Khalid Al-Dosari",  role: "Company Director",   project: "Gypsum Ceiling",   text: "They finished our office ceiling beyond expectations. The precision and cleanliness of work is rare in the market.",          rating: 5 },
        { name: "Layla Al-Shamri",   role: "Homeowner",          project: "Partition Walls",  text: "What distinguishes them is the premium service and attention to every detail. Truly a great experience.",                    rating: 5 }
      ]
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Here are answers to the most common questions we receive.",
      stillQuestion: "Still have a question?",
      stillQuestionSub: "Our team is ready to answer all your inquiries.",
      contactBtn: "Contact Us",
      items: [
        { q: "How long does a ceiling project take?",       a: "Typically 3 to 7 working days depending on the design complexity and area size. We always commit to the agreed timeline." },
        { q: "Do you offer a warranty on your work?",        a: "Yes, we provide a full warranty on materials and execution quality for up to 5 years. Any defects are fixed immediately at no extra cost." },
        { q: "Is the technical consultation free?",          a: "Absolutely. We visit the site, take measurements, and provide a free 3D design preview before any work begins." },
        { q: "What types of gypsum do you use?",             a: "We use the best imported German and Italian gypsum, known for their superior quality, durability, and resistance to humidity and heat." },
        { q: "Do you work outside Riyadh?",                  a: "Yes, we serve all regions of Saudi Arabia. Contact us with your project details and we will provide a quote including travel costs." },
        { q: "How is the project price calculated?",         a: "Pricing is based on the area, design type, and material quality. We provide a transparent, itemized quote after a free site visit." }
      ]
    },
    contact: {
      badge: "Get In Touch",
      title: "Contact Master of Gypsum",
      subtitle: "We're here to help you achieve your vision. Get in touch today!",
      formTitle: "Send a Message",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      service: "Service Type",
      servicePlaceholder: "Select a service...",
      serviceOptions: ["Gypsum Ceiling", "Partition Walls", "TV Unit", "Other"],
      message: "Your message & project details",
      send: "Send Message",
      whatsapp: "Chat on WhatsApp",
      call: "Call Us Now",
      emailLabel: "Email Us",
      hoursLabel: "Working Hours",
      hoursValue: "Sat – Thu: 8AM – 9PM",
      addressLabel: "Our Location",
      addressValue: "Riyadh, Saudi Arabia",
      successMsg: "Your message has been sent! We will contact you shortly.",
    },
    footer: {
      rights: "© 2024 Master of Gypsum & Decor. All rights reserved.",
      location: "Riyadh, Saudi Arabia",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      by: "Designed with Excellence"
    }
  }
}

export const slides = [
  { img: "/slide1.png", title: "Luxury Ceilings" },
  { img: "/slide2.png", title: "Modern Partitions" },
  { img: "/slide3.png", title: "TV Wall Units" }
]

export const PHONE_NUMBER = "+9660509460890"
export const EMAIL = "jh8682055@gmail.com"
