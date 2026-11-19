/* כל פרטי הסטודיו במקום אחד. את המידע המקצועי והקשרים מסרה אלישבע. */
export const site = {
  name: 'STUDIO 7',
  designer: 'אלישבע',
  tagline: 'A sense of home, uniquely yours.',
  descriptor: 'אדריכלות ועיצוב פנים',
  statement: 'תכנון מדויק. חללים עם אופי.',
  about: 'Studio 7 הוא סטודיו לאדריכלות ועיצוב פנים בהובלת אלישבע, בוגרת תואר B.Arch באדריכלות מאוניברסיטת אריאל. במשך ארבע שנים עבדה במשרדו של האדריכל רון פליישר, שם צברה ניסיון במגוון רחב של תחומי התכנון — מתכנון ערים ועד עיצוב פנים.',
  aboutApproach: 'כיום אלישבע מתמקדת בתכנון ובעיצוב פנים במגזר הפרטי, המסחרי והציבורי. בעבודתה היא משלבת ראייה אדריכלית רחבה עם התייחסות לשימוש בחלל, לאור, לחומרים ולפרטים שמעניקים לכל מקום את אופיו.',
  contact: {
    whatsapp: '972526029652',
    localPhone: '052-602-9652',
    email: 'arch.elisheva@gmail.com',
    instagram: 'https://www.instagram.com/lish_dav/',
    instagramHandle: '@lish_dav',
    // כדי שטופס יישלח אוטומטית יש לחבר ספק טפסים. בהיעדרו נפתח אימייל עם הפרטים.
    formspreeId: ''
  }
};

export const selectedWork = {
  id: 'bath-renewal',
  title: 'חידוש חדר רחצה, שירותים וחדר כביסה',
  type: 'פרויקט שבוצע',
  description: 'שיפוץ יסודי של חדר הרחצה, השירותים וחדר הכביסה. דרך צילומי הלפני והאחרי ניתן לראות את השינוי בחללים ואת התוצאה המוגמרת.',
  cover: '/assets/after-bathroom.webp',
  after: [
    { src: '/assets/after-bathroom.webp', alt: 'חדר רחצה אחרי השיפוץ' },
    { src: '/assets/after-shower.webp', alt: 'מקלחון אחרי השיפוץ' },
    { src: '/assets/after-toilet.webp', alt: 'שירותים אחרי השיפוץ' },
    { src: '/assets/after-shower-detail.webp', alt: 'פרט במקלחון אחרי השיפוץ' }
  ],
  before: [
    { src: '/assets/before-bathroom.webp', alt: 'חדר רחצה לפני השיפוץ' },
    { src: '/assets/before-bathroom-wide.webp', alt: 'חדר רחצה לפני השיפוץ מזווית נוספת' },
    { src: '/assets/before-laundry.webp', alt: 'חדר הכביסה לפני השיפוץ' }
  ],
  video: '/assets/project-tour.mp4',
  poster: '/assets/video-poster.jpg'
};

// כל ארבע ההדמיות שייכות לפרויקט אחד, כפי שאישרה אלישבע.
export const featuredProject = {
  title: 'חומר, אור ובית',
  subtitle: 'דופלקס בבני ברק · תכנון ועיצוב פנים',
  status: 'פרויקט בתהליך',
  description: 'מבט אל תהליך העיצוב: חללים משפחתיים, חומרים טבעיים ותכנון שמחבר בין יופי לחיי היומיום. ההדמיות מציגות את הכיוון העיצובי ואת השפה המשותפת בין החללים.'
};

export const studies = [
  { id: 'living', title: 'חלל אירוח ופינת אוכל', image: '/assets/study-living-dining.webp', alt: "הדמיית חלל מגורים ופינת אוכל בחומרים טבעיים" },
  { id: 'entry', title: 'מבואת כניסה', image: '/assets/study-entry.webp', alt: "הדמיית מבואת כניסה עם פרטי נגרות ותאורה" },
  { id: 'bedroom', title: 'חדר שינה', image: '/assets/study-bedroom.webp', alt: "הדמיית חדר שינה בגוונים חמים" },
  { id: 'dining', title: 'פינת אוכל עגולה', image: '/assets/study-dining.webp', alt: "הדמיית פינת אוכל משפחתית" }
];

export const services = [
  { number: '01', name: 'תכנון ועיצוב פנים', en: 'INTERIOR PLANNING & DESIGN', description: 'תכנון חללים פרטיים, מסחריים וציבוריים מתוך שילוב של צורכי השימוש, פרופורציות ושפה עיצובית אישית.' },
  { number: '02', name: 'הפקת תכניות עבודה', en: 'WORKING DRAWINGS', description: 'תרגום הרעיון והקונספט לסט תכניות עבודה מסודר ומפורט, המסייע להעביר את התכנון משלב הרעיון לשלב הביצוע.' },
  { number: '03', name: 'ליווי ביצוע', en: 'EXECUTION SUPPORT', description: 'ליווי במהלך הביצוע, מענה לשאלות תכנוניות והתייחסות לפרטים בשטח בהתאם להיקף הליווי שנקבע.' }
];

export const process = [
  { number: '01', name: 'היכרות ואפיון צרכים' },
  { number: '02', name: 'קונספט ותכנון החלל' },
  { number: '03', name: 'תכניות עבודה ובחירות עיצוביות' },
  { number: '04', name: 'ליווי ביצוע בהתאם לפרויקט' }
];
