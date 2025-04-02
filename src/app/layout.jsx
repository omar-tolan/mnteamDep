export const metadata = {
  title: "MNTeam | Professional Fitness Training",
  description: "MNTeam - Professional fitness training and nutrition programs",
  keywords: "fitness, training, nutrition, workout, personal trainer",
  authors: [{ name: "MNTeam" }],
  openGraph: {
    title: "MNTeam - Professional Fitness Training",
    description: "Transform your body with professional fitness training and nutrition programs",
    images: [
      {
        url: "/homepage/home.jpg", // Remove ./public prefix as Next.js serves from public directory
        width: 1200,
        height: 630,
        alt: "MNTeam Homepage"
      }
    ],
    url: "https://mnteam.online/",
    siteName: "MNTeam",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "MNTeam - Professional Fitness Training",
    description: "Transform your body with professional fitness training and nutrition programs",
    images: ["/homepage/home.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  );
}
