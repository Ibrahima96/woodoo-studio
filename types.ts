import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'medium' | 'large' | 'tall';
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MagicResponse {
  title: string;
  tagline: string;
  concept: string;
}

export interface NavItem {
  label: string;
  href: string;
}