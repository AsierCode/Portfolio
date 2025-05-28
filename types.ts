import React from 'react';

export interface PersonalInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  cvUrl?: string;
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
  technologies: string[];
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
