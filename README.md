# Portfolio

This is a personal portfolio website built with [Next.js](https://nextjs.org/), showcasing my work as a Software Engineer.

## Project Overview

This portfolio is a modern, responsive web application that highlights my skills, experience, and projects. It uses Next.js for server-side rendering and optimal performance, along with several other technologies to create an engaging user experience.

## Key Features

- Responsive design
- Server-side rendering with Next.js
- Dynamic content loading from Supabase
- Smooth scrolling and animations
- Analytics integration with Vercel and Mixpanel
- Custom cursor effect
- Downloadable resume

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Vercel Analytics
- Mixpanel
- React Icons

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main application code
  - `components/`: React components used throughout the app
  - `utils/`: Utility functions and Supabase client
  - `page.tsx`: Main page component
  - `layout.tsx`: Root layout component
- `public/`: Static assets
- `styles/`: Global styles

## Deployment

This project is set up for easy deployment on Vercel. Simply connect your GitHub repository to Vercel, and it will automatically deploy your main branch.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Vercel Documentation](https://vercel.com/docs)

