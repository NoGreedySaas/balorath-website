import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Balorath - Free Gym Workout Tracker",
  description: "The gym tracker that's 100% free. No subscriptions. No ads. Just gains. Track workouts, calculate plates, and crush your fitness goals.",
  keywords: "gym tracker, workout app, free fitness app, plate calculator, workout tracking, iOS app",
  openGraph: {
    title: "Balorath - Free Gym Workout Tracker",
    description: "The gym tracker that's 100% free. No subscriptions. No ads. Just gains.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
