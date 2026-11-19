import { createContext, useContext, useEffect, useState } from 'react';

const translations = {
  'שלום אלישבע, אשמח לשמוע על שירותי התכנון והעיצוב של Studio 7': 'Hi Elisheva, I would love to learn about Studio 7’s planning and design services.',
  'Studio 7 עמוד הבית': 'Studio 7 home', 'ניווט ראשי': 'Main navigation',
  'השארת פרטים': 'Get in touch', 'סגור תפריט': 'Close menu', 'פתח תפריט': 'Open menu',
  'תצוגה מוגדלת': 'Image viewer', 'סגירה': 'Close', 'סגור': 'Close',
  'תמונה קודמת': 'Previous image', 'תמונה הבאה': 'Next image', 'סגור פרויקט': 'Close project',
  'פרויקט שבוצע': 'Completed project', 'צפייה בתמונות לפני ואחרי': 'Before and after photos',
  'אחרי השיפוץ': 'After renovation', 'לפני השיפוץ': 'Before renovation',
  'הגדלת תמונה: ': 'Enlarge image: ', 'הצגת הדמיה: ': 'View rendering: ',
  'סיור קצר בתוצאה': 'A closer look', 'הדפדפן אינו תומך בהפעלת הווידאו.': 'Your browser does not support video playback.',
  'שם: ': 'Name: ', 'טלפון: ': 'Phone: ', 'אימייל: ': 'Email: ', 'הודעה: ': 'Message: ',
  'פנייה מאתר Studio 7 — ': 'Studio 7 website enquiry — ',
  'השליחה נכשלה. נסו שוב או צרו קשר בוואטסאפ.': 'Could not send your message. Please try again or contact us on WhatsApp.',
  'שם מלא': 'Full name', 'איך קוראים לך?': 'Your full name', 'מספר טלפון': 'Phone number',
  'כתובת אימייל': 'Email address', 'סוג הפרויקט': 'Project type', 'בחרו נושא': 'Select a project type',
  'שיפוץ דירה': 'Apartment renovation', 'בית פרטי': 'Private home', 'חלל בודד': 'Single room', 'אחר': 'Other',
  'ספרו קצת על הפרויקט': 'Tell us about your project', 'נשמח לשמוע מה תרצו לתכנן...': 'What would you like to create?',
  'תודה, הפנייה נשלחה!': 'Thank you! Your message has been sent.', 'שולחים...': 'Sending...', 'שליחת פנייה': 'Send enquiry',
  'הפרטים יועברו להודעת אימייל חדשה. יש ללחוץ על שליחה בתוכנת האימייל כדי להשלים את הפנייה.': 'This opens a new message in your email app. Please press Send there to complete your enquiry.',
  'מספר הוואטסאפ עדיין לא הוגדר. יש לעדכן אותו לפני פרסום האתר.': 'WhatsApp is currently unavailable. Please contact us by email.',
  'דלגו לתוכן': 'Skip to content', 'תכנון מדויק.': 'Thoughtful design.', 'חללים עם אופי.': 'Spaces with character.',
  'אדריכלות ועיצוב פנים לחללים פרטיים, מסחריים וציבוריים — מתוך הקשבה לצרכים, מחשבה על החלל ודיוק בפרטים.': 'Architecture and interior design for residential, commercial and public spaces — shaped by your needs, considered planning and attention to detail.',
  'לגלות את העבודות': 'Explore our work', 'תכנון ועיצוב פנים': 'Interior planning & design', '· הדמיה': '· Rendering',
  'חלל טוב מתחיל בהבנה עמוקה.': 'Great spaces begin with understanding.', 'הפרטים מעניקים לו משמעות.': 'Details give them meaning.',
  'מבט אל תהליך העיצוב · הדמיה': 'Behind the design · Rendering', 'עבודות שבוצעו': 'Completed work',
  'מבט על עבודות שבוצעו בפועל. לפרויקט חדר הרחצה גלריית תמונות לפני ואחרי וסרטון קצר.': 'Explore a completed renovation through before and after photographs and a short project film.',
  'הצגת פרויקט חידוש חדר הרחצה': 'View bathroom renovation project', 'חדר הרחצה לאחר חידוש יסודי': 'The bathroom after a complete renovation',
  'לגלריה ולתמונות לפני ואחרי': 'Explore before & after', 'תהליך עם מחשבה': 'A considered process',
  'שירותי הסטודיו והדרך שבה רעיון הופך לתכנון ברור ולביצוע מדויק.': 'From the first idea to clear plans and carefully considered execution.',
  'מתחילים': 'It starts', 'בשיחה.': 'with a conversation.',
  'שלבי עבודה עיקריים, המותאמים להיקף ולאופי של כל פרויקט.': 'A thoughtful workflow tailored to the scope and character of each project.',
  'היכרות עם': 'Meet', 'אלישבע.': 'Elisheva.', 'אלישבע': 'Elisheva',
  'סמל Studio 7': 'Studio 7 logo', 'בואו נדבר על הפרויקט שלכם': 'Let’s talk about your project',
  'ניצור יחד': 'Let’s create', 'משהו אישי.': 'something personal.',
  'יש לכם חלל שמחכה לשינוי? השאירו פרטים ואפשר להתחיל בשיחה.': 'Have a space ready for a change? Leave your details and let’s start a conversation.',
  'פרטי הקשר יעודכנו בקרוב': 'Contact details coming soon',
  'טופס ההתקשרות עדיין לא מחובר לכתובת אימייל או לשירות שליחת טפסים. יש להגדיר זאת לפני פרסום האתר.': 'The contact form is currently unavailable. Please contact us directly.',
  'יצירת קשר מהיר': 'Quick contact', 'WhatsApp – יצירת קשר': 'Contact us on WhatsApp', 'מעבר לטופס השארת פרטים': 'Go to the contact form',
  'לפני הפרסום': 'Contact information', 'הבנתי': 'Got it',
  'אדריכלות ועיצוב פנים': 'Architecture & interior design', 'תכנון מדויק. חללים עם אופי.': 'Thoughtful design. Spaces with character.',
  'Studio 7 הוא סטודיו לאדריכלות ועיצוב פנים בהובלת אלישבע, בוגרת תואר B.Arch באדריכלות מאוניברסיטת אריאל. במשך ארבע שנים עבדה במשרדו של האדריכל רון פליישר, שם צברה ניסיון במגוון רחב של תחומי התכנון — מתכנון ערים ועד עיצוב פנים.': 'Studio 7 is an architecture and interior design studio led by Elisheva, who holds a B.Arch from Ariel University. During four years at architect Ron Fleisher’s practice, she gained experience across a broad range of disciplines, from urban planning to interior design.',
  'כיום אלישבע מתמקדת בתכנון ובעיצוב פנים במגזר הפרטי, המסחרי והציבורי. בעבודתה היא משלבת ראייה אדריכלית רחבה עם התייחסות לשימוש בחלל, לאור, לחומרים ולפרטים שמעניקים לכל מקום את אופיו.': 'Today, Elisheva focuses on residential, commercial and public interiors. Her work combines an architectural perspective with a close attention to how a space is used, its light, materials and the details that give it character.',
  'חידוש חדר רחצה, שירותים וחדר כביסה': 'Bathroom & laundry renovation',
  'שיפוץ יסודי של חדר הרחצה, השירותים וחדר הכביסה. דרך צילומי הלפני והאחרי ניתן לראות את השינוי בחללים ואת התוצאה המוגמרת.': 'A complete renovation of the bathroom, toilet and laundry room. Before and after photographs reveal the transformation and the finished spaces.',
  'חדר רחצה אחרי השיפוץ': 'Bathroom after renovation', 'מקלחון אחרי השיפוץ': 'Shower after renovation', 'שירותים אחרי השיפוץ': 'Toilet after renovation',
  'פרט במקלחון אחרי השיפוץ': 'Shower detail after renovation', 'חדר רחצה לפני השיפוץ': 'Bathroom before renovation',
  'חדר רחצה לפני השיפוץ מזווית נוספת': 'Another view of the bathroom before renovation', 'חדר הכביסה לפני השיפוץ': 'Laundry room before renovation',
  'חומר, אור ובית': 'Material, light & home', 'דופלקס בבני ברק · תכנון ועיצוב פנים': 'Duplex in Bnei Brak · Interior planning & design', 'פרויקט בתהליך': 'Work in progress',
  'מבט אל תהליך העיצוב: חללים משפחתיים, חומרים טבעיים ותכנון שמחבר בין יופי לחיי היומיום. ההדמיות מציגות את הכיוון העיצובי ואת השפה המשותפת בין החללים.': 'A glimpse into the design process: family spaces, natural materials and planning that brings beauty into everyday life. These renderings explore the design direction and the visual language connecting the rooms.',
  'חלל אירוח ופינת אוכל': 'Living & dining', 'מבואת כניסה': 'Entrance hall', 'חדר שינה': 'Bedroom', 'פינת אוכל עגולה': 'Round dining space',
  'הדמיית חלל מגורים ופינת אוכל בחומרים טבעיים': 'Living and dining rendering with natural materials', 'הדמיית מבואת כניסה עם פרטי נגרות ותאורה': 'Entrance hall rendering with bespoke joinery and lighting',
  'הדמיית חדר שינה בגוונים חמים': 'Bedroom rendering in warm tones', 'הדמיית פינת אוכל משפחתית': 'Family dining space rendering',
  'הפקת תכניות עבודה': 'Detailed working drawings', 'ליווי ביצוע': 'On-site design support',
  'תכנון חללים פרטיים, מסחריים וציבוריים מתוך שילוב של צורכי השימוש, פרופורציות ושפה עיצובית אישית.': 'Designing residential, commercial and public interiors with a balance of function, proportion and a personal design language.',
  'תרגום הרעיון והקונספט לסט תכניות עבודה מסודר ומפורט, המסייע להעביר את התכנון משלב הרעיון לשלב הביצוע.': 'Translating the concept into a coordinated set of detailed drawings that helps bring the design from idea to execution.',
  'ליווי במהלך הביצוע, מענה לשאלות תכנוניות והתייחסות לפרטים בשטח בהתאם להיקף הליווי שנקבע.': 'Design support during construction, addressing planning questions and on-site details within the agreed scope.',
  'היכרות ואפיון צרכים': 'Getting to know you & your needs', 'קונספט ותכנון החלל': 'Concept & space planning',
  'תכניות עבודה ובחירות עיצוביות': 'Working drawings & design selections', 'ליווי ביצוע בהתאם לפרויקט': 'Project-specific construction support',
};

