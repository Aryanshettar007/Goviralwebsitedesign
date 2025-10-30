export interface Promoter {
  id: string;
  name: string;
  handle: string;
  niche: string;
  followers: string;
  avgViews: string;
  engagement: string;
  price: number;
  avatar: string;
  gradient: string;
}

export const mockPromoters: Promoter[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    handle: '@fashionista_daily',
    niche: 'Fashion',
    followers: '250K',
    avgViews: '12K',
    engagement: '4.8%',
    price: 420,
    avatar: 'SM',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: '2',
    name: 'Alex Chen',
    handle: '@tech_reviews_pro',
    niche: 'Technology',
    followers: '500K',
    avgViews: '28K',
    engagement: '5.6%',
    price: 750,
    avatar: 'AC',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    handle: '@lifestyle_vibes',
    niche: 'Lifestyle',
    followers: '180K',
    avgViews: '8K',
    engagement: '4.4%',
    price: 320,
    avatar: 'ER',
    gradient: 'from-orange-500 to-pink-500'
  },
  {
    id: '4',
    name: 'Mike Johnson',
    handle: '@fitness_beast',
    niche: 'Fitness',
    followers: '320K',
    avgViews: '15K',
    engagement: '4.7%',
    price: 480,
    avatar: 'MJ',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    handle: '@beauty_secrets',
    niche: 'Beauty',
    followers: '420K',
    avgViews: '22K',
    engagement: '5.2%',
    price: 630,
    avatar: 'LT',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    id: '6',
    name: 'David Park',
    handle: '@foodie_adventures',
    niche: 'Food',
    followers: '280K',
    avgViews: '14K',
    engagement: '5.0%',
    price: 520,
    avatar: 'DP',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: '7',
    name: 'Sophie Williams',
    handle: '@travel_diaries',
    niche: 'Travel',
    followers: '380K',
    avgViews: '18K',
    engagement: '4.7%',
    price: 580,
    avatar: 'SW',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: '8',
    name: 'James Taylor',
    handle: '@gaming_central',
    niche: 'Gaming',
    followers: '450K',
    avgViews: '25K',
    engagement: '5.5%',
    price: 680,
    avatar: 'JT',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    id: '9',
    name: 'Nina Patel',
    handle: '@wellness_guru',
    niche: 'Health & Wellness',
    followers: '210K',
    avgViews: '10K',
    engagement: '4.8%',
    price: 380,
    avatar: 'NP',
    gradient: 'from-teal-500 to-green-500'
  }
];
