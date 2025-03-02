# Modern Portfolio Website

A professional portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Responsive design that works on all devices
- Dark/light mode with system preference detection
- Smooth animations and transitions
- Interactive sections for showcasing skills and projects
- Contact form with validation
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Elcapitanoe/react-portofolio-with-tailwind-rebuild.git
cd react-portofolio-with-tailwind-rebuild
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploying to Netlify

#### Method 1: Netlify UI

1. Push your code to a GitHub repository

2. Log in to Netlify and click "New site from Git"

3. Select your repository

4. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

5. Add these environment variables if needed:
   - `NEXT_PUBLIC_SITE_URL`: Your site's URL (e.g., https://portofolio.netlify.app)

6. Click "Deploy site"

#### Method 2: Netlify CLI

1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

2. Build your site
```bash
npm run build
```

3. Deploy using Netlify CLI
```bash
netlify deploy
```

4. Follow the prompts to complete deployment

### Deploying to Vercel

#### Method 1: Vercel UI

1. Push your code to a GitHub repository

2. Log in to Vercel and click "New Project"

3. Import your repository

4. Keep the default settings (Vercel automatically detects Next.js)

5. Click "Deploy"

#### Method 2: Vercel CLI

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Deploy using Vercel CLI
```bash
vercel
```

3. Follow the prompts to complete deployment

### Deploying to GitHub Pages

1. Update next.config.js to include:
```javascript
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/react-portofolio-with-tailwind-rebuild' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-portofolio-with-tailwind-rebuild/' : '',
}
```

2. Add these scripts to your package.json
```json
"scripts": {
  "build": "next build",
  "export": "next export",
  "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out -t true"
}
```

3. Install gh-pages package
```bash
npm install --save-dev gh-pages
```

4. Deploy to GitHub Pages
```bash
npm run deploy
```

## Troubleshooting Deployment Issues

### Common Netlify Issues

1. **Build Failures**
   - Check your build command and publish directory
   - Ensure all dependencies are correctly installed
   - Verify your Node.js version is compatible

2. **Page Not Found Errors**
   - Add a `_redirects` file in your public folder with:
     ```
     /* /index.html 200
     ```

3. **Image Loading Issues**
   - Make sure images are properly optimized
   - Check that domains are correctly configured in next.config.js

### Common Vercel Issues

1. **Build Failures**
   - Check the build logs for specific errors
   - Ensure all environment variables are correctly set
   - Verify your project structure matches Next.js requirements

2. **API Routes Not Working**
   - Make sure your API routes are properly configured
   - Check for any serverless function limitations

## Customization

- Update the personal information in the components
- Replace the avatar image in the public folder
- Modify the color scheme in tailwind.config.js
- Add your own projects to the Portfolio component

## License

This project is licensed under the MIT License - see the LICENSE file for details.
