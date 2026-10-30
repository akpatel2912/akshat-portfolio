import './globals.scss';

export const metadata = {
  metadataBase: new URL('https://akshatpatel.dev'),
  title: 'Akshat Patel — AI & Machine Learning Engineer',
  description: 'Portfolio of Akshat Patel, specializing in production-grade AI applications, deep learning architectures, multi-modal biometrics, and scalable machine learning systems.',
  keywords: [
    'Akshat Patel',
    'AI Engineer',
    'Machine Learning Engineer',
    'Deep Learning',
    'PyTorch',
    'Computer Vision',
    'FastAPI',
    'SmartClass',
    'Software Engineer'
  ],
  authors: [{ name: 'Akshat Patel', url: 'https://github.com/akpatel2912' }],
  creator: 'Akshat Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/akpatel2912',
    title: 'Akshat Patel — AI & Machine Learning Engineer',
    description: 'Cinematic AI & Software Engineering portfolio inspired by Forma. Deep learning, multi-modal perception, and scalable systems.',
    siteName: 'Akshat Patel Portfolio',
    images: [
      {
        url: '/images/akshat-portrait.jpg',
        width: 1200,
        height: 1600,
        alt: 'Akshat Patel — AI & Machine Learning Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshat Patel — AI & Machine Learning Engineer',
    description: 'Cinematic AI & Software Engineering portfolio inspired by Forma.',
    images: ['/images/akshat-portrait.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  themeColor: '#111110',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
