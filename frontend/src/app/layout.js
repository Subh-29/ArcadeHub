import LayoutClient from '@/components/LayoutClient'
import "./globals.css";

export const metadata = {
  title: "Cloud Arcade Points Calculator | Google Cloud Skills Boost",
  description:
    "Calculate and track your Google Cloud Arcade Points using your public profile link. Built for cloud challengers.",
  keywords: [
    "Google Cloud",
    "Arcade Points",
    "Skills Boost",
    "Badge Tracker",
    "GCP Challenge",
    "Cloud Arcade Calculator"
  ],
  openGraph: {
    title: "Cloud Arcade Points Calculator",
    description: "Track your GCP Arcade points with ease using your profile URL.",
    url: "https://arcade-hub-zeta.vercel.app/",
    siteName: "Arcade Points Calculator",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Cloud Arcade Points Calculator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Arcade Calculator",
    description: "Quickly calculate and track your Google Cloud Arcade Points.",
    images: ["/og-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>
          
        {children}
        </LayoutClient>
      </body>
    </html>
  );
}
