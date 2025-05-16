# Fondation pour la Promotion des Droits

This is the website for the Foundation for the Promotion of Rights, built with Next.js and TinaCMS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TinaCMS Content Management

This website uses TinaCMS for content management. To access the CMS:

1. Run the development server with `npm run dev`
2. Visit [http://localhost:3000/admin](http://localhost:3000/admin) to access the CMS interface
3. Edit content directly through the visual interface

### Content Structure

The content is organized as follows:

- **News Articles**: Located in `content/news/` as MDX files
- **Mission Content**: Located in `content/mission/mission.json`

### Setting up TinaCMS for Production

To use TinaCMS in production:

1. Create an account on [TinaCMS](https://tina.io/)
2. Create a new project and connect it to your GitHub repository
3. Get your Client ID and Token from TinaCMS
4. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id
   TINA_TOKEN=your-token
   NEXT_PUBLIC_TINA_BRANCH=main
   ```
5. Deploy your website with these environment variables

## Features

- Next.js 15 with App Router
- TinaCMS for content management
- Multilingual support (French and Arabic)
- Responsive design with Tailwind CSS
- Framer Motion animations

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [TinaCMS Documentation](https://tina.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# TinaCMS integration
