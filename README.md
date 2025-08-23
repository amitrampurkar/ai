# AI Product Manager Portfolio

A modern, responsive portfolio website showcasing AI product management expertise, built with React, Tailwind CSS, and shadcn/ui components.

## Overview

This portfolio website presents Amit Rampurkar's experience as an AI Product Manager with 15+ years in product management and a Master's in Design. The site features:

- **Human-centered content**: Written in a conversational, recruiter-friendly tone
- **Comprehensive project showcases**: Detailed case studies with TL;DR sections for recruiters and deep dives for hiring managers
- **Agentic AI expertise**: Dedicated section showcasing autonomous AI agent projects
- **Professional design**: Clean, modern interface with subtle animations and responsive design
- **Performance metrics**: Quantifiable impact and results for each project

## Features

### Content Structure
- **Hero Section**: Personal introduction emphasizing product management skills
- **Metrics Dashboard**: Key performance indicators with visual status badges
- **Featured Projects**: 3 foundational AI/ML projects with detailed case studies
- **Agentic AI Projects**: 3 specialized projects focusing on autonomous AI systems
- **Downloadable Materials**: Case studies, implementation guides, and analysis reports

### Technical Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle fade-in effects and hover interactions
- **Dark Theme**: Professional dark color scheme with accent colors
- **Fast Performance**: Optimized build with code splitting and lazy loading
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Project Structure

```
ai-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Footer.jsx    # Site footer
│   │   ├── MetricCard.jsx # Performance metrics display
│   │   ├── ProjectCard.jsx # Project preview cards
│   │   └── ProjectPage.jsx # Detailed project pages
│   ├── data/
│   │   └── projects.js   # Project data and content
│   ├── pages/            # Page components
│   ├── App.jsx           # Main application component
│   ├── App.css           # Custom styles and animations
│   └── main.jsx          # Application entry point
├── dist/                 # Production build output
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone or extract the project files**
   ```bash
   cd ai-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev --host
   # or
   npm run dev -- --host
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Building for Production

1. **Create production build**
   ```bash
   pnpm run build
   # or
   npm run build
   ```

2. **Preview production build**
   ```bash
   pnpm run preview
   # or
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment.

## Deployment Options

### Static Hosting (Recommended)
The built site is a static React application that can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Upload the `dist` contents to your gh-pages branch
- **AWS S3 + CloudFront**: Upload to S3 bucket with static website hosting

### Server Deployment
For server deployment, serve the `dist` folder with any web server:
- **Nginx**: Configure to serve static files with fallback to index.html
- **Apache**: Use .htaccess for client-side routing support
- **Node.js**: Use express.static to serve the dist folder

## Customization

### Content Updates
- **Project Data**: Edit `src/data/projects.js` to update project information
- **Personal Info**: Update hero section and about content in `src/App.jsx`
- **Metrics**: Modify the metrics array in the HomePage component

### Styling
- **Colors**: Update CSS custom properties in `src/App.css`
- **Animations**: Modify keyframes and transition durations
- **Layout**: Adjust Tailwind classes in component files

### Adding New Projects
1. Add project data to `src/data/projects.js`
2. Include in the appropriate projects array in `src/App.jsx`
3. Ensure all required fields are populated (title, description, status, etc.)

## Performance Considerations

- **Bundle Size**: ~291KB JavaScript, ~94KB CSS (gzipped: ~93KB JS, ~15KB CSS)
- **Loading Speed**: Optimized with Vite's build system
- **Image Optimization**: Use WebP format for images when possible
- **Code Splitting**: Automatic route-based splitting with React Router

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features Used**: CSS Grid, Flexbox, CSS Custom Properties, ES6+ JavaScript

## Maintenance

### Regular Updates
- **Dependencies**: Run `pnpm update` monthly to keep packages current
- **Content**: Update project data and metrics as new work is completed
- **Performance**: Monitor bundle size and loading speeds

### Content Guidelines
- **Recruiter-Friendly**: Keep TL;DR sections concise and impact-focused
- **Hiring Manager Details**: Provide comprehensive context and methodology
- **Metrics**: Use specific, quantifiable results where possible
- **Tone**: Maintain conversational, professional voice throughout

## Support

For technical issues or customization questions:
1. Check the browser console for error messages
2. Verify all dependencies are installed correctly
3. Ensure Node.js version compatibility
4. Review the project structure and file paths

## License

This project is created for portfolio purposes. The code structure and components can be adapted for similar use cases.

