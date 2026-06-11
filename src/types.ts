/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NicheModel {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  whatsappMessage: string;
  keywords: string[];
}

export interface IncludedFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}
