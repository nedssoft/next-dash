import "@/app/ui/global.css";
import { inter } from "@/app/fonts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official dashboard for Acme Inc.',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://acme-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
