import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XP',
  description: 'XP footer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


// import "./globals.css";
// import type { Metadata } from "next";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({ subsets: ["latin"], weight: ["200", "400"] });

// export const metadata: Metadata = {
//   title: "XP",
//   description: "XP footer",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={roboto.className}>{children}</body>
//     </html>
//   );
// }

