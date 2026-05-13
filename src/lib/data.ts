import type { NavItem, StatCard, ServiceCard, TeamMember, VisionPillar, FeatureItem, MenuItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Product', href: '#product' },
  { label: 'Team', href: '#team' },
];

export const MARQUEE_ITEMS = [
  'AI Automation', 'B2B SaaS', 'Intelligent Ordering',
  'Enterprise AI', 'Scotland & UK', 'Business Intelligence',
  'AI Products', 'QR Commerce',
];

export const STATS: StatCard[] = [
  { number: '5', suffix: '+', label: 'Founding team members' },
  { number: 'MSc', suffix: 's', label: 'Masters graduates' },
  { number: 'UK', suffix: ' 🏴󠁧󠁢󠁳󠁣󠁴󠁿', label: 'Based in Scotland' },
  { number: '∞', label: 'Industries to transform' },
];

export const SERVICES: ServiceCard[] = [
  {
    tag: 'Core Product',
    name: 'AI-Powered Ordering Systems',
    description: 'QR-based dining experiences with an intelligent AI assistant — handling menus, orders, and payments with human-level comprehension and speed.',
    linkText: 'See how it works →',
    linkHref: '#product',
    icon: 'layers',
  },
  {
    tag: 'B2B Platform',
    name: 'Business Process Automation',
    description: 'End-to-end workflow intelligence for operations, customer service, and decision-making. We turn manual processes into automated, data-driven systems.',
    linkText: 'Talk to us →',
    linkHref: '#contact',
    icon: 'monitor',
  },
  {
    tag: 'Future Roadmap',
    name: 'Generative AI Solutions',
    description: 'Custom large language model integrations, AI agents, and intelligent assistants tailored to specific business domains and enterprise requirements.',
    linkText: 'Join the waitlist →',
    linkHref: '#contact',
    icon: 'sun',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'QR-to-AI in seconds',
    description: 'Customers scan, chat, and order — no app download, no waiting for a waiter.',
  },
  {
    title: 'Geo-verified dine-in',
    description: 'Location radius checks confirm the customer is physically present in the restaurant.',
  },
  {
    title: 'Secure payment holds',
    description: 'Funds are held in escrow until dining is complete — protecting both parties.',
  },
  {
    title: '0.49% per transaction',
    description: 'Simple, transparent pricing. We succeed only when your business grows.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { initial: 'L', name: 'Leo', role: 'Co-Founder & CEO', avatarColor: '#f5f0e0' },
  { initial: 'A', name: 'Co-Founder', role: 'Product & Strategy', avatarColor: '#e8eff8' },
  { initial: 'B', name: 'Co-Founder', role: 'Technology & AI', avatarColor: '#eef5e8' },
  { initial: 'C', name: 'Co-Founder', role: 'Design & UX', avatarColor: '#f8eaf0' },
  { initial: 'D', name: 'Co-Founder', role: 'Business & Growth', avatarColor: '#f0edf8' },
];

export const VISION_PILLARS: VisionPillar[] = [
  {
    num: '01',
    title: 'Build Products, Not Just Services',
    description: 'LeoRup creates scalable AI products with real intellectual property — not one-off consulting engagements.',
  },
  {
    num: '02',
    title: 'Expand Across Industries',
    description: 'From hospitality to retail, healthcare to finance — AI automation has limitless applications and we intend to explore them all.',
  },
  {
    num: '03',
    title: 'Scotland to the World',
    description: 'Proud to start in Scotland, ambitious enough to compete globally. Our base is local; our market is everywhere.',
  },
  {
    num: '04',
    title: 'Grow With Our Clients',
    description: 'LeoRup is built as a long-term partner — not a vendor. We evolve alongside the businesses that trust us.',
  },
];

export const PHONE_MENU: MenuItem[] = [
  { emoji: '🥩', name: 'Scottish Ribeye', price: '£28.00' },
  { emoji: '🐟', name: 'Smoked Salmon', price: '£18.50' },
  { emoji: '🥗', name: 'Garden Salad', price: '£9.00' },
];
