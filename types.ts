import React from 'react';

export type Language = 'es' | 'en';

export interface PersonalInfo {
  name: string; // Name is likely not translated
  tagline: string;
  description: string;
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  cvUrl?: string; // Could be cvUrl_es, cvUrl_en if different files
  profileImageUrl?: string;
  phone?: string;
  location?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon?: React.ReactNode;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode; // e.g., an SVG component
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[]; // Technologies are often proper nouns, may not need translation
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
  description?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  years: string;
  description: string | string[]; // Allow for multiple bullet points
}

// TestimonialEntry interface removed
export interface UIStrings {
  APP_TITLE_SUFFIX: string;
  HERO_GREETING: string;
  SEE_MY_PROJECTS: string;
  DOWNLOAD_CV: string;
  CONTACT_ME: string;
  ABOUT_ME_TITLE: string;
  PROFILE_IMG_ALT: (name: string) => string;
  PROFILE_IMG_BROKEN_ALT: string;
  EDUCATION_TITLE: string;
  EXPERIENCE_TITLE: string;
  SKILLS_TITLE: string;
  PROJECTS_TITLE: string;
  PROJECT_CARD_TECHNOLOGIES: string;
  PROJECT_CARD_VIEW_DEMO: string;
  PROJECT_CARD_SOURCE_CODE: string;
  CONTACT_TITLE: string;
  CONTACT_SUBTITLE: string;
  SEND_EMAIL_BTN: string;
  CONTACT_PHONE_LABEL: (phone: string) => string;
  CONTACT_LOCATION_LABEL: (location: string) => string;
  CONTACT_SOCIAL_PROMPT: string;
  FOOTER_COPYRIGHT: (year: number, name: string) => string;
  FOOTER_MADE_WITH: string;
  BACK_TO_TOP_ARIA: string;
  MENU_ARIA_LABEL: string;
  CLOSE_MENU_ARIA_LABEL: string;
  GITHUB_PROFILE_ARIA: string;
  LINKEDIN_PROFILE_ARIA: string;
  EMAIL_ME_ARIA: string;
  CURRENT_LANGUAGE_NAME: string; // e.g., "Español" or "English"
  SWITCH_TO_LANGUAGE_NAME: string; // e.g., "English" or "Español"
  LANGUAGE_TOGGLE_BUTTON_TEXT: (switchToLang: string) => string;
}

export interface LocalizedContent {
  PERSONAL_INFO: PersonalInfo;
  EDUCATION_DATA: EducationEntry[];
  EXPERIENCE_DATA: ExperienceEntry[];
  SKILLS_DATA: SkillCategory[];
  PROJECTS_DATA: Project[];
  NAV_LINKS: NavLink[];
  UI_STRINGS: UIStrings;
}