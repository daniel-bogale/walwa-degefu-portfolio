# Waluwa Degefu - Portfolio Website

A modern, professional portfolio website for Waluwa Degefu, a graphics designer and UI/UX designer.

## Features

- **Modern Design**: Clean, minimal layout with professional aesthetics
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Professional Sections**:
  - Hero section with profile photo and introduction
  - Work experience timeline
  - Featured projects with modal galleries
  - Skills showcase with progress indicators
  - Contact information with social media links

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd walwa-degefu-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── sections/            # Portfolio sections
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── Navigation.tsx       # Navigation component
│   └── Footer.tsx           # Footer component
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### Adding Real Images

Replace the placeholder images in the `public/` directory:

- `public/profile-photo.jpg` - Professional profile photo
- `public/projects/` - Project thumbnails and detail images

### Updating Content

Edit the respective section components to update:

- **Personal Information**: `src/components/sections/HeroSection.tsx`
- **Work Experience**: `src/components/sections/ExperienceSection.tsx`
- **Projects**: `src/components/sections/ProjectsSection.tsx`
- **Skills**: `src/components/sections/SkillsSection.tsx`
- **Contact Info**: `src/components/sections/ContactSection.tsx`

### Styling

The website uses a neutral color palette with accent colors. You can customize the theme by modifying the CSS variables in `src/app/globals.css`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project for production:

```bash
npm run build
npm start
```

## Features Overview

### Hero Section
- Professional profile photo
- Name, title, and description
- Call-to-action buttons
- Animated scroll indicator

### Experience Section
- Timeline of work experience
- Company details and descriptions
- Skills badges for each role
- Responsive card layout

### Projects Section
- Grid layout of featured projects
- Modal galleries for project details
- Technology stack badges
- External links to live projects

### Skills Section
- Categorized skills (Technical, Soft, Languages)
- Progress indicators
- Additional expertise badges
- Interactive hover effects

### Contact Section
- Contact information with icons
- Social media links
- Call-to-action buttons
- Professional messaging

## Performance

- Optimized images and assets
- Smooth scrolling and animations
- Mobile-first responsive design
- Fast loading times
- SEO optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Waluwa Degefu's portfolio. All rights reserved.

## Contact

For questions about this portfolio website, contact:
- Email: waluwab@gmail.com
- Phone: +251988095969