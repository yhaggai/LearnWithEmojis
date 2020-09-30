const animals = [
  {
    emoji: '🐒',
    word: 'קוף'
  },
  {
    emoji: '🦍',
    word: 'גורילה'
  },
  {
    emoji: '🐕',
    word: 'כלב'
  },
  {
    emoji: '🐕',
    word: '‍כלב נחיה|זיגי'
  },
  {
    emoji: '🐩',
    word: 'פודל'
  },
  {
    emoji: '🐺',
    word: 'זאב'
  },
  {
    emoji: '🦊',
    word: 'שועל'
  },
  {
    emoji: '🦝',
    word: 'רקון'
  },
  {
    emoji: '🐈',
    word: 'חתול'
  },
  {
    emoji: '🦁',
    word: 'אריה'
  },
  {
    emoji: '🐅',
    word: 'נמר'
  },
  {
    emoji: '🐎',
    word: 'סוס'
  },
  {
    emoji: '🦄',
    word: 'חד קרן'
  },
  {
    emoji: '🦓',
    word: 'זברה'
  },
  {
    emoji: '🦌',
    word: 'צבי|איל|אייל'
  },
  {
    emoji: '🐂',
    word: 'שור'
  },
  {
    emoji: '🐃',
    word: 'בפאלו'
  },
  {
    emoji: '🐄',
    word: 'פרה'
  },
  {
    emoji: '🐖',
    word: 'חזיר'
  },
  {
    emoji: '🐗',
    word: 'חזיר בר'
  },
  {
    emoji: '🐏',
    word: 'כבש'
  },
  {
    emoji: '🐑',
    word: 'כבשה'
  },
  {
    emoji: '🐐',
    word: 'עז|תיש'
  },
  {
    emoji: '🐪',
    word: 'גמל'
  },
  {
    emoji: '🦙',
    word: 'למה|לאמה'
  },
  {
    emoji: '🦒',
    word: 'ג׳ירף|ג׳ירפה'
  },
  {
    emoji: '🐘',
    word: 'פיל'
  },
  {
    emoji: '🦏',
    word: 'קרנף'
  },
  {
    emoji: '🦛',
    word: 'היפופוטם'
  },
  {
    emoji: '🐁',
    word: 'עכבר'
  },
  {
    emoji: '🐀',
    word: 'עכברוש'
  },
  {
    emoji: '🐹',
    word: 'אוגר'
  },
  {
    emoji: '🐇',
    word: 'ארנב'
  },
  {
    emoji: '🐿',
    word: 'סנאי'
  },
  {
    emoji: '🦔',
    word: 'קיפוד'
  },
  {
    emoji: '🦇',
    word: 'עטלף'
  },
  {
    emoji: '🐻',
    word: 'דוב|דב'
  },
  {
    emoji: '🐨',
    word: 'קואלה'
  },
  {
    emoji: '🐼',
    word: 'פנדה'
  },
  {
    emoji: '🦘',
    word: 'קנגרו|קנגורו'
  },
  {
    emoji: '🦡',
    word: 'גירית'
  },
  {
    emoji: '🦃',
    word: 'הודו|תרנגול הודו'
  },
  {
    emoji: '🐔',
    word: 'תרנגולת'
  },
  {
    emoji: '🐓',
    word: 'תרנגול'
  },
  {
    emoji: '🐥',
    word: 'אפרוח'
  },
  {
    emoji: '🐦',
    word: 'ציפור'
  },
  {
    emoji: '🐧',
    word: 'פינגוין'
  },
  {
    emoji: '🕊',
    word: 'יונה'
  },
  {
    emoji: '🦅',
    word: 'נשר'
  },
  {
    emoji: '🦆',
    word: 'ברווז|ברוז'
  },
  {
    emoji: '🦢',
    word: 'ברבור'
  },
  {
    emoji: '🦉',
    word: 'ינשוף'
  },
  {
    emoji: '🦚',
    word: 'טווס'
  },
  {
    emoji: '🦜',
    word: 'תוכי'
  },
  {
    emoji: '🐸',
    word: 'צפרדע'
  },
  {
    emoji: '🐊',
    word: 'תנין|קרוקודיל'
  },
  {
    emoji: '🐢',
    word: 'צב'
  },
  {
    emoji: '🦎',
    word: 'לטאה'
  },
  {
    emoji: '🐍',
    word: 'נחש'
  },
  {
    emoji: '🐉',
    word: 'דרקון'
  },
  {
    emoji: '🦕',
    word: 'דינוזאור'
  },
  {
    emoji: '🦖',
    word: 'טי-רקס|טי רקס|טירקס'
  },
  {
    emoji: '🐳',
    word: 'לויתן|לוויתן|לוייתן'
  },
  {
    emoji: '🐬',
    word: 'דולפין'
  },
  {
    emoji: '🐟',
    word: 'דג'
  },
  {
    emoji: '🐠',
    word: 'דג טרופי'
  },
  {
    emoji: '🐡',
    word: 'אבו נפחא|אבו נפחה'
  },
  {
    emoji: '🦈',
    word: 'כריש'
  },
  {
    emoji: '🐙',
    word: 'תמנון'
  },
  {
    emoji: '🐚',
    word: 'קונכיה|צדף'
  },
  {
    emoji: '🐌',
    word: 'חלזון|חילזון|שבלול'
  },
  {
    emoji: '🦋',
    word: 'פרפר'
  },
  {
    emoji: '🐛',
    word: 'זחל'
  },
  {
    emoji: '🐜',
    word: 'נמלה'
  },
  {
    emoji: '🐝',
    word: 'דבורה'
  },
  {
    emoji: '🐞',
    word: 'חיפושית|פרת משה רבינו|פרת משה רבנו'
  },
  {
    emoji: '🦗',
    word: 'צרצר'
  },
  {
    emoji: '🕷',
    word: 'עכביש'
  },
  {
    emoji: '🕸',
    word: 'קור'
  },
  {
    emoji: '🦂',
    word: 'עקרב'
  },
  {
    emoji: '🦟',
    word: 'יתוש'
  }
];

export default animals;
