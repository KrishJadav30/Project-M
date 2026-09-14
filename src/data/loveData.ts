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
  nickname: "Princess ✨",
  startDate: "2024-01-01", // Format: YYYY-MM-DD (Easily customizable!)
  heroSubtitle: "To the prettiest, kindest, and most magical girl in my universe.",
  
  // Romantic messages
  tagline: "Every love story is beautiful, but ours is my absolute favorite.",
  
  // Interactive Reasons
  reasons: [
    {
      id: 1,
      title: "Your Breathtaking Smile",
      description: "How your entire face lights up whenever you laugh genuinely. It instantly turns my darkest days into sunshine.",
      icon: "Sparkles",
    },
    {
      id: 2,
      title: "Your Gentle Kindness",
      description: "The pure compassion and warmth you show to everyone around you. You have the softest heart I have ever known.",
      icon: "Heart",
    },
    {
      id: 3,
      title: "The Way You Say My Name",
      description: "There is a melody in your voice when you call me that makes my heart skip a beat, every single time.",
      icon: "Music",
    },
    {
      id: 4,
      title: "Your Endless Strength",
      description: "You are stronger and more resilient than you ever give yourself credit for. You inspire me every single day.",
      icon: "Sun",
    },
    {
      id: 5,
      title: "Our Late Night Talks",
      description: "From silly jokes and deep philosophical thoughts to comfortable silences, talking with you is my favorite pastime.",
      icon: "Moon",
    },
    {
      id: 6,
      title: "Simply Being You",
      description: "Unfiltered, authentic, effortlessly beautiful. I don't just love you for who you are, but for who I am when I am with you.",
      icon: "Flame",
    },
  ],

  // Timeline Milestones
  milestones: [
    {
      id: 1,
      title: "The Day You Entered My Life",
      date: "Chapter I",
      description: "The moment the stars aligned. The universe gently introduced me to the person who would become my entire world.",
      icon: "Sparkles",
      tag: "The Beginning",
    },
    {
      id: 2,
      title: "Our Very First Conversation",
      date: "Chapter II",
      description: "What started as simple words quickly turned into hours of endless smiling and wondering how someone could be so enchanting.",
      icon: "MessageCircleHeart",
      tag: "The Spark",
    },
    {
      id: 3,
      title: "Realizing You Are The One",
      date: "Chapter III",
      description: "In the middle of an ordinary day, I looked at you and realized I never wanted to spend another day without you in it.",
      icon: "HeartHandshake",
      tag: "The Epiphany",
    },
    {
      id: 4,
      title: "Every Single Day Since",
      date: "Chapter IV",
      description: "Every morning waking up grateful for you, and every night thanking the heavens that you are part of my life.",
      icon: "Infinity",
      tag: "Always & Forever",
    },
  ],

  // Polaroid Photos (Linked directly to your photos in public/)
  photos: [
    {
      id: 1,
      url: "./WhatsApp Image 2026-09-14 at 3.46.21 PM.jpeg",
      caption: "Your favorite moments 🌸",
      rotation: "-rotate-2",
      date: "Precious Moments",
    },
    {
      id: 2,
      url: "./WhatsApp Image 2026-09-14 at 3.46.21 PM (1).jpeg",
      caption: "Holding onto you forever 💫",
      rotation: "rotate-3",
      date: "Always Close",
    },
    {
      id: 3,
      url: "./WhatsApp Image 2026-09-14 at 3.46.21 PM (2).jpeg",
      caption: "That unforgettable smile 🌅",
      rotation: "-rotate-3",
      date: "Golden Hour",
    },
    {
      id: 4,
      url: "./WhatsApp Image 2026-09-14 at 3.46.22 PM.jpeg",
      caption: "The prettiest girl ever 🌷",
      rotation: "rotate-2",
      date: "My Favorite View",
    },
  ],

  // The Love Letter
  letter: {
    salutation: "My Dearest Love,",
    paragraphs: [
      "I built this small corner of the internet just for you, because ordinary words on ordinary paper could never capture how deeply you mean to me.",
      "From the very first moment we talked, you brought a warmth and light into my life that I never knew was missing. Whenever I hear your voice or see your smile, all the noise in the world fades away, leaving only peace and happiness.",
      "Thank you for being my peace, my biggest smile, and my favorite reason to dream about tomorrow. No matter where life takes us or how fast the world turns, my heart will always beat for you.",
      "Forever and always yours,"
    ],
    signature: "With all my love & heart 💖",
  },
};
