import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com/', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.instagram.com/', icon: 'fab fa-instagram' },
  //   { id: 4, href: 'https://www.tiktok.com/', icon: 'fab fa-tiktok' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'It allows you to enjoy greater security in your life. If you have cash set aside for emergencies.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Being in nature can boost your mood and improve mental health.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Pushing yourself to try new things and accept uncomfortable challenges leads to positive stress that builds resilience.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'january 17th, 2024',
    title: 'Tibet Adventure',
    info: 'Put your daily grind behind and act on your wanderlust now; we invite you to join us for an exhilarating adventure across Great Himalayas that could utterly change your life.',
    location: 'china',
    duration: 6,
    cost: '$2,100',
  },
  {
    id: 2,
    image: tour2,
    date: 'february 2nd, 2024',
    title: 'best of java',
    info: 'From Jakarta, you will venture to the curiously European-like city of Bandung (the “Paris of Java”) en route to Yogyakarta, home to the islands monstrous volcanoes. Then wrap it all up on the gorgeous Balinese beaches of Sanur.',
    location: 'indonesia',
    duration: 11,
    cost: '$1,400',
  },
  {
    id: 3,
    image: tour3,
    date: 'april 24th, 2024',
    title: 'explore hong kong',
    info: 'With so much to see and do, planning a Hong Kong itinerary is vital to making the most of your vacation.',
    location: 'hong kong',
    duration: 8,
    cost: '$5,000',
  },
  {
    id: 4,
    image: tour4,
    date: 'november 2nd, 2024',
    title: 'kenya highlights',
    info: ' Explore the wildlife with Big Fives and signature travel activities such as hiking, trekking to Point Lenana peak, taking a Dhow sailing on the Indian Ocean. That will be an amazing experience!.',
    location: 'kenya',
    duration: 20,
    cost: '$7,000',
  },
];
