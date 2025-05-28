import React from 'react';

export interface LocalizedString {
  es: string;
  en: string;
}

export type LocalizedStringArray = LocalizedString[];

export interface PersonalInfo {
  name: string; // Name might not be translated, or translated differently
  taglineEs: string;
  taglineEn: string;
  descriptionEs: string;
  descriptionEn: string;
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  cvUrl?: string;
  profileImageUrl?: string;
  phone?: string;
  location?: string;
}

export interface SkillCategory {
  nameEs: string;
  nameEn: string;
  skills: Skill[];
  icon?: React.ReactNode;
}

export interface Skill {
  nameEs: string;
  nameEn: string;
  icon?: React.ReactNode; // e.g., an SVG component
}

export interface Project {
  id: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  technologies: string[]; // Technologies are often proper nouns and might not be translated
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface NavLink {
  href: string;
  labelEs: string;
  labelEn: string;
}

export interface EducationEntry {
  degreeEs: string;
  degreeEn: string;
  institutionEs: string;
  institutionEn: string;
  years: string;
  descriptionEs?: string;
  descriptionEn?: string;
}

export interface ExperienceEntry {
  companyEs: string;
  companyEn: string;
  roleEs: string;
  roleEn: string;
  years: string;
  // Description can be a single string or an array of bullet points
  descriptionEs: string | string[];
  descriptionEn: string | string[];
}
