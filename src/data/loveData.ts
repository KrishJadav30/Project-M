export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: string;
  tag: string;
}

export interface Reason {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PolaroidPhoto {
  id: number;
  url: string;
  caption: string;
  rotation: string;
  date: string;
}

export const loveData = {
  herName: "My Dearest One",
  nickname: "My Precious Blossom 🌸",
  startDate: "2022-12-14T00:00:00",
  heroSubtitle: "Whatever the situation, you were always with me. Beyond your breathtaking beauty, your pure character and soul made me fall deeply in love with you forever.",
  
  // Romantic floral message
  tagline: "I will willingly stand in the pouring storm, holding the umbrella so not a single raindrop touches your delicate petals.",
  
  // Interactive Reasons reflecting the user's heartfelt words & floral beauty
  reasons: [
    {
      id: 1,
      title: "Your Character Over Outer Beauty",
      description: "You are undeniably adorable with mesmerizing eyes, but what made me fall deeply in love is your pure character, your gentle soul, and the rare elegance of who you are inside.",
      icon: "Flower2",
    },
    {
      id: 2,
      title: "Always By My Side In Every Situation",
      description: "No matter how turbulent or challenging the situation has been, you never left my side. I am eternally thankful to God and destiny for your loyal presence.",
      icon: "Flower",
    },
    {
      id: 3,
      title: "Consoling Me When I Cried",
      description: "In my most fragile moments, when tears wouldn't stop, you comforted me, sheltered my heart, and gave me the courage to rise again.",
      icon: "Sparkles",
    },
    {
      id: 4,
      title: "Teaching Me Kindness & Good Habits",
      description: "You taught me how to behave with grace, how to be genuinely kind like you in this world, and instilled all your beautiful habits into me. You shaped who I am today.",
      icon: "Infinity",
    },
    {
      id: 5,
      title: "The Golden Time Spent Beside You",
      description: "Though our times meeting in person have been few, every single second spent in your presence was the purest golden bloom of my life. Time froze whenever I was with you.",
      icon: "Sun",
    },
    {
      id: 6,
      title: "I Will Be Your Umbrella In The Rain",
      description: "I will gladly get soaked in the heaviest downpour myself, just so I can shield you from the storm and keep you safe and warm under my umbrella.",
      icon: "Shield",
    },
    {
      id: 7,
      title: "Ready For Any Love Exam",
      description: "Not just to your family, but before the whole world, I am ready to take any exam to prove my devotion. I can fight against the entire world for your happiness.",
      icon: "Flower2",
    },
    {
      id: 8,
      title: "Your Dreams Come Before My Choices",
      description: "I will happily let go of my own preferences, favorites, and comforts to see all your dreams bloom into reality. I will work endlessly hard for your freedom and joy.",
      icon: "Flower",
    },
    {
      id: 9,
      title: "You Are My Crown",
      description: "You are the crown upon my head. For you, I have no ego — without any hesitation, I can become the shoes or heels beneath your feet, taking every hardship so you only ever walk on soft petals.",
      icon: "Crown",
    },
  ],

  // Timeline Milestones based on your true story
  milestones: [
    {
      id: 1,
      title: "3 Years of Friendship & Guidance",
      date: "Chapter I — The Seed of Friendship",
      description: "Three years ago, our best-friendship began to blossom. You taught me how to behave, how to treat others with gentle kindness like yours, and instilled all the good habits that transformed my life.",
      icon: "Flower",
      tag: "3 Years Together",
    },
    {
      id: 2,
      title: "When You Consoled My Tears",
      date: "Chapter II — Shelter in the Storm",
      description: "When life broke me down and tears fell, you stood beside me and comforted my pain. In your gentle words, my heart found its peaceful sanctuary.",
      icon: "Sparkles",
      tag: "Gentle Healing",
    },
    {
      id: 3,
      title: "Our Golden Moments Together",
      date: "Chapter III — Timeless Blooms",
      description: "Every time we have been together in person, the entire world melted away. Looking into your eyes in real life made time freeze into a memory I will protect forever.",
      icon: "Sun",
      tag: "Golden Memories",
    },
    {
      id: 4,
      title: "My Promise Till My Very Last Breath",
      date: "Chapter IV — Eternal Bloom",
      description: "Because of you, my life transformed completely for the better. I want to spend all my happy and sad moments with you, protecting you like a delicate flower until my last breath.",
      icon: "Infinity",
      tag: "Till My Last Breath",
    },
  ],

  // Polaroid Photos (Linked to your personal photos in public/)
  photos: [
    {
      id: 1,
      url: "./WhatsApp Image 2026-09-14 at 3.46.21 PM.jpeg",
      caption: "A smile blooming like spring 🌸",
      rotation: "-rotate-2",
      date: "Precious Moments",
    },
    {
      id: 2,
      url: "./WhatsApp Image 2026-09-14 at 3.46.21 PM (1).jpeg",
      caption: "Walking beside you forever 🌼",
      rotation: "rotate-3",
      date: "Treasured Moments",
    },
    {
      id: 3,
      url: "./WhatsApp Image 2026-09-14 at 3.46.21 PM (2).jpeg",
      caption: "The pure character I cherish 🌷",
      rotation: "-rotate-3",
      date: "Beyond Outer Beauty",
    },
    {
      id: 4,
      url: "./WhatsApp Image 2026-09-14 at 3.46.22 PM.jpeg",
      caption: "Sheltered under my umbrella forever 🌺",
      rotation: "rotate-2",
      date: "Always Protected",
    },
  ],

  // The Deep Love Letter with floral essence
  letter: {
    salutation: "My Dearest, My Best Friend & The Bloom of My Life,",
    paragraphs: [
      "Whatever the situation has been in my life, whether easy or unimaginably tough, you have always stood faithfully by my side. I can never thank God enough for blessing my path with someone as loyal, patient, and genuine as you.",
      "You are undeniably adorable, with eyes and beauty that light up every room—yet far beyond your outer beauty, it is your character that captivated me most. Your pure soul, your sincerity, and how selfless you are made me fall in love with you so deeply that my devotion belongs only to you.",
      "In the 3 years of our best-friendship, you have taught me so much about life. You taught me how to behave, how to be patient, and how to be genuinely kind like you in a world that so often forgets kindness. All the good habits and decency I carry today were learned from you. When I was crying and felt completely broken, you were the one who consoled me, believed in me, and helped my spirits bloom again. Even though our times meeting in person have been few, every single second we shared was the absolute golden time of my life.",
      "I promise you this with all my soul: I will willingly stand in the pouring rain and get soaked myself, but I will always hold the umbrella over you so not a single drop of sorrow ever touches you. You are the precious crown upon my life, and without any hesitation, I can become the shoes or heels beneath your feet to protect you from every rough stone and thorn. To fulfill your dreams, I can gladly let go of my own choices and comforts. For your happiness, I can stand strong against the entire world. And if anyone ever asks for proof of my love, I am ready to take any exam—not just before your family, but before the whole universe.",
      "And please always remember: even if your answer is ever No, I will respect your decision with my entire heart and never give you any problems or burdens. Your comfort and peace are sacred to me. Whatever difficulties or problems ever come into our lives, you will never be alone — we will figure them out together, and we will solve them together.",
      "Just because of you, my life has changed completely for the better. I want to spend all of life's happy and sad moments walking beside you, working endlessly hard for your freedom, peace, and boundless joy, until my very last breath on this earth."
    ],
    signature: "Forever your umbrella & with you till my last breath 🌸",
  },
};
