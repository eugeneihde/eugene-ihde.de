import computerzentrumstrausbergLogo from '../assets/media/experiences/czs_logo.svg';
import publicplanLogo from '../assets/media/experiences/publicplan.svg';
import brandungLogo from '../assets/media/experiences/brandung.png';
import styles from '../assets/css/main.module.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export interface BreadcrumbProps {
  breadcrumbs: LinkProps[];
}

export interface ProjectData {
  title: string;
  projectRef: string;
  description: string;
  sourceCode: string;
  releaseDate: string;
  technologies: {
    type: string;
    color: string;
  }[];
}

export interface ProjectDataConfig {
  [key: string]: ProjectData;
}

export interface ExperienceData {
  company: string;
  jobTitle: string;
  jobDuration: string;
  companyRef: string;
  logo: string | null;
  description: string;
  technologies: {
    type: string;
    color: string;
  }[];
  companyLink: string;
}

export interface ExperienceDataConfig {
  [key: string]: ExperienceData;
}

interface LinkProps {
  label: string;
  link?: string;
}

export const socialLinks = [
  {
    icon: <LinkedInIcon className={styles.social__icon} />,
    link: 'https://www.linkedin.com/in/ihde',
  },
  {
    icon: <InstagramIcon className={styles.social__icon} />,
    link: 'https://www.instagram.com/eugene.ih',
  },
  {
    icon: <GitHubIcon className={styles.social__icon} />,
    link: 'https://www.github.com/eugeneihde',
  },
  {
    icon: <MailOutlineIcon className={styles.social__icon} />,
    link: 'mailto:contact@eugene-ihde.de',
  },
];

export const companies: string[] = ['computerzentrumstrausberg', 'qtech', 'publicplan', 'brandung'];

export const workExperiences: ExperienceDataConfig = {
  computerzentrumstrausberg: {
    company: 'Computer Zentrum Strausberg GmbH',
    jobTitle: 'ISO, BCM & Software Developer',
    jobDuration: 'DEC 2024 ➔ PRESENT',
    companyRef: 'computerzentrumstrausberg',
    logo: computerzentrumstrausbergLogo,
    description:
      'In my current role, I coordinate and support the development of business continuity plans across business units, ensuring that resilience strategies are consistent, tested, and aligned with organizational needs. \n\n Additionally as an Information Security Officer, I oversee the development, implementation, and continuous improvement of the Information Security Management System (ISMS). My responsibilities include ensuring compliance with relevant standards (such as ISO/IEC 27001), managing risk assessments, defining security policies, supporting awareness initiatives, and working across departments to ensure that security measures align with organizational goals. \n\n Alongside this, I contribute to the development of complex web applications based on Angular.',
    technologies: [
      {
        type: 'ISO 22301',
        color: '#545454',
      },
      {
        type: 'ISO 27001',
        color: '#545454',
      },
      {
        type: 'Angular',
        color: '#a6120d',
      },
      {
        type: 'TypeScript',
        color: '#004eb5',
      },
    ],
    companyLink: 'https://www.computerzentrum.de',
  },
  qtech: {
    company: 'QTECH',
    jobTitle: 'Co-Founder & Technical Director',
    jobDuration: 'JAN 2025 ➔ PRESENT',
    companyRef: 'qtech',
    logo: null,
    description:
      'As the Technical Director at QTech, i am responsible for the overall technology strategy, architecture and implementation within the company and of our product "Qorelo"',
    technologies: [
      {
        type: 'ReactJs',
        color: '#00c6fc',
      },
      {
        type: 'Next.js',
        color: '#404040',
      },
      {
        type: 'TypeScript',
        color: '#004eb5',
      },
    ],
    companyLink: 'https://www.qtech-company.com',
  },
  publicplan: {
    company: 'Publicplan',
    jobTitle: 'Junior Form Developer',
    jobDuration: 'AUG 2023 ➔ AUG 2024',
    companyRef: 'publicplan',
    logo: publicplanLogo,
    description:
      'My main tasks where the development of forms with the Open-Source form builder Form.io and later, the creation of workflows with Camunda BPM.\n\nI also was involved in the Development of several Frontend-Applications with ReactJs and a Data-Synchronization-Application based on Python.',
    technologies: [
      {
        type: 'ReactJs',
        color: '#00c6fc',
      },
      {
        type: 'TypeScript',
        color: '#004eb5',
      },
      {
        type: 'Form.io',
        color: '#009605',
      },
    ],
    companyLink: 'https://www.publicplan.de',
  },
  brandung: {
    company: 'Brandung',
    jobTitle: 'Backend Development Trainee',
    jobDuration: 'AUG 2020 ➔ JULY 2023',
    companyRef: 'brandung',
    logo: brandungLogo,
    description:
      'During this period, I successfully completed an IHK apprenticeship as an IT specialist for application development. \n\nIn addition to vocational school, I was involved in various customer projects based on the TYPO3 content management system. \n\nMy main activities were the further development of TYPO3 Extbase Extensions, adjustments in the TYPO3 backend (content maintenance, test case maintenance, etc.), creating and optimizing technical and administrative instructions for customers and/or colleagues and the administration of customer servers.',
    technologies: [
      {
        type: 'PHP',
        color: '#6b33b5',
      },
      {
        type: 'TYPO3',
        color: '#b36800',
      },
      {
        type: 'Extbase',
        color: '#b36800',
      },
    ],
    companyLink: 'https://www.brandung.de',
  },
};

export const projectData: ProjectDataConfig = {
  personal_finance_tracker: {
    title: 'Personal Finance Tracker',
    projectRef: 'personal_finance_tracker',
    description:
      'This is a (Work in Progress) Next.js based Web-Application for managing your finances.\n\nYou can filter your transactions on a time-range basis, create, update and delete transactions, edit your profile display name, username or password.\n\nMore Features such as enhanced filter functions for transactions, authentication with the keycloak provider instead of credentials auth, recurring transactions, detailled spending statistics, etc. are planned.',
    sourceCode: 'https://github.com/eugeneihde/personal_finance_tracker',
    releaseDate: 'JULY 2024',
    technologies: [
      {
        type: 'ReactJs',
        color: '#00c6fc',
      },
      {
        type: 'Next.js',
        color: '#404040',
      },
      {
        type: 'TypeScript',
        color: '#004eb5',
      },
    ],
  },
  ihk_certificate_generator: {
    title: 'IHK Training Certificate Generator',
    projectRef: 'ihk_certificate_generator',
    description:
      "This simple TYPO3 extension was part of my IHK final exam in 2023.\n\nExtract from the project documentation:\n\nIHK trainees must keep a digital report book as proof of training. To do this, they have to record their activities, summarize them at the end of a week and submit them to the IHK portal. Recording and summarizing the activities in an attractive, clear manner (for example using indented passages) is comparatively time-consuming, especially because you don't necessarily work on a topic continuously, but rather at different times. The application is intended to resolve these costs.",
    sourceCode: 'https://github.com/eugeneihde/generator',
    releaseDate: 'MAY 2023',
    technologies: [
      {
        type: 'PHP',
        color: '#6b33b5',
      },
      {
        type: 'TYPO3',
        color: '#b36800',
      },
      {
        type: 'Extbase',
        color: '#b36800',
      },
    ],
  },
};
