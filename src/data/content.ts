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
      title: "لماذا تختارنا؟",
      subtitle: "نحن نجمع بين الخبرة الطويلة والإبداع الحديث لنقدم لك أفضل النتائج.",
      features: [
        { title: "دقة في المواعيد", desc: "نلتزم بتسليم المشاريع في وقتها المحدد دون تأخير." },
        { title: "خامات عالية الجودة", desc: "نستخدم أفضل أنواع الجبس والمواد لضمان الاستدامة." },
        { title: "تصاميم حصرية", desc: "كل تصميم نقوم به هو قطعة فنية فريدة تناسب ذوقك." }
      ]
    },
    services: {
      title: "خدماتنا المتميزة",
      subtitle: "نقدم حلولاً متكاملة للديكور الداخلي تلبي احتياجاتك وتفوق توقعاتك.",
      items: [
        {
          id: "gypsum",
          title: "سقف جبس (Gypsum Ceiling)",
          desc: "تصاميم مبتكرة للأسقف تضفي لمسة من الرقي على منزلك.",
          features: ["سقف بسيط (Simple)", "سقف بتصاميم خاصة (Design)", "إضاءة مخفية (Hidden lights)"],
          img: "/slide1.png"
        },
        {
          id: "partition",
          title: "جدران فاصل (Partition Walls)",
          desc: "حلول ذكية لتقسيم المساحات في المكاتب والمنازل.",
          features: ["تقسيم الغرف (Room division)", "فواصل مكتبية (Office partition)", "عزل صوتي وجمالي"],
          img: "/slide2.png"
        },
        {
          id: "tv",
          title: "وحدات التلفزيون والديكور",
          desc: "تصاميم عصرية لجدران التلفزيون تجمع بين الجمال والوظيفة.",
          features: ["جدران تلفزيون حديثة", "أرفف وتصاميم خشبية", "تنظيم الكابلات والجماليات"],
          img: "/slide3.png"
        }
      ]
    },
    portfolio: {
      title: "معرض أعمالنا",
      subtitle: "استكشف بعضاً من أحدث مشاريعنا التي نفخر بها.",
    },
    reviews: {
      title: "ماذا يقول عملاؤنا؟",
      subtitle: "نحن نفخر بالثقة التي يوليها لنا عملاؤنا في جميع أنحاء المنطقة.",
      items: [
        { name: "أحمد القحطاني", role: "صاحب فيلا", text: "عمل احترافي بكل معنى الكلمة. الدقة في المواعيد والجبس رائع جداً.", rating: 5 },
        { name: "محمد الراشد", role: "مكتب هندسي", text: "تعاملنا مع المعلم في عدة مشاريع وكانت النتائج دائماً مذهلة.", rating: 5 },
        { name: "سارة العتيبي", role: "مصممة ديكور", text: "تصاميم عصرية جداً وتنفيذ دقيق للتفاصيل الصغيرة.", rating: 5 }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إليك بعض الإجابات على الأسئلة التي قد تدور في ذهنك.",
      items: [
        { q: "كم يستغرق تنفيذ سقف الغرفة؟", a: "عادة ما يستغرق من 3 إلى 5 أيام عمل حسب تعقيد التصميم." },
        { q: "هل تقدمون ضماناً على العمل؟", a: "نعم، نقدم ضماناً كامللاً على جودة المواد والتنفيذ لمدة 5 سنوات." },
        { q: "هل الاستشارة الفنية مجانية؟", a: "بالتأكيد، نقوم بزيارة الموقع وتقديم الاستشارة والقياسات مجاناً." }
      ]
    },
    contact: {
      title: "تواصل مع معلم الجبس والديكور",
      subtitle: "نحن هنا لمساعدتك في تحقيق رؤيتك. تواصل معنا اليوم!",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      send: "إرسال الرسالة",
      whatsapp: "تواصل عبر واتساب",
      call: "اتصل بنا الآن",
    },
    footer: {
      rights: "© 2024 معلم الجبس والديكور. جميع الحقوق محفوظة.",
      location: "المملكة العربية السعودية، الرياض",
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
      title: "Why Choose Us?",
      subtitle: "We combine years of experience with modern creativity to deliver the best results.",
      features: [
        { title: "Timely Delivery", desc: "We commit to delivering projects on schedule without delays." },
        { title: "Premium Materials", desc: "We use the best types of gypsum and materials to ensure durability." },
        { title: "Exclusive Designs", desc: "Every design we create is a unique piece of art tailored to your taste." }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "We provide integrated interior design solutions that meet your needs and exceed your expectations.",
      items: [
        {
          id: "gypsum",
          title: "Gypsum Ceiling",
          desc: "Innovative ceiling designs that add a touch of sophistication to your home.",
          features: ["Simple ceiling", "Design ceiling", "Hidden lights design"],
          img: "/slide1.png"
        },
        {
          id: "partition",
          title: "Partition Walls",
          desc: "Smart solutions for dividing spaces in offices and homes.",
          features: ["Room division", "Office partition", "Aesthetic solutions"],
          img: "/slide2.png"
        },
        {
          id: "tv",
          title: "TV Units & Decoration",
          desc: "Modern TV wall designs that combine beauty and functionality.",
          features: ["Modern TV walls", "Shelves & design", "Cable management"],
          img: "/slide3.png"
        }
      ]
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle: "Explore some of our latest projects we are proud of.",
    },
    reviews: {
      title: "What Our Clients Say",
      subtitle: "We pride ourselves on the trust our clients place in us across the region.",
      items: [
        { name: "Ahmed Al-Qahtani", role: "Villa Owner", text: "Professional work in every sense. Timely and the gypsum is stunning.", rating: 5 },
        { name: "Mohamed Al-Rashed", role: "Engineering Firm", text: "We've worked with the Master on several projects and the results are always amazing.", rating: 5 },
        { name: "Sarah Al-Otaibi", role: "Interior Designer", text: "Very modern designs and precise execution of small details.", rating: 5 }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Here are some answers to common questions you might have.",
      items: [
        { q: "How long does a project take?", a: "Typically 3 to 5 working days depending on the complexity." },
        { q: "Do you offer a warranty?", a: "Yes, we provide a full 5-year warranty on materials and execution quality." },
        { q: "Is the consultation free?", a: "Absolutely, we visit the site and provide measurements for free." }
      ]
    },
    contact: {
      title: "Contact Master of Gypsum",
      subtitle: "We're here to help you achieve your vision. Get in touch today!",
      name: "Name",
      email: "Email",
      message: "Your Message",
      send: "Send Message",
      whatsapp: "Chat on WhatsApp",
      call: "Call Us Now",
    },
    footer: {
      rights: "© 2024 Master of Gypsum & Decor. All rights reserved.",
      location: "Riyadh, Saudi Arabia",
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
