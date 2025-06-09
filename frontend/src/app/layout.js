import LayoutClient from '@/components/LayoutClient'
import "./globals.css";

export const metadata = {
  title: "Cloud Arcade Points Calculator | Google Cloud Skills Boost",
  description:
    "Effortlessly calculate and track your Google Cloud Arcade Points using your public profile. Built with ❤️ for cloud challengers and certification hunters.",
  // verification: {
  //   google: 'uK-J0VFacF5656kmnUMh20BMnH34i0PIK_5I3GuzprY',
  // },
  keywords: [
    "Google Cloud",
    "Arcade Points",
    "Skills Boost",
    "Badge Tracker",
    "Cloud Certification",
    "GCP Challenge",
    "Arcade Points Calculator",
    "Cloud Arcade Calculator",
    "Google Cloud Arcade",
    "Cloud Arcade Tracker",
    "Google Cloud SKill Boost",
    "Qwiklabs",
    "Google CLoud Arcade",
    "Arcade Hub",
    "Arcade Games",
    "Cloud Points",
    "Google Cloud Arcade Points",
    "Swags",
    "Google Swags"
  ],
  applicationName: "Arcade Points Calculator",
  authors: [{ name: "Subhchintak", url: "https://github.com/Subh-29" }],
  creator: "Subhchintak",
  publisher: "Subhchintak",
  metadataBase: new URL("https://arcade-hub-zeta.vercel.app"),
  alternates: {
    canonical: "https://arcade-hub-zeta.vercel.app",
    languages: {
      "en-US": "https://arcade-hub-zeta.vercel.app/en-US",
    },
  },
  openGraph: {
    title: "Cloud Arcade Points Calculator",
    description:
      "Track and calculate your Google Cloud Arcade points in seconds. Just drop your public profile and see your badge stats instantly.",
    url: "https://arcade-hub-zeta.vercel.app/",
    siteName: "Arcade Points Calculator",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Cloud Arcade Points Calculator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Arcade Calculator",
    description:
      "Quickly calculate and track your Google Cloud Arcade Points using your Skills Boost profile.",
    creator: "@NuhBRooooWillAddLater", // change this if you got one
    images: ["/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  themeColor: "#0f172a",
  category: "Technology",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Manual meta tag that metadata couldn't generate properly */}
        <meta
          name="google-site-verification"
          content="uK-J0VFacF5656kmnUMh20BMnH34i0PIK_5I3GuzprY" />
      </head>
      <body>
        <LayoutClient>

          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
