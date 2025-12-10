import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface EcosystemCard {
  title: string;
  description: string;
  image: string;
}

export interface Industry {
  name: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface DigitalFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  value: string;
  label: string;
}