const hebrewLabels = {
  'Selected work': 'עבודות שבוצעו', 'Design studies': 'תהליך העיצוב', 'Services & process': 'שירותים ותהליך', 'About Studio 7': 'אודות הסטודיו', 'Contact': 'יצירת קשר',
  'STUDIO 7 · ARCHITECTURE & INTERIOR DESIGN': 'STUDIO 7 · אדריכלות ועיצוב פנים', 'ARCHITECTURE · INTERIORS · DETAILS': 'אדריכלות · עיצוב פנים · פרטים',
  'SCROLL TO EXPLORE': 'גללו לגלות עוד', 'THE STUDIO PHILOSOPHY': 'הגישה שלנו', 'DESIGN STUDIES': 'תהליך העיצוב', 'SELECTED WORK': 'עבודות שבוצעו',
  'COMPLETED PROJECT': 'פרויקט שבוצע', '01 / COMPLETED WORK': '01 / פרויקט שבוצע', 'SELECTED WORK / COMPLETED': 'עבודות שבוצעו / פרויקט שהושלם',
  'PROJECT FILM': 'סרטון הפרויקט', 'SERVICES & PROCESS': 'שירותים ותהליך', 'THE PROCESS': 'תהליך העבודה',
  '04 / ABOUT STUDIO 7': '04 / אודות הסטודיו', '05 / GET IN TOUCH': '05 / יצירת קשר', 'TELL US ABOUT YOUR PROJECT': 'ספרו לנו על הפרויקט שלכם',
};

const LanguageContext = createContext(null);
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('studio7-language') === 'en' ? 'en' : 'he'; } catch { return 'he'; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.title = language === 'he' ? 'STUDIO 7 | אדריכלות ועיצוב פנים' : 'STUDIO 7 | Architecture & Interior Design';
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'he' ? 'Studio 7 — אדריכלות ועיצוב פנים בהובלת אלישבע.' : 'Studio 7 — architecture and interior design by Elisheva. A sense of home, uniquely yours.');
    try { localStorage.setItem('studio7-language', language); } catch { /* Storage may be unavailable. */ }
  }, [language]);
  const t = (text) => {
    const dictionary = language === 'en' ? translations : hebrewLabels;
    if (dictionary[text] !== undefined) return dictionary[text];
    // Preserve separators in composed email messages.
    const prefix = text.match(/^\s*/)[0];
    return dictionary[text.slice(prefix.length)] !== undefined ? prefix + dictionary[text.slice(prefix.length)] : text;
  };
  const translate = (value) => typeof value === 'string' ? t(value) : Array.isArray(value) ? value.map(translate) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translate(item)])) : value;
  return <LanguageContext.Provider value={{ language, setLanguage, t, translate }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
