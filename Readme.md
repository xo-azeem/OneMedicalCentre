# One Medical Centre - Healthcare Website

A modern, responsive healthcare website built with React and TypeScript, showcasing comprehensive medical services and patient-centered care.

## Live Website

**Visit the live website:** [onemedicalcentre.com](https://onemedicalcentre.com)

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite (Fast, modern build tool)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Deployment:** Vercel/Netlify (Static hosting)

## Project Overview

One Medical Centre is a comprehensive healthcare website that presents three main sections:

### **One Team** (`/`)
- Introduction to the medical team
- Doctor profiles and specializations
- Team values and approach to patient care

### **One Priority** (`/priority`)
- Comprehensive healthcare services
- Interactive service carousel featuring:
  - Medical Doctors
  - Pharmacy
  - Medical Products (CPAP masks, sleep products)
  - Optometry
  - Physiotherapy
  - Men's Health
  - Medical Aesthetics
  - Hearing Clinic
  - Chiropody
  - Specialists
- Priority values and patient-centered approach

### **One Place** (`/place`)
- Location details and accessibility
- Interactive Google Maps integration
- QR code for easy location access
- Contact information and parking details
- Digital services integration

## Key Features

### **Modern UI/UX Design**
- Responsive design for all devices (mobile, tablet, desktop)
- Smooth animations and transitions
- Interactive hover effects
- Professional color scheme with gold accents
- Glassmorphism effects and modern styling

### **Advanced Animations**
- Intersection Observer API for scroll-triggered animations
- Staggered animations for content reveal
- Smooth page transitions
- Interactive service carousel with 3D-like effects
- Floating elements and particle effects

### **Responsive Navigation**
- Fixed header with smooth scrolling
- Mobile-friendly hamburger menu
- Active tab indicators
- Smooth transitions between pages

### **Interactive Elements**
- Google Maps integration with custom styling
- QR code generation for location sharing
- Interactive service carousel
- Hover effects and micro-interactions

### **Performance Optimized**
- Built with Vite for fast development and production builds
- Optimized images and assets
- Lazy loading for better performance
- Modern ES6+ features

## Development Setup

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/xo-azeem/OneMedicalCentre.git
   cd one-medical-centre
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── App.tsx                 # Main app component with routing
├── main.tsx               # Application entry point
├── index.css              # Global styles
├── assets/                # Static assets
│   ├── logo.png
│   ├── doctors.png
│   ├── qr.png
│   └── OneMedicalCentre.pdf
├── OneTeamPage.tsx        # Team page component
├── OnePriorityPage.tsx    # Services page component
├── OnePlacePage.tsx       # Location page component
├── DigitalPulse.tsx       # Digital services component
└── ScrollToTop.tsx        # Scroll behavior component
```

## Design System

### Color Palette
- **Primary Gold:** `#daa520` (Dark Goldenrod)
- **Secondary Gold:** `#ffd700` (Gold)
- **Accent Gold:** `#b8860b` (Dark Goldenrod)
- **Background:** White with subtle gradients
- **Text:** Gray scale for readability

### Typography
- **Headings:** Bold, modern sans-serif
- **Body Text:** Clean, readable font stack
- **Responsive sizing:** Scales appropriately across devices

### Components
- **Cards:** Rounded corners with subtle shadows
- **Buttons:** Gradient backgrounds with hover effects
- **Navigation:** Fixed header with smooth transitions
- **Forms:** Clean, accessible input styling

## 🚀 Deployment

The website is currently deployed on **onemedicalcentre.com** using modern static hosting services.

### Build Process
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder, ready for deployment to any static hosting service.

## Customization

### Adding New Pages
1. Create a new component in the `src/` directory
2. Add the route in `App.tsx`
3. Update the navigation items in the Header component

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: Use Tailwind CSS classes
- Custom animations: Add to component-specific style blocks

### Adding New Services
1. Update the `services` array in `OnePriorityPage.tsx`
2. Add appropriate icons from Lucide React
3. Update descriptions and styling as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**One Medical Centre**
- **Website:** [onemedicalcentre.com](https://onemedicalcentre.com)
- **Email:** onemedicalmississauga@gmail.com
- **Phone:** +647 660 2591
- **Address:** 50 Burnhamthorpe Rd West, Unit 102, Mississauga, ON

## Acknowledgments

- Built with modern web technologies
- Designed for optimal user experience
- Optimized for performance and accessibility
- Responsive design for all devices

---

**Note:** This project represents a modern approach to healthcare website design, focusing on user experience, accessibility, and professional presentation of medical services. The site is still being optimized for the best performance and will continue to receive updates and improvements.
