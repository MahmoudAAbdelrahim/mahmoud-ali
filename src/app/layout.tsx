// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Mahmoud Ali - Full Stack Developer | محمود علي - مطور ويب كامل',
  description: `موقع محمود علي هو محفظة أعمال شخصية تعرض مشاريع تطوير مواقع حديثة باستخدام React, Node.js, PHP, JavaScript, Next.js والمزيد.
يهدف الموقع لعرض الأعمال الاحترافية، دعم الباحثين والمطورين والمهتمين بالتقنية. | Mahmoud Ali Portfolio - Showcasing modern web projects using React, Node.js, PHP, JavaScript, Next.js and more.`,
  keywords: [
    'Mahmoud Ali',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Node.js',
    'Next.js',
    'PHP',
    'JavaScript',
    'Portfolio',
    'مطور ويب',
    'تطوير مواقع',
    'محفظة أعمال',
    'مشاريع ويب',
  ],
  authors: [{ name: 'Mahmoud Ali' }],
  openGraph: {
    title: 'Mahmoud Ali - Full Stack Developer | محمود علي - مطور ويب كامل',
    description:
      'محفظة أعمال احترافية لمطور ويب كامل باستخدام React, Node.js, PHP, JavaScript, Next.js والمزيد. | Professional portfolio showcasing modern web projects.',
    url: 'https://mahmoud-a-abdelrahim.vercel.app',
    siteName: 'Mahmoud Ali',
    images: [
      {
        url: 'https://mahmoud-a-abdelrahim.vercel.app/img/mahmoud%20A%20Abd.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahmoud Ali | محمود علي',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmoud Ali - Full Stack Developer | محمود علي',
    description: 'محفظة أعمال احترافية لمطور ويب كامل. | Professional web development portfolio.',
    images: ['https://mahmoud-a-abdelrahim.vercel.app/img/mahmoud%20A%20Abd.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <head>
        <link rel="icon" href="/img/mahmoud.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/img/mahmoud.jpg" />
        <meta property="og:image" content="/img/mahmoud.jpg" />
      </head>
      <body className="font-sans bg-[#0a0f1a] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
