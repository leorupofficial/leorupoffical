export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatCard {
  number: string;
  suffix?: string;
  label: string;
}

export interface ServiceCard {
  tag: string;
  name: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: 'layers' | 'monitor' | 'sun';
}

export interface TeamMember {
  initial: string;
  name: string;
  role: string;
  avatarColor: string;
}

export interface VisionPillar {
  num: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface MenuItem {
  emoji: string;
  name: string;
  price: string;
}
